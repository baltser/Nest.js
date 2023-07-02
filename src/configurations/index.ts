import * as process from "process";

export default () => ({
    port: process.env.PORT,
    db_port: process.env.DB_PORT,
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_passport: process.env.DB_PASSPORT,
    db_name: process.env.DB_NAME
})