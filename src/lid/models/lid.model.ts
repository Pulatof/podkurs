import { ApiOperation, ApiProperty } from "@nestjs/swagger"
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { LidStatus } from "src/lid_status/models/lid_status.model"
import { ReasonLid } from "src/reason_lid/models/reason_lid.model"
import { Stage } from "src/stage/models/stage.model"
import { Target } from "src/target/models/target.model"

interface LidAttrs{
    first_name:string
    last_name:string
    // phone_number:string
    // targed_id:number
    // lid_stage:number
    // test_date:Date
    // trial_lesson_id:number
    // lid_status_id:number
    // cancel_reason_id:number
}

@Table({tableName:'lid'})
export class Lid extends Model<Lid, LidAttrs>{
    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number

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

    // @ApiProperty({example:'1', description:'aydi raqami'})
    // // @ForeignKey(()=>Target)
    // @Column({
    //     type:DataType.INTEGER,
    //     allowNull:false
    // })
    // targed_id:number

    // @ApiProperty({example:'1', description:'aydi raqami'})
    // // @ForeignKey(()=>Stage)
    // @Column({
    //     type:DataType.INTEGER,
    //     allowNull:false
    // })
    // lid_stage:number

    @ApiProperty({example:'1', description:'aydi raqami'})
    @Column({
        type:DataType.DATE,
        allowNull:false
    })
    test_date:Date


    // @ApiProperty({example:'1', description:'aydi raqami'})
    // @Column({
    //     type:DataType.INTEGER,
    //     allowNull:false
    // })
    // trial_lesson_id:number

    // @ApiProperty({example:'1', description:'aydi raqami'})
    // // @ForeignKey(()=>LidStatus)
    // @Column({
    //     type:DataType.INTEGER,
    //     allowNull:false
    // })
    // lid_status_id:number


    // @ApiProperty({example:'1', description:'aydi raqami'})
    // // @ForeignKey(()=>ReasonLid)
    // @Column({
    //     type:DataType.INTEGER,
    //     allowNull:false
    // })
    // cancel_reason_id:number


}
