
import { ApiProperty } from '@nestjs/swagger';


export class LoginStuffDto {
    @ApiProperty({
      example: 'admin logini',
      description: 'Admin elektron pochtasi',
    })
    login: string;
  
    @ApiProperty({ example: 'password', description: 'Foydalanuvchi paroli' })
    password: string;

  }