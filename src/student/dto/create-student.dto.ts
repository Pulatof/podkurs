import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { Column, DataType, ForeignKey } from 'sequelize-typescript';

export class CreateStudentDto {
  @ApiProperty({
    example: '01.01.2000',
    description: 'Foydalanuvchi tugilgan sanasii',
  })
  @IsNotEmpty()
  @IsNumber()
  lid_id: number;

  @ApiProperty({
    example: 'foydalanuvchi niki',
    description: 'Foydalanuvchi nikneymi',
  })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({
    example: 'foydalanuvchi niki',
    description: 'Foydalanuvchi nikneymi',
  })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ example: '901234567', description: 'Foydalanuvchi telefoni' })
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({
    example: '01.01.2000',
    description: 'Foydalanuvchi tugilgan sanasii',
  })
  @IsNotEmpty()
  @IsDateString()
  birthday: Date;

  @ApiProperty({
    example: 'user familiasi',
    description: 'Foydalanuvchi familiasi & Lastname of user',
  })
  @IsNotEmpty()
  @IsString()
  male: string;

  @ApiProperty({
    example: '01.01.2000',
    description: 'Foydalanuvchi tugilgan sanasii',
  })
  @IsNotEmpty()
  @IsNumber()
  group_id: number;
}
