import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreatePaymentDto } from './create-payment.dto';

export class UpdatePaymentDto  {
    @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })

      @IsNotEmpty()
      @IsNumber()
      @IsOptional()
      student_id?: number;
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })

      @IsNotEmpty()
      @IsDateString()
      @IsOptional()
      payment_last_date?: Date;
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })

      @IsNotEmpty()
      @IsNumber()
      @IsOptional()
      price?: number;
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })

      @IsNotEmpty()
      @IsNumber()
      @IsOptional()
      total_attent?: bigint;
}
