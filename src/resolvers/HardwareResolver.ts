import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { NewHardwareInput } from '../input/NewHardwareInput';
import { NewTypeInput } from "../input/NewTypeInput";
import { Hardware, Type } from "../models/Hardware";
import { HardwareServices } from "../services/HadwareServices";

@Resolver()
export class HardwareResolver{
  hardwareServices: HardwareServices;

  constructor(){
    this.hardwareServices = new HardwareServices();
  }

  @Query(() => [Type])
  async types(){
    const types = await this.hardwareServices.getTypes();
    return types[0];
  }

  @Query(() => [Type])
  async type(code: number){
    const type = await this.hardwareServices.getTypeById(code);
    return type[0];
  }

  @Query(() => [Hardware])
  async hardwares(){
    const hardwares = await this.hardwareServices.getHardwares();
    const results = hardwares[0].map(async (res:any) => {
    const {id, model, capacity, price} = res;
    const type = await this.type(res.idType);
    return {id, model, capacity, price, type};
    })
    return results;
  } 

  @Authorized('admin')
  @Mutation(() => Type)
  async createType(
    @Arg("newTypeInput") newTypeInput: NewTypeInput
  ){
    const type = await this.hardwareServices.createType(newTypeInput);
    return type[0];
  }

  @Authorized('admin')
  @Mutation(() => Hardware)
  async createHardware(
    @Arg("newHardwareInput") newHadwareInput: NewHardwareInput
  ){
    const hardware = await this.hardwareServices.createHardware(newHadwareInput);
    const type = await this.hardwareServices.getTypeById(hardware[0].idType);
    const {id, model, capacity, price} = hardware[0];
    return {id, model, capacity, price, type: type[0]};
  }
}