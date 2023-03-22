import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Branch } from 'src/branch/models/branch.model';
import { Lesson } from 'src/lesson/models/lesson.model';
import { Stage } from 'src/stage/models/stage.model';
import { Stuff } from 'src/stuff/models/stuff.model';

interface GroupAttrs {
  group_name: string;
  teacher_id: number;
  lesson_start_time: string;
  lesson_cont: string;
  lesson_week_day: string;
  group_stage_id: number;
  room_number: string;
  room_floow: number;
  branch_id: number;
  lesson_quant: number;
}

@Table({ tableName: 'group' })
export class Group extends Model<Group, GroupAttrs> {
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
  @ForeignKey(() => Lesson)
  @Column({
    type: DataType.STRING,
  })
  group_name: string;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @ForeignKey(() => Stuff)
  @Column({
    type: DataType.INTEGER,
    // allowNull: false,
  })
  teacher_id: number;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.STRING,
    // allowNull: false,
  })
  lesson_start_time: string;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.STRING,
    // allowNull: false,
  })
  lesson_count: string;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.STRING,
    // allowNull: false,
  })
  lesson_week_day: string;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @ForeignKey(() => Stage)
  @Column({
    type: DataType.INTEGER,
    // allowNull: false,
  })
  group_stage_id: number;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.STRING,
    // allowNull: false,
  })
  room_number: string;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.INTEGER,
    // allowNull: false,
  })
  room_floor: number;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @ForeignKey(() => Branch)
  @Column({
    type: DataType.INTEGER,
    // allowNull: false,
  })
  branch_id: number;

  @ApiProperty({ example: '1', description: 'aydi raqami' })
  @Column({
    type: DataType.INTEGER,
    // allowNull: false,
  })
  lesson_quant: number;
}
