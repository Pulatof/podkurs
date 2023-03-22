import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto  {
    @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })
 
      @IsNotEmpty()
      @IsString()
      @IsOptional()
      name?: string;



      @IsNotEmpty()
      @IsString()
      @IsOptional()
      description?: string;



}
