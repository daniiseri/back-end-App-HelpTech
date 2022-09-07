import { HardwareRepositories } from "../database/repositories/HadwareRepositories";
import { NewHardwareInput } from "../input/NewHardwareInput";
import { NewTypeInput } from "../input/NewTypeInput";
import { Hardware, Type } from "../models/Hardware";

export class HardwareServices{
  hardwareRepositories: HardwareRepositories;

  constructor(){
    this.hardwareRepositories = new HardwareRepositories();
  }

  async getTypes(){
    return this.hardwareRepositories.findTypes();
  }
  async getTypeById(code: number){
    return this.hardwareRepositories.findTypeById(code);
  }

  async getHardwares(){
    return this.hardwareRepositories.findHardwares();
  }

  async createType(data:NewTypeInput){
    return this.hardwareRepositories.createType(data);
  }
  async updateType(data:Type){
    return this.hardwareRepositories.updateType(data);
  }

  async createHardware(data: NewHardwareInput){
    return this.hardwareRepositories.createHardware(data);
  }
  async updateHardware(data: Hardware){
    return this.hardwareRepositories.updateHardware(data);
  }
}