import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';
import { ReasonLid } from './models/reason_lid.model';

@Injectable()
export class ReasonLidService {
  constructor(
    @InjectModel(ReasonLid) private readonly reason_lidRepo:typeof ReasonLid
  ){}
  async create(createReasonLidDto: CreateReasonLidDto) {
    const reason_lid = await this.reason_lidRepo.create(createReasonLidDto)
    return reason_lid
  }

  findAll() {
    return this.reason_lidRepo.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const reason_lid = await this.reason_lidRepo.findOne({where:{id}})
    if (!reason_lid){
      throw new BadRequestException('reason_lid not found')
    }
    return reason_lid
  }

  async update(id: number, updateReasonLidDto: UpdateReasonLidDto) {
    const reason_lid = await this.reason_lidRepo.findOne({where:{id}})
    if (!reason_lid){
      throw new BadRequestException('reason_lid not found')
    }
    const updatedReasonLid = await this.reason_lidRepo.update(
      {...updateReasonLidDto },
      {
        where: { id },
        returning: true,
      },
    );
    const response = {
      message: 'ReasonLid updated successfully',
      customer: updatedReasonLid[1][0],
    }
    return response
  }

  async remove(id: number) {
    const reason_lid = await this.reason_lidRepo.findOne({ where: { id: id } });
    if (!reason_lid) {
      throw new BadRequestException('ReasonLid not found');
    }
    await this.reason_lidRepo.destroy({ where: { id } });
    const response = {
      message: 'reason_lid deleted succesfully',
      ReasonLidID: id,
    };
    return response;
  }
}
