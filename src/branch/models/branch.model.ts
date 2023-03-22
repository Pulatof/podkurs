import { ApiProperty } from "@nestjs/swagger"
import { Model } from "sequelize-typescript"
import { Column, DataType, Table } from "sequelize-typescript"

interface BranchAttrs{
    name:string
    address:string
    call_number:string
}


@Table({tableName:'branch'})
export class Branch extends Model<Branch, BranchAttrs>{
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
    name:string


    @ApiProperty({example:'user ismi', description:'Foydalanuvchi ismi & Firstname of user'})
    @Column({
        type:DataType.STRING
    })
    address:string

    @ApiProperty({example:'user ismi', description:'Foydalanuvchi ismi & Firstname of user'})
    @Column({
        type:DataType.STRING
    })
    call_number:string

}
