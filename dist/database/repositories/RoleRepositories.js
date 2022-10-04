"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepositories = void 0;
const index_1 = require("../index");
class RoleRepositories {
    async findById(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM role WHERE id=?';
        const [role] = await conn.execute(query, [code]);
        return role;
    }
}
exports.RoleRepositories = RoleRepositories;
