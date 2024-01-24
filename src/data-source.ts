import "reflect-metadata"
import { DataSource } from "typeorm"
import { Member } from "./entity/Member"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "rishovsaha@123",
    database: "mytestdb",
    synchronize: true,
    logging: true,
    entities: [Member],
    migrations: [],
    subscribers: [],
})
