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
exports.UserResponseResolver = void 0;
const type_graphql_1 = require("type-graphql");
const NewUserResponseInput_1 = require("../input/NewUserResponseInput");
const UserResponse_1 = require("../models/UserResponse");
const UserResonseServices_1 = require("../services/UserResonseServices");
let UserResponseResolver = class UserResponseResolver {
    constructor() {
        this.userResponseServices = new UserResonseServices_1.UserResponseServices();
    }
    async userReponses() {
        const userResponses = await this.userResponseServices.getAll();
        return userResponses;
    }
    async userResponseByUser(code) {
        const userReponses = await this.userResponseServices.getByUser(code);
        return userReponses;
    }
    async createUserResponse(newUserResponseInput) {
        const userResponse = await this.userResponseServices.create(newUserResponseInput);
        return userResponse;
    }
    async udateUserResponse(id, idAlternative) {
        const userResponse = await this.userResponseServices.update({ id, idAlternative });
        return userResponse;
    }
    async deleteUserResponse(code) {
        const result = await this.userResponseServices.delete(code);
        return result ? true : false;
    }
};
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)(() => [UserResponse_1.UserResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResponseResolver.prototype, "userReponses", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)(() => [UserResponse_1.UserResponse]),
    __param(0, (0, type_graphql_1.Arg)("idUser")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResponseResolver.prototype, "userResponseByUser", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)(() => Number),
    __param(0, (0, type_graphql_1.Arg)("newUserResponseInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NewUserResponseInput_1.NewUserResponseInput]),
    __metadata("design:returntype", Promise)
], UserResponseResolver.prototype, "createUserResponse", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)(() => Number),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("idAlternative")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserResponseResolver.prototype, "udateUserResponse", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResponseResolver.prototype, "deleteUserResponse", null);
UserResponseResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], UserResponseResolver);
exports.UserResponseResolver = UserResponseResolver;
