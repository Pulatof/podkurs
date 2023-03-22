import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateLidDto {
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

  phone_number?: string;

  // @ApiProperty({
  //   example: '01.01.2000',
  //   description: 'Foydalanuvchi tugilgan sanasii',
  // })
  // @IsNotEmpty()
  // @IsNumber()
  // @IsOptional()
  // targed_id?: number;

  // @ApiProperty({
  //   example: '01.01.2000',
  //   description: 'Foydalanuvchi tugilgan sanasii',
  // })
  // @IsNotEmpty()
  // @IsNumber()
  // @IsOptional()
  // lid_stage?: number;

  @ApiProperty({
    example: '01.01.2000',
    description: 'Foydalanuvchi tugilgan sanasii',
  })
  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  test_date?: Date;

  // @ApiProperty({
  //   example: '01.01.2000',
  //   description: 'Foydalanuvchi tugilgan sanasii',
  // })
  // @IsNotEmpty()
  // @IsNumber()
  // @IsOptional()
  // trial_lesson_id?: number;

  // @ApiProperty({
  //   example: '01.01.2000',
  //   description: 'Foydalanuvchi tugilgan sanasii',
  // })
  // @IsNotEmpty()
  // @IsNumber()
  // @IsOptional()
  // lid_status_id?: number;

  // @ApiProperty({
  //   example: '01.01.2000',
  //   description: 'Foydalanuvchi tugilgan sanasii',
  // })

  // @IsNotEmpty()
  // @IsNumber()
  // @IsOptional()
  // cancel_reason_id?: number;
}
