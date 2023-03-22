import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Group } from "src/group/models/group.model"

interface LessonAttrs{
    lesson_theme:string
    lesson_number:number
    group_id:number
    lesson_date:Date
}


@Table({tableName:'lesson'})
export class Lesson extends Model<Lesson, LessonAttrs>{
    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number

    @ApiProperty({example:'user ismi', description:'Foydalanuvchi ismi & Firstname of user'})
    @Column({
        type:DataType.STRING
    })
    lesson_theme:string

    @ApiProperty({example:'user ismi', description:'Foydalanuvchi ismi & Firstname of user'})
    @Column({
        type:DataType.INTEGER
    })
    lesson_number:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @ForeignKey(()=>Group)
    @Column({
        type:DataType.INTEGER,
        // allowNull:false
    })
    group_id:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.DATE,
        // allowNull:false
    })
    lesson_date:Date



}
