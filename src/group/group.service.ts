import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './models/group.model';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(Group) private readonly groupRepo:typeof Group
  ){}
  async create(createGroupDto: CreateGroupDto) {
    const group = await this.groupRepo.create(createGroupDto)
    return group
  }

  findAll() {
    return this.groupRepo.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const group = await this.groupRepo.findOne({where:{id}})
    if (!group){
      throw new BadRequestException('group not found')
    }
    return group
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    const group = await this.groupRepo.findOne({where:{id}})
    if (!group){
      throw new BadRequestException('group not found')
    }
    const updatedGroup = await this.groupRepo.update(
      {...updateGroupDto},
      {where:{id}, returning:true})
      const response={
        message:'group updated succesully',
        group: updatedGroup[1][0]
      }
      return response
  }
  

  async remove(id: number) {
    const group = await this.groupRepo.findOne({where:{id}})
    if (!group){
      throw new BadRequestException('group not found')
    }
    await this.groupRepo.destroy({where:{id}})
    const response={
      message:'group removed succesfully',
      GroupID:id
    }
    return response
  }
}
