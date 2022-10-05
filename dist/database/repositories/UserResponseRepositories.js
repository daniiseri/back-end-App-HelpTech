"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseRepositories = void 0;
const index_1 = __importDefault(require("../index"));
class UserResponseRepositories {
    async findAll() {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM user_response';
        const { rows } = await conn.query(query);
        return rows;
    }
    async findById(code) {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM user_response WHERE id = $1';
        const { rows } = await conn.query(query, [code]);
        return rows;
    }
    async findByUser(code) {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM user_response WHERE idUser = $1';
        const { rows } = await conn.query(query, [code]);
        return rows;
    }
    async create(data) {
        const conn = await (0, index_1.default)();
        const query = 'INSERT INTO user_response (idAlternative, idUser) VALUES ($1, $2)';
        const { rowCount } = await conn.query(query, [data.idAlternative, data.idUser]);
        return rowCount;
    }
    async update(data) {
        const conn = await (0, index_1.default)();
        const query = 'UPDATE user_response SET idAlternative=$1 WHERE id=$2';
        const { rowCount } = await conn.query(query, [data.idAlternative, data.id]);
        return rowCount;
    }
    async delete(code) {
        const conn = await (0, index_1.default)();
        const query = 'DELETE FROM user_response WHERE id=$1';
        const { rowCount } = await conn.query(query, [code]);
        return rowCount;
    }
}
exports.UserResponseRepositories = UserResponseRepositories;
