"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const UserServices_1 = require("../services/UserServices");
const User_1 = require("../models/User");
const NewUserInput_1 = require("../input/NewUserInput");
let UserResolver = class UserResolver {
    constructor() {
        this.userServices = new UserServices_1.UserServices();
    }
    async users() {
        const users = await this.userServices.getAll();
        if (!users.length)
            return new Error('users not found');
        return users;
    }
    async createUser(newUserInput) {
        const user = await this.userServices.create(newUserInput);
        if (!user)
            return new Error('fail insert');
        return user;
    }
    async updateUser(id, name, email, password) {
        const user = await this.userServices.update({ id, name, email, password });
        if (!user)
            return new Error('fail update');
        return user;
    }
    async deleteUser(code) {
        const result = await this.userServices.delete(code);
        return result ? true : false;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Number),
    __param(0, (0, type_graphql_1.Arg)("newUserInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NewUserInput_1.NewUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Number),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("name")),
    __param(2, (0, type_graphql_1.Arg)("email")),
    __param(3, (0, type_graphql_1.Arg)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], UserResolver);
exports.UserResolver = UserResolver;
