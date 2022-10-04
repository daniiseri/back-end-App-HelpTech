"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestServices = void 0;
const QuestRepositories_1 = require("../database/repositories/QuestRepositories");
class QuestServices {
    constructor() {
        this.questRepositories = new QuestRepositories_1.QuestRepositories();
    }
    async getAll() {
        return this.questRepositories.findAll();
    }
    async getByCategory(code) {
        return this.questRepositories.findByCategory(code);
    }
    async create(data) {
        return this.questRepositories.create(data);
    }
    async update(data) {
        return this.questRepositories.update(data);
    }
    async delete(code) {
        return this.questRepositories.delete(code);
    }
}
exports.QuestServices = QuestServices;
