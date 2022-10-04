"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardwareRepositories = void 0;
const index_1 = require("../index");
class HardwareRepositories {
    async findHardwares() {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM hardware';
        const [hardwares] = await conn.execute(query);
        return hardwares;
    }
    async findHardwareById(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM hardware WHERE id=?';
        const [hardwares] = await conn.execute(query, [code]);
        return hardwares;
    }
    async createHardware(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'INSERT INTO hardware (model, capacity, price, idType) VALUES (?,?,?,?)';
        const [result] = await conn.execute(query, [data.model, data.capacity, data.price, data.idType]);
        return result;
    }
    async updateHardware({ idType, ...rest }) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'UPDATE hardware SET model=?, capacity=?, price=?, idType=? WHERE id=?';
        const [result] = await conn.execute(query, [rest.model, rest.capacity, rest.price, idType, rest.id]);
        return result;
    }
    async deleteHardware(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'DELETE FROM hardware WHERE id=?';
        const [result] = await conn.execute(query, [code]);
        return result;
    }
    async findTypes() {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM type';
        const [type] = await conn.execute(query);
        return type;
    }
    async findTypeById(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM type WHERE id=?';
        const [type] = await conn.execute(query, [code]);
        return type;
    }
    async createType(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'INSERT INTO type (description) VALUES (?)';
        const [result] = await conn.execute(query, [data.description]);
        return result;
    }
    async updateType(data) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'UPDATE type SET description=? WHERE id=?';
        const [result] = await conn.execute(query, [data.description, data.id]);
        return result;
    }
    async deleteType(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'DELETE FROM type WHERE id=?';
        const [result] = await conn.execute(query, [code]);
        return result;
    }
}
exports.HardwareRepositories = HardwareRepositories;
