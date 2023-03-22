import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './models/payment.model';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment) private readonly paymentRepo:typeof Payment
  ){}
  async create(createPaymentDto: CreatePaymentDto) {
    const payment = await this.paymentRepo.create(createPaymentDto)
    return payment
  }

  findAll() {
    return this.paymentRepo.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const payment = await this.paymentRepo.findOne({where:{id}})
    if (!payment){
      throw new BadRequestException('payment not found')
    }
    return payment
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.paymentRepo.findOne({where:{id}})
    if (!payment){
      throw new BadRequestException('payment not found')
    }
    const updatedPayment = await this.paymentRepo.update(
      {...updatePaymentDto},
      {where:{id}, returning:true})
      const response={
        message:'payment updated succesully',
        payment: updatedPayment[1][0]
      }
      return response
  }
  

  async remove(id: number) {
    const payment = await this.paymentRepo.findOne({where:{id}})
    if (!payment){
      throw new BadRequestException('payment not found')
    }
    await this.paymentRepo.destroy({where:{id}})
    const response={
      message:'payment removed succesfully',
      PaymentID:id
    }
    return response
  }
}
