"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeCategoryRepositories = void 0;
const index_1 = require("../index");
class MergeCategoryRepositories {
    async findAll() {
        const conn = await (0, index_1.connectToMySql)();
        const query = 'SELECT * FROM mergeCategory';
        const mergeCategories = await conn.execute(query);
        return mergeCategories;
    }
}
exports.MergeCategoryRepositories = MergeCategoryRepositories;
