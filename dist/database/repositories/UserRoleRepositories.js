"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleRepositories = void 0;
const index_1 = __importDefault(require("../index"));
class UserRoleRepositories {
    async findByUser(code) {
        const conn = await (0, index_1.default)();
        const query = 'SELECT * FROM user_role WHERE userId=$1';
        const { rows } = await conn.query(query, [code]);
        return rows;
    }
}
exports.UserRoleRepositories = UserRoleRepositories;
