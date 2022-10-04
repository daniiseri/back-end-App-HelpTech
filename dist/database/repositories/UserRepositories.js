"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositories = void 0;
const index_1 = require("../index");
const bcrypt_1 = require("../../utils/bcrypt");
class UserRepositories {
    async findAll() {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM user';
        const [users] = await conn.execute(query);
        return users;
    }
    async findUser(email) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM user WHERE email=?';
        const [user] = await conn.execute(query, [email]);
        return user;
    }
    async findById(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM user WHERE id = ?';
        const [user] = await conn.execute(query, [code]);
        return user;
    }
    async create(data) {
        const conn = await (0, index_1.connectToMySql)();
        const hash = await (0, bcrypt_1.encryptPassword)(data.password);
        const query = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
        const [result] = await conn.execute(query, [data.name, data.email, data.password]);
        return result;
    }
    async update(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'UPDATE user SET name=?, email=?, password=? WHERE id=?';
        const hash = await (0, bcrypt_1.encryptPassword)(data.password);
        const [result] = await conn.execute(query, [data.name, data.email, hash, data.id]);
        return result;
    }
    async delete(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'DELETE FROM user WHERE id=?';
        const [result] = await conn.execute(query, [code]);
        return result;
    }
}
exports.UserRepositories = UserRepositories;
