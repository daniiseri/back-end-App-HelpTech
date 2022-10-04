"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.encryptPassword = void 0;
const bcryptjs_1 = require("bcryptjs");
async function encryptPassword(password) {
    return (0, bcryptjs_1.hash)(password, 10);
}
exports.encryptPassword = encryptPassword;
async function checkPassword(password, currentPassword) {
    return (0, bcryptjs_1.compare)(password, currentPassword);
}
exports.checkPassword = checkPassword;
