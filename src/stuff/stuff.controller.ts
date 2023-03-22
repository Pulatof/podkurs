import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { PasswordStuffDto } from './dto/stuff-password.dto';
import { LoginStuffDto } from './dto/login-stuff.dto';
import { CookieGetter } from 'src/decorators/cookieGetter.decorator';
import { Response } from 'express';
import { FindStuffDto } from './dto/find-stuff.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { Roles } from 'src/decorators/roles-auth.decorators';
import { RolesGuard } from 'src/guards/roles.guard';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  // @Post()
  // create(@Body() createStuffDto: CreateStuffDto) {
  //   return this.stuffService.create(createStuffDto);
  // }

  @Post('signup')
  registration(
    @Body() createStuffDto: CreateStuffDto,
    @Res({ passthrough: true }) res: Response,) {
    return this.stuffService.registration(createStuffDto, res);
  }

  @Post('signin')
  login(
    @Body() loginStuffDto:LoginStuffDto,
    @Res({ passthrough: true }) res: Response,) {
    return this.stuffService.login(loginStuffDto, res);
  }


  @Post('signout')
  logout(
    @CookieGetter('refresh_token') refreshToken:string,
    @Res({ passthrough: true }) res: Response,) {
    return this.stuffService.logout(refreshToken, res);
  }

  @Post(':id/refresh')
  refresh(
    @Param('id') id:string,
    @CookieGetter('refresh_token') refreshToken:string,
    @Res({ passthrough: true }) res: Response,) {
    return this.stuffService.refreshToken(+id, refreshToken, res);
  }

  @Post(':id/activate')
  activate(
    @Param('id') id: string,
  ) {
    return this.stuffService.activate(+id);
  }




  @Patch(':id/password')
  updatedPassword(@Param('id') id: string, @Body() updateStuffPassDto:  PasswordStuffDto) {
    return this.stuffService.updateStuffPass(+id, updateStuffPassDto);
  }

  @Roles('ADMIN', 'SUPERADMIN')
  @UseGuards(RolesGuard)
  @Post('role')
  addRoleByName(@Body() AddRoleDto:AddRoleDto){
    return this.stuffService.addRoleByName(AddRoleDto)
  }


  // @Patch(':name')
  // addRoleByName(@Body() addRoleDto:AddRoleDto) {
  //   return this.stuffService.addRoleByName(addRoleDto)
  // }
  // @Post('reg')
  // registration(@Body() createStuffDto: CreateStuffDto) {
  //   return this.stuffService.registration(createStuffDto);
  // }

  @Get('find')
  getByParam(@Body() findStuffDto: FindStuffDto) {
    return this.stuffService.getByParam(findStuffDto);
  }


  @Get()
  findAll() {
    return this.stuffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stuffService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStuffDto: UpdateStuffDto) {
    return this.stuffService.update(+id, updateStuffDto);
  }

  @Delete('remove')
  removeRole(@Body() addRoledto:AddRoleDto) {
    return this.stuffService.removeRole(addRoledto)
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stuffService.remove(+id);
  }
}
