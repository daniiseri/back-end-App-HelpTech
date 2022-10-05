"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepositories = void 0;
const index_1 = __importDefault(require("../index"));
class CategoryRepositories {
    async findAll() {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM category';
        const { rows } = await conn.query(query);
        return rows;
    }
    async findById(code) {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM category WHERE id = ?';
        const { rows } = await conn.query(query, [code]);
        return rows;
    }
    async create(data) {
        const conn = await (0, index_1.default)();
        const query = 'INSERT INTO category (description) VALUES (?)';
        const { rowCount } = await conn.query(query, [data.description]);
        return rowCount;
    }
    async update(data) {
        const conn = await (0, index_1.default)();
        const query = 'UPDATE category SET description=$1 WHERE id=$2';
        const { rowCount } = await conn.query(query, [data.description, data.id]);
        return rowCount;
    }
    async delete(code) {
        const conn = await (0, index_1.default)();
        const query = 'DELETE FROM category WHERE id=$1';
        const { rowCount } = await conn.query(query, [code]);
        return rowCount;
    }
}
exports.CategoryRepositories = CategoryRepositories;
