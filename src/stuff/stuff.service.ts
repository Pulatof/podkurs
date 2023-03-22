import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { Stuff } from './models/stuff.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginStuffDto } from './dto/login-stuff.dto';
import { PasswordStuffDto } from './dto/stuff-password.dto';
import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { FindStuffDto } from './dto/find-stuff.dto';
import { Op } from 'sequelize';
import { RoleService } from 'src/role/role.service';
import { AddRoleDto } from './dto/add-role.dto';

@Injectable()
export class StuffService {
  constructor(
    @InjectModel(Stuff)
    private readonly stuffRepo: typeof Stuff,
    private readonly jwtService: JwtService,
    private readonly roleService: RoleService,
  ) {}
  async registration(createStuffDto: CreateStuffDto, res: Response) {
    const stuff = await this.stuffRepo.findOne({
      where: { first_name: createStuffDto.first_name },
    });
    if (stuff) {
      throw new BadRequestException('Stuff allready exists');
    }
    if (createStuffDto.confirm_password !== createStuffDto.password) {
      throw new BadRequestException('Stuff not match');
    }
    const hashed_password = await bcrypt.hash(createStuffDto.password, 7);
    const newStuff = await this.stuffRepo.create({
      ...createStuffDto,
      hashed_password: hashed_password,
    });

    const role = await this.roleService.getRoleByName('ADMIN');
    // const role = await this.roleService.getRoleByName('User')
    if (!role) {
      throw new NotFoundException('Rol topilmadi');
    }
    await newStuff.$set('roles', [role.id]);
    newStuff.roles = [role];

    const tokens = await this.getTokens(newStuff);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedStuff = await this.stuffRepo.update(
      { hashed_refresh_token },
      { where: { id: newStuff.id }, returning: true },
    );

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 60 * 60 * 24 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Stuff registereted succesfulli',
      stuff: updatedStuff[1][0],
      tokens: tokens,
    };
    return response;
  }

  async login(loginStuffDto: LoginStuffDto, res: Response) {
    const { login, password } = loginStuffDto;
    const stuff = await this.stuffRepo.findOne({
      where: { login: login },
    });
    if (!stuff) {
      throw new UnauthorizedException('Email or (password) is not match');
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      stuff.hashed_password,
    );
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Password or (Email) is not match');
    }
    const tokens = await this.getTokens(stuff);
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 60 * 60 * 24 * 1000,
      httpOnly: true,
    });
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedStuff = await this.stuffRepo.update(
      { hashed_refresh_token },
      { where: { id: stuff.id }, returning: true },
    );
    const response = {
      message: 'stuff logged succesfully',
      stuff: updatedStuff[1][0],
      tokens: tokens,
    };
    return response;
  }

  async logout(refreshToken: string, res: Response) {
    const stuffData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!stuffData) {
      throw new ForbiddenException('stuff not found');
    }
    const updateStuff = await this.stuffRepo.update(
      { hashed_refresh_token: null },
      { where: { id: stuffData.id }, returning: true },
    );
    res.clearCookie('refreshToken');
    const response = {
      message: 'stuff logged out succesfully',
      stuff: updateStuff[1][0],
    };
    return response;
  }

  async getTokens(stuff: Stuff) {
    const jwtPayload = {
      id: stuff.id,
      is_active: stuff.is_active,
      roles: stuff.roles,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshToken(stuff_id: number, refresh_token: string, res: Response) {
    const decodedToken = this.jwtService.decode(refresh_token);
    if (stuff_id !== decodedToken['id']) {
      throw new BadRequestException('Stuff not found');
    }
    const stuff = await this.stuffRepo.findOne({
      where: { id: stuff_id },
    });
    if (!stuff || !stuff.hashed_refresh_token) {
      throw new BadRequestException('stuff not found');
    }
    const tokenMatch = await bcrypt.compare(
      refresh_token,
      stuff.hashed_refresh_token,
    );
    if (!tokenMatch) {
      throw new ForbiddenException('stuff not found');
    }
    const tokens = await this.getTokens(stuff);
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 60 * 60 * 24 * 1000,
      httpOnly: true,
    });

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedStuff = await this.stuffRepo.update(
      {
        hashed_refresh_token: hashed_refresh_token,
      },
      { where: { id: stuff.id }, returning: true },
    );
    const response = {
      message: 'stuff refreshshed',
      stuff: updatedStuff[1][0],
      tokens: tokens,
    };
    return response;
  }

  async updateStuffPass(id: number, updateStuffPasswordDto: PasswordStuffDto) {
    const stuff = await this.stuffRepo.findOne({ where: { id: id } });
    if (!stuff) {
      throw new BadRequestException('stuff not found');
    }
    const password = updateStuffPasswordDto.password;

    const isMatchPass = await bcrypt.compare(password, stuff.hashed_password);

    if (!isMatchPass) {
      throw new BadRequestException('incorrect password');
    }
    if (
      updateStuffPasswordDto.confirm_password !==
      updateStuffPasswordDto.new_password
    ) {
      throw new BadRequestException('password is not match');
    }
    const hashed_password = await bcrypt.hash(
      updateStuffPasswordDto.new_password,
      7,
    );
    const updatedStuff = await this.stuffRepo.update(
      { hashed_password },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'Password updates succesfully',
      stuff: updatedStuff[1][0],
    };
    return response;
  }

  findAll() {
    return this.stuffRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const stuff = await this.stuffRepo.findOne({ where: { id } });
    if (!stuff) {
      throw new BadRequestException('stuff not found');
    }
    return stuff;
  }

  async update(id: number, updateStuffDto: UpdateStuffDto) {
    const stuff = await this.stuffRepo.findOne({ where: { id } });
    if (!stuff) {
      throw new BadRequestException('stuff not found');
    }
    const updatedStuff = await this.stuffRepo.update(
      { ...updateStuffDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'stuff updated succesully',
      stuff: updatedStuff[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const stuff = await this.stuffRepo.findOne({ where: { id } });
    if (!stuff) {
      throw new BadRequestException('stuff not found');
    }
    await this.stuffRepo.destroy({ where: { id } });
    const response = {
      message: 'stuff removed succesfully',
      StuffID: id,
    };
    return response;
  }

  async activate(id: number) {
    const stuff = await this.stuffRepo.findOne({ where: { id: id } });
    if (!stuff) {
      throw new BadRequestException('stuff not found');
    }
    const is_active = stuff.is_active;
    if (is_active === true) {
      const updatedStuff = await this.stuffRepo.update(
        {
          is_active: false,
        },
        { where: { id }, returning: true },
      );
      const response = {
        message: 'stuff deactivated',
        stuff: updatedStuff[1][0],
      };
      return response;
    } else {
      const updatedStuff = await this.stuffRepo.update(
        { is_active: true },
        { where: { id }, returning: true },
      );
      const response = {
        message: 'stuff activated',
        stuff: updatedStuff[1][0],
      };
      return response;
    }
  }

  async getByParam(findStuffDto: FindStuffDto) {
    const params = { ...findStuffDto };
    console.log(params);
    const where: any = {};
    if (params.first_name) {
      where.first_name = { [Op.like]: `%${params.first_name}%` };
    }
    if (params.last_name) {
      where.last_name = { [Op.like]: `%${params.last_name}%` };
    }
    if (params.phone_number) {
      where.phone_number = {
        [Op.like]: `%${params.phone_number.trimStart()}%`,
      };
    }
    const stuff = await this.stuffRepo.findAll({
      where: where,
    });
    return stuff;
  }

  async addRoleByName(addRoleDto: AddRoleDto) {
    const stuff = await this.stuffRepo.findByPk(addRoleDto.stuff_id);
    const role = await this.roleService.getRoleByName(addRoleDto.name);
    if (role && stuff) {
      await stuff.$add('role', role.id);
      return addRoleDto;
    }
    throw new NotFoundException('Foydalanuvchi yoki rol topilmadi');
  }

  async removeRole(addRoleDto: AddRoleDto) {
    const stuff = await this.stuffRepo.findOne({
      where: { id: addRoleDto.stuff_id },
    });

    const role = await this.roleService.getRoleByName(addRoleDto.name);
    if (role && stuff) {
      await stuff.$remove('roles', [role.id]);
      return stuff;
    }
    throw new NotFoundException('stuff not found');
  }
}
