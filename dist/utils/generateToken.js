"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authConfig = require('../config/auth');
const generateToken = (params) => {
    return (jsonwebtoken_1.default.sign(params, authConfig.secret, {
        expiresIn: 86400
    }));
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, authConfig.secret);
};
exports.verifyToken = verifyToken;
