import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Lesson } from "src/lesson/models/lesson.model"
import { Student } from "src/student/models/student.model"

interface StudentLessonAttrs{
    lesson_id:number
    student_id:number
    is_there:boolean
    reason:string
    be_paid:boolean
}


@Table({tableName:'student_lesson'})
export class StudentLesson extends Model<StudentLesson, StudentLessonAttrs>{
    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @ForeignKey(()=>Lesson)
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    lesson_id:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @ForeignKey(()=>Student)
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    student_id:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_there:boolean

    @ApiProperty({example:'user ismi', description:'Foydalanuvchi ismi & Firstname of user'})
    @Column({
        type:DataType.STRING
    })
    reason:string

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    be_paid:boolean

}
