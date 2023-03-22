import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateStageDto } from './create-stage.dto';

export class UpdateStageDto  {
    @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })

      @IsNotEmpty()
      @IsString()
      @IsOptional()
      name?: string;
}
