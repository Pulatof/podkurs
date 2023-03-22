import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLidDto } from './dto/create-lid.dto';
import { FindLidDto } from './dto/find-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { Lid } from './models/lid.model';
import { Op } from 'sequelize';

@Injectable()
export class LidService {
  constructor(@InjectModel(Lid) private readonly lidRepo: typeof Lid) {}
  async create(createLidDto: CreateLidDto) {
    const lid = await this.lidRepo.create(createLidDto);
    return lid;
  }

  findAll() {
    return this.lidRepo.findAll({ include: { all: true } });
  }

  async getByParam(findLidDto: FindLidDto) {
    const params = { ...findLidDto };
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
    if (params.test_date) {
      where.test_date = { [Op.eq]: new Date(params.test_date) };
    }
    if (params.startTestDate && params.endTestDate) {
      (where.test_date = { [Op.gte]: new Date(params.startTestDate) }),
        (where.test_date = { [Op.lte]: new Date(params.endTestDate) });
    }
    const lid = await this.lidRepo.findAll({
      where: where,
    });
    return lid;
  }

  async findOne(id: number) {
    const lid = await this.lidRepo.findOne({ where: { id } });
    if (!lid) {
      throw new BadRequestException('lid not found');
    }
    return lid;
  }

  async update(id: number, updateLidDto: UpdateLidDto) {
    const lid = await this.lidRepo.findOne({ where: { id } });
    if (!lid) {
      throw new BadRequestException('lid not found');
    }
    const updatedLid = await this.lidRepo.update(
      { ...updateLidDto },
      {
        where: { id },
        returning: true,
      },
    );
    const response = {
      message: 'Lid updated successfully',
      customer: updatedLid[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const lid = await this.lidRepo.findOne({ where: { id: id } });
    if (!lid) {
      throw new BadRequestException('Lid not found');
    }
    await this.lidRepo.destroy({ where: { id } });
    const response = {
      message: 'lid deleted succesfully',
      LidID: id,
    };
    return response;
  }
}
