"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestRepositories = void 0;
const index_1 = require("../index");
class QuestRepositories {
    async findAll() {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM quest';
        const [quests] = await conn.execute(query);
        return quests;
    }
    async findById(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM quest WHERE id = ?';
        const [quest] = await conn.execute(query, [code]);
        return quest;
    }
    async findByCategory(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM quest WHERE idCategory = ?';
        const [quest] = await conn.execute(query, [code]);
        return quest;
    }
    async create(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'INSERT INTO quest (description, idCategory) VALUES (?, ?)';
        const result = await conn.execute(query, [data.newQuestData.description, data.idCategory]);
        return result;
    }
    async update(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'UPDATE quest SET description=?, idCategory=? WHERE id=?';
        const [result] = await conn.execute(query, [data.description, data.idCategory, data.id]);
        return result;
    }
    async delete(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'DELETE FROM quest WHERE id=?';
        const [result] = await conn.execute(query, [code]);
        return result;
    }
}
exports.QuestRepositories = QuestRepositories;
