import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Stuff } from 'src/stuff/models/stuff.model';
import { StuffRoles } from './stuff-role.model';

interface RoleAttrs {
  name: string;
  description:string
}

@Table({ tableName: 'role' })
export class Role extends Model<Role, RoleAttrs> {
  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'user ismi',
    description: 'Foydalanuvchi ismi & Firstname of user',
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;


  @ApiProperty({
    example: 'user ismi',
    description: 'Foydalanuvchi ismi & Firstname of user',
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;


  // @BelongsToMany(()=>Stuff, ()=>StuffRoles)
  // stuff:Stuff[]

}
