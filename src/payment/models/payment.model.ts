import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Student } from "src/student/models/student.model"

interface PaymentAttrs{
    student_id:number
    payment_last_date:Date
    price:number
    is_paid:boolean
    total_attent:bigint
}


@Table({tableName:'payment'})
export class Payment extends Model<Payment, PaymentAttrs>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @ForeignKey(()=>Student)
    @Column({
        type:DataType.INTEGER,
        // allowNull:false
    })
    student_id:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.DATE,
        // allowNull:false
    })
    payment_last_date:Date

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.DECIMAL,
        // allowNull:false
    })
    price:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.BOOLEAN,
        // defaultValue:false
    })
    is_paid:boolean

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.BIGINT,
        // allowNull:false
    })
    total_attend:bigint
}
