import { HardwareRepositories } from "../database/repositories/HadwareRepositories";
import { NewHardwareInput } from "../input/NewHardwareInput";
import { NewTypeInput } from "../input/NewTypeInput";

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

  async createHardware(data: NewHardwareInput){
    return this.hardwareRepositories.createHardware(data);
  }
}