"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardwareServices = void 0;
const HadwareRepositories_1 = require("../database/repositories/HadwareRepositories");
class HardwareServices {
    constructor() {
        this.hardwareRepositories = new HadwareRepositories_1.HardwareRepositories();
    }
    async getTypes() {
        return this.hardwareRepositories.findTypes();
    }
    async getTypeById(code) {
        return this.hardwareRepositories.findTypeById(code);
    }
    async createType(data) {
        return this.hardwareRepositories.createType(data);
    }
    async updateType(data) {
        return this.hardwareRepositories.updateType(data);
    }
    async deleteType(code) {
        return this.hardwareRepositories.deleteType(code);
    }
    async getHardwares() {
        return this.hardwareRepositories.findHardwares();
    }
    async createHardware(data) {
        return this.hardwareRepositories.createHardware(data);
    }
    async updateHardware(data) {
        return this.hardwareRepositories.updateHardware(data);
    }
    async deleteHardware(code) {
        return this.hardwareRepositories.deleteHardware(code);
    }
}
exports.HardwareServices = HardwareServices;
