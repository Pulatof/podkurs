import { Column, DataType, Model, Table } from "sequelize-typescript";

interface StageAttrs{
    name:string
}


@Table({tableName:'stage'})
export class Stage extends Model<Stage, StageAttrs>{
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
