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
exports.CategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Category_1 = require("../models/Category");
const CategoryServices_1 = require("../services/CategoryServices");
const NewCategoryInput_1 = require("../input/NewCategoryInput");
let CategoryResolver = class CategoryResolver {
    constructor() {
        this.categoryServices = new CategoryServices_1.CategoryServices();
    }
    async categories() {
        const categories = await this.categoryServices.getAll();
        return categories;
    }
    async createCategory(newCategoryInput) {
        const result = await this.categoryServices.create(newCategoryInput);
        return result;
    }
    async updateCategory(id, description) {
        const category = await this.categoryServices.update({ id, description });
        return category;
    }
    async deleteCategory(id) {
        const result = await this.categoryServices.delete(id);
        return result ? true : false;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Category_1.Category]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "categories", null);
__decorate([
    (0, type_graphql_1.Authorized)('Admin'),
    (0, type_graphql_1.Mutation)(() => Number),
    __param(0, (0, type_graphql_1.Arg)("newCategoryInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NewCategoryInput_1.NewCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, type_graphql_1.Authorized)('Admin'),
    (0, type_graphql_1.Mutation)(() => Number),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("description")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, type_graphql_1.Authorized)('Admin'),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
CategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
