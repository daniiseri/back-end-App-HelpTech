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

  @Authorized('admin')
  @Mutation(() => Type)
  async createType(
    @Arg("newTypeInput") newTypeInput: NewTypeInput
  ){
    const type = await this.hardwareServices.createType(newTypeInput);
    return type[0];
  }

  @Authorized('admin')
  @Mutation(() => Type)
  async updateType(
    @Arg("id") id: number,
    @Arg("description") description: string
  ){
    const type = await this.hardwareServices.updateType({id, description});
    return type[0];
  }

  @Authorized('admin')
  @Mutation(() => Boolean)
  async deleteType(
    @Arg("id") id: number
  ){
    const [result] = await this.hardwareServices.deleteType(id);
    const {affectedRows} = result;
    return affectedRows > 0;
  }

  @Query(() => [Hardware])
  async hardwares(){
    const [hardwares] = await this.hardwareServices.getHardwares();
    return hardwares;
  } 

  @Authorized('admin')
  @Mutation(() => Hardware)
  async createHardware(
    @Arg("newHardwareInput") newHadwareInput: NewHardwareInput
  ){
    const hardware = await this.hardwareServices.createHardware(newHadwareInput);
    const type = await this.hardwareServices.getTypeById(hardware[0].idType);
    const {id, model, capacity, price, idType} = hardware[0];
    return {id, model, capacity, price, idType};
  }

  @Authorized('admin')
  @Mutation(() => Hardware)
  async updateHardware(
    @Arg("id") id: number,
    @Arg("model") model: string,
    @Arg("capacity") capacity: number,
    @Arg("price") price: number,
    @Arg("idType") idType: number
  ){
    await this.hardwareServices.updateHardware({id, model, capacity, price, idType});
    return {id, model, capacity, price, idType};
  }

  @Authorized('admin')
  @Mutation(() => Boolean)
  async deleteHardware(
    @Arg("id") id: number
  ){
    const [result] = await this.hardwareServices.deleteHardware(id);
    const {affectedRows} = result;
    return affectedRows > 0;
  }
}