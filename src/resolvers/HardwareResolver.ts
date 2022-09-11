import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { NewHardwareInput } from '../input/NewHardwareInput';
import { NewTypeInput } from "../input/NewTypeInput";
import { Hardware, Type } from "../models/Hardware";
import { ResultSetHeader } from "../models/ResultSetHeader";
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
    return types;
  }

  @Query(() => [Type])
  async type(code: number){
    const type = await this.hardwareServices.getTypeById(code);
    return type;
  }

  @Authorized('admin')
  @Mutation(() => ResultSetHeader)
  async createType(
    @Arg("newTypeInput") newTypeInput: NewTypeInput
  ){
    const result = await this.hardwareServices.createType(newTypeInput);
    return result;
  }

  @Authorized('admin')
  @Mutation(() => ResultSetHeader)
  async updateType(
    @Arg("id") id: number,
    @Arg("description") description: string
  ){
    const result = await this.hardwareServices.updateType({id, description});
    return result;
  }

  @Authorized('admin')
  @Mutation(() => Boolean)
  async deleteType(
    @Arg("id") id: number
  ){
    const result = await this.hardwareServices.deleteType(id);    
    return result ? true : false;
  }

  @Query(() => [Hardware])
  async hardwares(){
    const hardwares = await this.hardwareServices.getHardwares();
    return hardwares;
  } 

  @Authorized('admin')
  @Mutation(() => ResultSetHeader)
  async createHardware(
    @Arg("newHardwareInput") newHadwareInput: NewHardwareInput
  ){
    const result = await this.hardwareServices.createHardware(newHadwareInput);
    return result;
  }

  @Authorized('admin')
  @Mutation(() => ResultSetHeader)
  async updateHardware(
    @Arg("id") id: number,
    @Arg("model") model: string,
    @Arg("capacity") capacity: number,
    @Arg("price") price: number,
    @Arg("idType") idType: number
  ){
    const result = await this.hardwareServices.updateHardware({id, model, capacity, price, idType});
    return result;
  }

  @Authorized('admin')
  @Mutation(() => Boolean)
  async deleteHardware(
    @Arg("id") id: number
  ){
    const result = await this.hardwareServices.deleteHardware(id);
    return result ? true : false;
  }
}