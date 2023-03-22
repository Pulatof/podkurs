import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Role } from 'src/role/models/role.model';
import { StuffRoles } from 'src/role/models/stuff-role.model';

interface StuffAttrs {
  first_name: string;
  last_name: string;
  phone_number: string;
  login: string;
  password: string;
  is_active: boolean;
  role_id: number;
  hashed_password:string

}

@Table({ tableName: 'stuff' })
export class Stuff extends Model<Stuff, StuffAttrs> {
  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @ApiProperty({ example: 'password', description: 'Foydalanuvchi parolie' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  login: string;

  @ApiProperty({ example: 'password', description: 'Foydalanuvchi parolie' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: 'false',
    description: 'Foydalanuvchi tasdiqlangan holati',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  // @ApiProperty({ example: '1', description: 'aydi raqami' })
  // @ForeignKey(()=>Role)
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: false,
  // })
  // role_id: number;

  @ApiProperty({example:'token', description:'Tasdiqlangan holati'})
  @Column({
      type:DataType.STRING,
      defaultValue:false
  })
  hashed_refresh_token:string

  @ApiProperty({example:'password', description:'Foydalanuvchi parolie'})
    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    hashed_password:string


    @BelongsToMany(()=>Role, ()=>StuffRoles)
    roles:Role[]
}
