import { Column, DataType, Model, Table } from "sequelize-typescript";

interface LidStatusAttrs{
    status:string
}

@Table({tableName:'status'})
export class LidStatus extends Model<LidStatus, LidStatusAttrs>{
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
    status:string
}
