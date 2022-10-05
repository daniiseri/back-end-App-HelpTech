"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectToPostgres = async () => {
    const client = new pg_1.Client({
        connectionString: process.env.DATABASE_URL
    });
    await client.connect();
    console.log('Database running!');
    return client;
};
connectToPostgres();
exports.default = connectToPostgres;
