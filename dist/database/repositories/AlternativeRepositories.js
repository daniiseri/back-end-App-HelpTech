"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternativeRepositories = void 0;
const index_1 = __importDefault(require("../index"));
class AlternativeRepositories {
    async findAll() {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM alternative';
        const { rows } = await conn.query(query);
        return rows;
    }
    async findById(code) {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM alternative WHERE id = $1';
        const { rows } = await conn.query(query, [code]);
        return rows;
    }
    async findByQuest(code) {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM alternative WHERE idQuest = 1$';
        const { rows } = await conn.query(query, [code]);
        return rows;
    }
    async create(data) {
        const conn = await (0, index_1.default)();
        const query = 'INSERT INTO alternative (description, level, idCategory, idQuest) VALUES ($1, $2, $3, $4)';
        const { rowCount } = await conn.query(query, [data.newAlternativeData.description, data.newAlternativeData.level, data.idCategory, data.idQuest]);
        return rowCount;
    }
    async update(data) {
        const conn = await (0, index_1.default)();
        const query = 'UPDATE alternative SET description=$1, level=$2, idCategory=$3, idQuest=$4 WHERE id=$5';
        const { rowCount } = await conn.query(query, [data.description, data.level, data.idCategory, data.idQuest, data.id]);
        return rowCount;
    }
    async delete(code) {
        const conn = await (0, index_1.default)();
        const query = 'DELETE FROM alternative WHERE id=$1';
        const { rowCount } = await conn.query(query, [code]);
        return rowCount;
    }
}
exports.AlternativeRepositories = AlternativeRepositories;
