import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { Target } from './models/target.model';

@Injectable()
export class TargetService {
  constructor(
    @InjectModel(Target) private readonly targetRepo:typeof Target
  ){}
  async create(createTargetDto: CreateTargetDto) {
    const target = await this.targetRepo.create(createTargetDto)
    return target
  }

  findAll() {
    return this.targetRepo.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const target = await this.targetRepo.findOne({where:{id}})
    if (!target){
      throw new BadRequestException('target not found')
    }
    return target
  }

  async update(id: number, updateTargetDto: UpdateTargetDto) {
    const target = await this.targetRepo.findOne({where:{id}})
    if (!target){
      throw new BadRequestException('target not found')
    }
    const updatedTarget = await this.targetRepo.update(
      {...updateTargetDto},
      {where:{id}, returning:true})
      const response={
        message:'target updated succesully',
        target: updatedTarget[1][0]
      }
      return response
  }
  

  async remove(id: number) {
    const target = await this.targetRepo.findOne({where:{id}})
    if (!target){
      throw new BadRequestException('target not found')
    }
    await this.targetRepo.destroy({where:{id}})
    const response={
      message:'target removed succesfully',
      TargetID:id
    }
    return response
  }
}
