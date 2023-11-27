import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { entityManager } from "../config/db.config"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    gender: string

    @Column()
    status: boolean

    @Column({
        type:'datetime',
        default:()=>'NOW()'
    })
    created_at:string
    updated_at:string
}

const getList = ()=>{
    return new Promise(async (resolve,reject)=>{
        try{
            let data = await entityManager.find(Users);
            resolve(data)
        }catch(err){
            reject(err)
        }
    })
}

export default {
    getList
}