import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "aon",
    synchronize: false,
    logging: false,
    entities: ["./src/models/*.ts","./src/models/*.js"],

})

export const entityManager  = AppDataSource.manager;

const Connections = ()=>{
    AppDataSource.initialize()
    .then(() => {
        console.log("DB Connected")
    })
    .catch((e:any) => console.log('error',e))
}

export default Connections