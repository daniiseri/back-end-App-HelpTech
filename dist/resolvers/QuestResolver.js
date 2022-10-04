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
exports.QuestResolver = void 0;
const type_graphql_1 = require("type-graphql");
const NewQuestInput_1 = require("../input/NewQuestInput");
const Quest_1 = require("../models/Quest");
const ResultSetHeader_1 = require("../models/ResultSetHeader");
const QuestServices_1 = require("../services/QuestServices");
let QuestResolver = class QuestResolver {
    constructor() {
        this.questService = new QuestServices_1.QuestServices();
    }
    async quests() {
        const quests = await this.questService.getAll();
        return quests;
    }
    async questsByCategory(categoryId) {
        const quests = await this.questService.getByCategory(categoryId);
        return quests;
    }
    async createQuest(newQuestData, idCategory) {
        const result = await this.questService.create({ newQuestData, idCategory });
        return result;
    }
    async updateQuest(id, description, idCategory) {
        const result = await this.questService.update({ id, description, idCategory });
        return result;
    }
    async deleteQuest(id) {
        const result = await this.questService.delete(id);
        return result ? true : false;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Quest_1.Quest]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestResolver.prototype, "quests", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Quest_1.Quest]),
    __param(0, (0, type_graphql_1.Arg)("categoryId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestResolver.prototype, "questsByCategory", null);
__decorate([
    (0, type_graphql_1.Authorized)('Admin'),
    (0, type_graphql_1.Mutation)(() => ResultSetHeader_1.ResultSetHeader),
    __param(0, (0, type_graphql_1.Arg)("newQuestData")),
    __param(1, (0, type_graphql_1.Arg)("idCategory")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NewQuestInput_1.NewQuestInput, Number]),
    __metadata("design:returntype", Promise)
], QuestResolver.prototype, "createQuest", null);
__decorate([
    (0, type_graphql_1.Authorized)('Admin'),
    (0, type_graphql_1.Mutation)(() => ResultSetHeader_1.ResultSetHeader),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("description")),
    __param(2, (0, type_graphql_1.Arg)("idCategory")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", Promise)
], QuestResolver.prototype, "updateQuest", null);
__decorate([
    (0, type_graphql_1.Authorized)('Admin'),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestResolver.prototype, "deleteQuest", null);
QuestResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], QuestResolver);
exports.QuestResolver = QuestResolver;
