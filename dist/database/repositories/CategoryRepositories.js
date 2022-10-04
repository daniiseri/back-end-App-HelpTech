"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepositories = void 0;
const index_1 = require("../index");
class CategoryRepositories {
    async findAll() {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM category';
        const [categories] = await conn.execute(query);
        return categories;
    }
    async findById(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM category WHERE id = ?';
        const [category] = await conn.execute(query, [code]);
        return category;
    }
    async create(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'INSERT INTO category (description) VALUES (?)';
        const [result] = await conn.execute(query, [data.description]);
        return result;
    }
    async update(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'UPDATE category SET description=? WHERE id=?';
        const [result] = await conn.execute(query, [data.description, data.id]);
        return result;
    }
    async delete(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'DELETE FROM category WHERE id=?';
        const [result] = await conn.execute(query, [code]);
        return result;
    }
}
exports.CategoryRepositories = CategoryRepositories;
