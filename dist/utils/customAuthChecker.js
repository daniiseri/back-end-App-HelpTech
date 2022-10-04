"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customAuthChecker = void 0;
const customAuthChecker = async ({ context }, roles) => {
    var _a;
    if (!context.token) {
        return false;
    }
    if ((_a = context.roles) === null || _a === void 0 ? void 0 : _a.some(role => roles.includes(role))) {
        return true;
    }
    return false;
};
exports.customAuthChecker = customAuthChecker;
