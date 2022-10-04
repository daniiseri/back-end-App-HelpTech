"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeCategoryServices = void 0;
const MergeCategoryRepositories_1 = require("../database/repositories/MergeCategoryRepositories");
class MergeCategoryServices {
    constructor() {
        this.mergeCategoryRepositories = new MergeCategoryRepositories_1.MergeCategoryRepositories();
    }
    async getAll() {
        const mergeCategories = await this.mergeCategoryRepositories.findAll();
        return mergeCategories;
    }
}
exports.MergeCategoryServices = MergeCategoryServices;
