import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto {
    @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsNumber()
      lid_id?: number;
    
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
      @IsPhoneNumber()
      phone_number: string;
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsDateString()
      birthday?: Date;
    
      @ApiProperty({
        example: 'user familiasi',
        description: 'Foydalanuvchi familiasi & Lastname of user',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsString()
      male?: string;
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })
      @IsOptional()
      @IsNotEmpty()
      @IsNumber()
      group_id?: number;
}
