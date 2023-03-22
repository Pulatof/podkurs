import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
import { LidStatus } from './models/lid_status.model';

@Injectable()
export class LidStatusService {
  constructor(
    @InjectModel(LidStatus) private readonly lid_statusRepo:typeof LidStatus
  ){}
  async create(createLidStatusDto: CreateLidStatusDto) {
    const lid_status = await this.lid_statusRepo.create(createLidStatusDto)
    return lid_status
  }

  findAll() {
    return this.lid_statusRepo.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const lid_status = await this.lid_statusRepo.findOne({where:{id}})
    if (!lid_status){
      throw new BadRequestException('lid_status not found')
    }
    return lid_status
  }

  async update(id: number, updateLidStatusDto: UpdateLidStatusDto) {
    const lid_status = await this.lid_statusRepo.findOne({where:{id}})
    if (!lid_status){
      throw new BadRequestException('lid_status not found')
    }
    const updatedLidStatus = await this.lid_statusRepo.update(
      {...updateLidStatusDto },
      {
        where: { id },
        returning: true,
      },
    );
    const response = {
      message: 'LidStatus updated successfully',
      customer: updatedLidStatus[1][0],
    }
    return response
  }

  async remove(id: number) {
    const lid_status = await this.lid_statusRepo.findOne({ where: { id: id } });
    if (!lid_status) {
      throw new BadRequestException('LidStatus not found');
    }
    await this.lid_statusRepo.destroy({ where: { id } });
    const response = {
      message: 'lid_status deleted succesfully',
      LidStatusID: id,
    };
    return response;
  }
}
