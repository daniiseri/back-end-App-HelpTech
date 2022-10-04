"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMySql = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const bluebird_1 = __importDefault(require("bluebird"));
const connectToMySql = async () => {
    const connection = await promise_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'help_tech',
        password: process.env.DB_PASSWORD,
        Promise: bluebird_1.default
    });
    console.log('Database running');
    return connection;
};
exports.connectToMySql = connectToMySql;
connectToMySql();
