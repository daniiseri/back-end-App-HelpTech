"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectToPostgres = async () => {
    const client = new pg_1.Client({
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        user: process.env.PGUSER,
        port: Number(process.env.PGPORT),
        password: process.env.PGPASSWORD,
    });
    await client.connect();
    console.log('Database running!');
    return client;
};
connectToPostgres();
exports.default = connectToPostgres;
