import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateReasonLidDto } from './create-reason_lid.dto';

export class UpdateReasonLidDto{
    @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })

      @IsNotEmpty()
      @IsString()
      @IsOptional()
      reason_lid?: string;
}
