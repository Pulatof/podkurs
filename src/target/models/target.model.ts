import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";

interface TargetAttrs{
    name:string
}

@Table({tableName:'target'})
export class Target extends Model<Target, TargetAttrs>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name:string
    


}
