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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeCategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const MergeCategory_1 = require("../models/MergeCategory");
const MergeCategoryServices_1 = require("../services/MergeCategoryServices");
let MergeCategoryResolver = class MergeCategoryResolver {
    constructor() {
        this.mergeServices = new MergeCategoryServices_1.MergeCategoryServices();
    }
    async mergeCategories() {
        const mergeCategories = await this.mergeServices.getAll();
        return mergeCategories[0];
    }
    async createMergeCategory() {
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [MergeCategory_1.MergeCategory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MergeCategoryResolver.prototype, "mergeCategories", null);
__decorate([
    (0, type_graphql_1.Authorized)('admin'),
    (0, type_graphql_1.Mutation)(() => MergeCategory_1.MergeCategory),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MergeCategoryResolver.prototype, "createMergeCategory", null);
MergeCategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], MergeCategoryResolver);
exports.MergeCategoryResolver = MergeCategoryResolver;
