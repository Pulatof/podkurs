import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Stuff } from "src/stuff/models/stuff.model";
import { Role } from "./role.model";



@Table({tableName:'stuff_roles', createdAt:false, updatedAt:false})
export class StuffRoles extends Model<StuffRoles>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number

    @ForeignKey(()=>Stuff)
    @Column({
        type:DataType.INTEGER,
    })
    stuff_id:number


    @ForeignKey(()=>Role)
    @Column({
        type:DataType.INTEGER,
    })
    role_id:number

}