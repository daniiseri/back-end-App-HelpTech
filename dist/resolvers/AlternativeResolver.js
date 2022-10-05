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
exports.AlternativeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const NewAlternativeInput_1 = require("../input/NewAlternativeInput");
const Alternative_1 = require("../models/Alternative");
const AlternativeServices_1 = require("../services/AlternativeServices");
let AlternativeResolver = class AlternativeResolver {
    constructor() {
        this.alternativeServices = new AlternativeServices_1.AlternativeServices();
    }
    async alternatives() {
        const alternatives = await this.alternativeServices.getAll();
        return alternatives[0];
    }
    async alternativesByQuest(questId) {
        const alternatives = await this.alternativeServices.getByQuest(questId);
        return alternatives;
    }
    async createAlternative(newAlternativeData, idCategory, idQuest) {
        const result = await this.alternativeServices.create({ newAlternativeData, idCategory, idQuest });
        return result;
    }
    async updateAlternative(id, description, level, idCategory, idQuest) {
        const result = await this.alternativeServices.update({ id, description, level, idCategory, idQuest });
        return result;
    }
    async deleteAlternative(id) {
        const result = await this.alternativeServices.delete(id);
        return result ? true : false;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Alternative_1.Alternative]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlternativeResolver.prototype, "alternatives", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Alternative_1.Alternative]),
    __param(0, (0, type_graphql_1.Arg)("questId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlternativeResolver.prototype, "alternativesByQuest", null);
__decorate([
    (0, type_graphql_1.Authorized)('Admin'),
    (0, type_graphql_1.Mutation)(() => Number),
    __param(0, (0, type_graphql_1.Arg)("newAlternativeData")),
    __param(1, (0, type_graphql_1.Arg)("idCategory")),
    __param(2, (0, type_graphql_1.Arg)("idQuest")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NewAlternativeInput_1.NewAlternativeInput, Number, Number]),
    __metadata("design:returntype", Promise)
], AlternativeResolver.prototype, "createAlternative", null);
__decorate([
    (0, type_graphql_1.Authorized)('Admin'),
    (0, type_graphql_1.Mutation)(() => Number),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("description")),
    __param(2, (0, type_graphql_1.Arg)("level")),
    __param(3, (0, type_graphql_1.Arg)("idCategory")),
    __param(4, (0, type_graphql_1.Arg)("idQuests")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], AlternativeResolver.prototype, "updateAlternative", null);
__decorate([
    (0, type_graphql_1.Authorized)('Admin'),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlternativeResolver.prototype, "deleteAlternative", null);
AlternativeResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], AlternativeResolver);
exports.AlternativeResolver = AlternativeResolver;
