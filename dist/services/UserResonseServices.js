"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseServices = void 0;
const UserResponseRepositories_1 = require("../database/repositories/UserResponseRepositories");
class UserResponseServices {
    constructor() {
        this.userResponseRepositories = new UserResponseRepositories_1.UserResponseRepositories();
    }
    async getAll() {
        return this.userResponseRepositories.findAll();
    }
    async getByUser(code) {
        return this.userResponseRepositories.findByUser(code);
    }
    async create(newUserResponseInput) {
        return this.userResponseRepositories.create(newUserResponseInput);
    }
    async update(data) {
        return this.userResponseRepositories.update(data);
    }
    async delete(code) {
        return this.userResponseRepositories.delete(code);
    }
}
exports.UserResponseServices = UserResponseServices;
