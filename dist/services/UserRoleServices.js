"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleServices = void 0;
const UserRoleRepositories_1 = require("../database/repositories/UserRoleRepositories");
class UserRoleServices {
    constructor() {
        this.userRoleRepositories = new UserRoleRepositories_1.UserRoleRepositories();
    }
    async getByUser(code) {
        return this.userRoleRepositories.findByUser(code);
    }
}
exports.UserRoleServices = UserRoleServices;
