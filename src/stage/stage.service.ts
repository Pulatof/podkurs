import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { Stage } from './models/stage.model';

@Injectable()
export class StageService {
  constructor(
    @InjectModel(Stage) private readonly stageRepo:typeof Stage
  ){}
  async create(createStageDto: CreateStageDto) {
    const stage = await this.stageRepo.create(createStageDto)
    return stage
  }

  findAll() {
    return this.stageRepo.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const stage = await this.stageRepo.findOne({where:{id}})
    if (!stage){
      throw new BadRequestException('stage not found')
    }
    return stage
  }

  async update(id: number, updateStageDto: UpdateStageDto) {
    const stage = await this.stageRepo.findOne({where:{id}})
    if (!stage){
      throw new BadRequestException('stage not found')
    }
    const updatedStage = await this.stageRepo.update(
      {...updateStageDto},
      {where:{id}, returning:true})
      const response={
        message:'stage updated succesully',
        stage: updatedStage[1][0]
      }
      return response
  }
  

  async remove(id: number) {
    const stage = await this.stageRepo.findOne({where:{id}})
    if (!stage){
      throw new BadRequestException('stage not found')
    }
    await this.stageRepo.destroy({where:{id}})
    const response={
      message:'stage removed succesfully',
      StageID:id
    }
    return response
  }
}
