import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { CreateLidDto } from './create-lid.dto';

export class UpdateLidDto  {
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
    
      // @ApiProperty({
      //   example: '01.01.2000',
      //   description: 'Foydalanuvchi tugilgan sanasii',
      // })
      // @IsOptional()
      // @IsNotEmpty()
      // @IsNumber()
      // targed_id?: number;
    
      // @ApiProperty({
      //   example: '01.01.2000',
      //   description: 'Foydalanuvchi tugilgan sanasii',
      // })
      // @IsOptional()
      // @IsNotEmpty()
      // @IsNumber()
      // lid_stage?: number;
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsDateString()
      test_date?: Date;
    
      // @ApiProperty({
      //   example: '01.01.2000',
      //   description: 'Foydalanuvchi tugilgan sanasii',
      // })
      // @IsOptional()
      // @IsNotEmpty()
      // @IsNumber()
      // trial_lesson_id?: number;
    
      // @ApiProperty({
      //   example: '01.01.2000',
      //   description: 'Foydalanuvchi tugilgan sanasii',
      // })
      // @IsOptional()
      // @IsNotEmpty()
      // @IsNumber()
      // lid_status_id?: number;
    
      // @ApiProperty({
      //   example: '01.01.2000',
      //   description: 'Foydalanuvchi tugilgan sanasii',
      // })
      // @IsOptional()
      // @IsNotEmpty()
      // @IsNumber()
      // cancel_reason_id?: number;
}
