import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Group } from "src/group/models/group.model"
import { Lid } from "src/lid/models/lid.model"

interface StudentAttrs{
    lid_id:number
    first_name:string
    last_name:string
    phone_number:string
    birthday:Date
    male:string
    group_id:number
}


@Table({tableName:'student'})
export class Student extends Model<Student, StudentAttrs>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @ForeignKey(()=>Lid)
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    lid_id:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    first_name:string

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    last_name:string

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    phone_number:string

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.DATE,
        allowNull:false
    })
    birthday:Date

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.STRING,
    })
    male:string

    @ApiProperty({example:'1', description:'aydi raqami'})
    @ForeignKey(()=>Group)
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    group_id:number


}
