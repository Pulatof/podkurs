
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';


export class FindStudentDto  {
    @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })

      first_name?: string;
    
      @ApiProperty({
        example: 'foydalanuvchi niki',
        description: 'Foydalanuvchi nikneymi',
      })

      last_name?: string;
    
      @ApiProperty({ example: '901234567', description: 'Foydalanuvchi telefoni' })

      phone_number?: string;
    
    
      @ApiProperty({
        example: '01.01.2000',
        description: 'Foydalanuvchi tugilgan sanasii',
      })
      birthday?: Date;

      
    
}
