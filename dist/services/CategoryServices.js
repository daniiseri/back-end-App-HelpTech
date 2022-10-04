"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryServices = void 0;
const CategoryRepositories_1 = require("../database/repositories/CategoryRepositories");
class CategoryServices {
    constructor() {
        this.categoryRepositories = new CategoryRepositories_1.CategoryRepositories();
    }
    async getAll() {
        return this.categoryRepositories.findAll();
    }
    async create(data) {
        return this.categoryRepositories.create(data);
    }
    async update(data) {
        return this.categoryRepositories.update(data);
    }
    async delete(code) {
        return this.categoryRepositories.delete(code);
    }
}
exports.CategoryServices = CategoryServices;
