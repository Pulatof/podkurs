import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { CreateStuffDto } from './create-stuff.dto';

export class UpdateStuffDto  {
    @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsString()
      first_name?: string;
    
      @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsString()
      last_name?: string;
    
      @ApiProperty({ example: '901234567', description: 'Foydalanuvchi telefoni' })
      @IsOptional()
      @IsPhoneNumber()
      phone_number?: string;
    
      @ApiProperty({
        example: 'admin logini',
        description: 'Admin elektron pochtasi',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsString()
      login: string;
    
      // @ApiProperty({
      //   example: '01.01.2000',
      //   description: 'Foydalanuvchi tugilgan sanasii',
      // })
      // @IsOptional()
      // @IsNotEmpty()
      // @IsNumber()
      // role_id?: number;
}
