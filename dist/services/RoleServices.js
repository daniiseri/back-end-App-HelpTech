"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleServices = void 0;
const RoleRepositories_1 = require("../database/repositories/RoleRepositories");
class RoleServices {
    constructor() {
        this.roleRepositories = new RoleRepositories_1.RoleRepositories();
    }
    async getById(code) {
        return this.roleRepositories.findById(code);
    }
}
exports.RoleServices = RoleServices;
