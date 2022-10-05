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
exports.SessionResolver = void 0;
const type_graphql_1 = require("type-graphql");
const SessionServices_1 = require("../services/SessionServices");
const Login_1 = require("../models/Login");
const generateToken_1 = require("../utils/generateToken");
const bcrypt_1 = require("../utils/bcrypt");
const UserRoleServices_1 = require("../services/UserRoleServices");
const RoleServices_1 = require("../services/RoleServices");
let SessionResolver = class SessionResolver {
    constructor() {
        this.sessionServices = new SessionServices_1.SessionServices();
        this.userRoleServices = new UserRoleServices_1.UserRoleServices();
        this.roleServices = new RoleServices_1.RoleServices();
    }
    async login(email, password) {
        const [userFound] = await this.sessionServices.login(email);
        if (!userFound)
            return new Error('user not found');
        if (!await (0, bcrypt_1.checkPassword)(password, userFound.password))
            return new Error('incorrect password');
        const userRoles = await this.userRoleServices.getByUser(userFound.id);
        const promiseRoles = await userRoles.map(async ({ roleid }) => {
            const [{ description }] = await this.roleServices.getById(roleid);
            return description;
        });
        const roles = await Promise.all(promiseRoles);
        const token = (0, generateToken_1.generateToken)({ id: userFound.id });
        return { user: userFound, roles, token };
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Login_1.Credentials),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SessionResolver.prototype, "login", null);
SessionResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], SessionResolver);
exports.SessionResolver = SessionResolver;
