"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleRepositories = void 0;
const index_1 = require("../index");
class UserRoleRepositories {
    async findByUser(code) {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM user_role WHERE userId=?';
        const [userRole] = await conn.execute(query, [code]);
        return userRole;
    }
}
exports.UserRoleRepositories = UserRoleRepositories;
