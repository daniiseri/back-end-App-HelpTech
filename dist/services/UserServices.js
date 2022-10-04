"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const UserRepositories_1 = require("../database/repositories/UserRepositories");
class UserServices {
    constructor() {
        this.userRepositories = new UserRepositories_1.UserRepositories();
    }
    async getAll() {
        return this.userRepositories.findAll();
    }
    async getById(code) {
        return this.userRepositories.findById(code);
    }
    async create(data) {
        return this.userRepositories.create(data);
    }
    async update(data) {
        return this.userRepositories.update(data);
    }
    async delete(code) {
        return this.userRepositories.delete(code);
    }
}
exports.UserServices = UserServices;
