"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositories = void 0;
const index_1 = __importDefault(require("../index"));
const bcrypt_1 = require("../../utils/bcrypt");
class UserRepositories {
    async findAll() {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM "user"';
        const { rows } = await conn.query(query);
        return rows;
    }
    async findUser(email) {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM "user" WHERE email=$1';
        const { rows } = await conn.query(query, [email]);
        return rows;
    }
    async findById(code) {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM user WHERE id = ?';
        const user = await conn.query(query, [code]);
        return user;
    }
    async create({ name, email, password }) {
        const conn = await (0, index_1.default)();
        const hash = await (0, bcrypt_1.encryptPassword)(password);
        const query = 'INSERT INTO "user" (name, email, password) VALUES ($1, $2, $3)';
        const { rowCount } = await conn.query(query, [name, email, hash]);
        return rowCount;
    }
    async update({ id, name, email, password }) {
        const conn = await (0, index_1.default)();
        const query = 'UPDATE "user" SET name=$1, email=$2, password=$3 WHERE id=$4';
        const hash = await (0, bcrypt_1.encryptPassword)(password);
        const { rowCount } = await conn.query(query, [name, email, hash, id]);
        return rowCount;
    }
    async delete(code) {
        const conn = await (0, index_1.default)();
        const query = 'DELETE FROM "user" WHERE id=$1';
        const result = await conn.query(query, [code]);
        return result;
    }
}
exports.UserRepositories = UserRepositories;
