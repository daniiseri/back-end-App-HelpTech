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
exports.ResultSetHeader = void 0;
const type_graphql_1 = require("type-graphql");
let ResultSetHeader = class ResultSetHeader {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ResultSetHeader.prototype, "fieldCount", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ResultSetHeader.prototype, "affectedRows", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ResultSetHeader.prototype, "insertId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ResultSetHeader.prototype, "info", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ResultSetHeader.prototype, "serverStatus", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ResultSetHeader.prototype, "warningStatus", void 0);
ResultSetHeader = __decorate([
    (0, type_graphql_1.ObjectType)()
], ResultSetHeader);
exports.ResultSetHeader = ResultSetHeader;
