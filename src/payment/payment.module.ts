import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment } from './models/payment.model';
import { Student } from 'src/student/models/student.model';

@Module({
  imports:[SequelizeModule.forFeature([Payment, Student])],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
