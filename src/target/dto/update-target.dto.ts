import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateTargetDto } from './create-target.dto';

export class UpdateTargetDto {
    @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })

      @IsNotEmpty()
      @IsString()
      @IsOptional()
      name?: string;
}
