import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ReasonlidAttrs{
    reason_lid:string
}

@Table({tableName:'status'})
export class ReasonLid extends Model<ReasonLid, ReasonlidAttrs>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number

    @Column({
        type:DataType.STRING,
        // allowNull:false
    })
    reason_lid:string
}
