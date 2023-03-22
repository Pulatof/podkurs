import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  isString,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateStuffDto {
  @ApiProperty({
    example: 'foydalanuvchi niki',
    description: 'Foydalanuvchi nikneymi',
  })
  @IsOptional()
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
    example: 'admin logini',
    description: 'Admin elektron pochtasi',
  })

  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: 'password', description: 'Foydalanuvchi paroli' })

  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example: 'confirm_password',
    description: 'Foydalanuvchi parolini qayta tekshirish',
  })

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @IsStrongPassword()
  confirm_password: string;


}
