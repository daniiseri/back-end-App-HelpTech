"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionServices = void 0;
const UserRepositories_1 = require("../database/repositories/UserRepositories");
class SessionServices {
    constructor() {
        this.userRepositories = new UserRepositories_1.UserRepositories();
    }
    async login(email) {
        return this.userRepositories.findUser(email);
    }
}
exports.SessionServices = SessionServices;
