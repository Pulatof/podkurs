import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateLidStatusDto } from './create-lid_status.dto';

export class UpdateLidStatusDto {
    @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })

      @IsNotEmpty()
      @IsString()
      @IsOptional()
      status?: string;
}
