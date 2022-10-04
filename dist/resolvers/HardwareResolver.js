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
exports.HardwareResolver = void 0;
const type_graphql_1 = require("type-graphql");
const NewHardwareInput_1 = require("../input/NewHardwareInput");
const NewTypeInput_1 = require("../input/NewTypeInput");
const Hardware_1 = require("../models/Hardware");
const ResultSetHeader_1 = require("../models/ResultSetHeader");
const HadwareServices_1 = require("../services/HadwareServices");
let HardwareResolver = class HardwareResolver {
    constructor() {
        this.hardwareServices = new HadwareServices_1.HardwareServices();
    }
    async types() {
        const types = await this.hardwareServices.getTypes();
        return types;
    }
    async type(code) {
        const type = await this.hardwareServices.getTypeById(code);
        return type;
    }
    async createType(newTypeInput) {
        const result = await this.hardwareServices.createType(newTypeInput);
        return result;
    }
    async updateType(id, description) {
        const result = await this.hardwareServices.updateType({ id, description });
        return result;
    }
    async deleteType(id) {
        const result = await this.hardwareServices.deleteType(id);
        return result ? true : false;
    }
    async hardwares() {
        const hardwares = await this.hardwareServices.getHardwares();
        return hardwares;
    }
    async createHardware(newHadwareInput) {
        const result = await this.hardwareServices.createHardware(newHadwareInput);
        return result;
    }
    async updateHardware(id, model, capacity, price, idType) {
        const result = await this.hardwareServices.updateHardware({ id, model, capacity, price, idType });
        return result;
    }
    async deleteHardware(id) {
        const result = await this.hardwareServices.deleteHardware(id);
        return result ? true : false;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Hardware_1.Type]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HardwareResolver.prototype, "types", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Hardware_1.Type]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HardwareResolver.prototype, "type", null);
__decorate([
    (0, type_graphql_1.Authorized)('admin'),
    (0, type_graphql_1.Mutation)(() => ResultSetHeader_1.ResultSetHeader),
    __param(0, (0, type_graphql_1.Arg)("newTypeInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NewTypeInput_1.NewTypeInput]),
    __metadata("design:returntype", Promise)
], HardwareResolver.prototype, "createType", null);
__decorate([
    (0, type_graphql_1.Authorized)('admin'),
    (0, type_graphql_1.Mutation)(() => ResultSetHeader_1.ResultSetHeader),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("description")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], HardwareResolver.prototype, "updateType", null);
__decorate([
    (0, type_graphql_1.Authorized)('admin'),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HardwareResolver.prototype, "deleteType", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Hardware_1.Hardware]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HardwareResolver.prototype, "hardwares", null);
__decorate([
    (0, type_graphql_1.Authorized)('admin'),
    (0, type_graphql_1.Mutation)(() => ResultSetHeader_1.ResultSetHeader),
    __param(0, (0, type_graphql_1.Arg)("newHardwareInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NewHardwareInput_1.NewHardwareInput]),
    __metadata("design:returntype", Promise)
], HardwareResolver.prototype, "createHardware", null);
__decorate([
    (0, type_graphql_1.Authorized)('admin'),
    (0, type_graphql_1.Mutation)(() => ResultSetHeader_1.ResultSetHeader),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("model")),
    __param(2, (0, type_graphql_1.Arg)("capacity")),
    __param(3, (0, type_graphql_1.Arg)("price")),
    __param(4, (0, type_graphql_1.Arg)("idType")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], HardwareResolver.prototype, "updateHardware", null);
__decorate([
    (0, type_graphql_1.Authorized)('admin'),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HardwareResolver.prototype, "deleteHardware", null);
HardwareResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [])
], HardwareResolver);
exports.HardwareResolver = HardwareResolver;
