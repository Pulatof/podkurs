import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.model';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role) private readonly roleRepo:typeof Role
  ){}
  async create(createRoleDto: CreateRoleDto) {
    const role = await this.roleRepo.create(createRoleDto)
    return role
  }

  findAll() {
    return this.roleRepo.findAll({include:{all:true}})
  }

  findAllRoles() {
    return this.roleRepo.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const role = await this.roleRepo.findOne({where:{id}})
    if (!role){
      throw new BadRequestException('role not found')
    }
    return role
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepo.findOne({where:{id}})
    if (!role){
      throw new BadRequestException('role not found')
    }
    const updatedRole = await this.roleRepo.update(
      {...updateRoleDto},
      {where:{id}, returning:true})
      const response={
        message:'role updated succesully',
        role: updatedRole[1][0]
      }
      return response
  }
  
async getRoleByName(name:string){
  const role = await this.roleRepo.findOne({where:{name:name},include:{all:true}})
  if(!role){
    throw new BadRequestException('role not found')
  }
  return role
}




  async remove(id: number) {
    const role = await this.roleRepo.findOne({where:{id}})
    if (!role){
      throw new BadRequestException('role not found')
    }
    await this.roleRepo.destroy({where:{id}})
    const response={
      message:'role removed succesfully',
      RoleID:id
    }
    return response
  }
  
}
