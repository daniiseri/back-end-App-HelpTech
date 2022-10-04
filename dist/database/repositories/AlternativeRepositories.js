"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternativeRepositories = void 0;
const index_1 = require("../index");
class AlternativeRepositories {
    async findAll() {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM alternative';
        const alternatives = await conn.execute(query);
        return alternatives;
    }
    async findById(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM alternative WHERE id = ?';
        const alternative = await conn.execute(query, [code]);
        return alternative;
    }
    async findByQuest(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM alternative WHERE idQuest = ?';
        const [alternative] = await conn.execute(query, [code]);
        return alternative;
    }
    async create(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'INSERT INTO alternative (description, level, idCategory, idQuest) VALUES (?, ?, ?, ?)';
        const [result] = await conn.execute(query, [data.newAlternativeData.description, data.newAlternativeData.level, data.idCategory, data.idQuest]);
        return result;
    }
    async update(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'UPDATE alternative SET description=?, level=?, idCategory=?, idQuest=? WHERE id=?';
        const [result] = await conn.execute(query, [data.description, data.level, data.idCategory, data.idQuest, data.id]);
        return result;
    }
    async delete(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'DELETE FROM alternative WHERE id=?';
        const [result] = await conn.execute(query, [code]);
        return result;
    }
}
exports.AlternativeRepositories = AlternativeRepositories;
