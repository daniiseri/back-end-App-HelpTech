"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseRepositories = void 0;
const index_1 = require("../index");
class UserResponseRepositories {
    async findAll() {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM user_response';
        const [userReponses] = await conn.execute(query);
        return userReponses;
    }
    async findById(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM user_response WHERE id = ?';
        const [userReponse] = await conn.execute(query, [code]);
        return userReponse;
    }
    async findByUser(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM user_response WHERE idUser = ?';
        const [userReponse] = await conn.execute(query, [code]);
        return userReponse;
    }
    async create(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'INSERT INTO user_response (idAlternative, idUser) VALUES (?, ?)';
        const [result] = await conn.execute(query, [data.idAlternative, data.idUser]);
        return result;
    }
    async update(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'UPDATE user_response SET idAlternative=? WHERE id=?';
        const [result] = await conn.execute(query, [data.idAlternative, data.id]);
        return result;
    }
    async delete(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'DELETE FROM user_response WHERE id=?';
        const [result] = await conn.execute(query, [code]);
        return result;
    }
}
exports.UserResponseRepositories = UserResponseRepositories;
