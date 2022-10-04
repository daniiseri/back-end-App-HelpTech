"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternativeServices = void 0;
const AlternativeRepositories_1 = require("../database/repositories/AlternativeRepositories");
class AlternativeServices {
    constructor() {
        this.alternativeRepositories = new AlternativeRepositories_1.AlternativeRepositories();
    }
    async getAll() {
        return this.alternativeRepositories.findAll();
    }
    async getByQuest(code) {
        return this.alternativeRepositories.findByQuest(code);
    }
    async create(data) {
        return this.alternativeRepositories.create(data);
    }
    async update(data) {
        return this.alternativeRepositories.update(data);
    }
    async delete(code) {
        const result = await this.alternativeRepositories.delete(code);
        return result;
    }
}
exports.AlternativeServices = AlternativeServices;
