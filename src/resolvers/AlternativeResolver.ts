import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { NewAlternativeInput } from "../input/NewAlternativeInput.js";
import { Alternative } from "../models/Alternative.js";
import { AlternativeServices } from "../services/AlternativeServices.js";

@Resolver()
export class AlternativeResolver{
  alternativeServices: AlternativeServices;

  constructor(){
    this.alternativeServices = new AlternativeServices();
  }

  @Query(() => [Alternative])
  async alternatives(){
    const alternatives = await this.alternativeServices.getAll();
    return alternatives;
  }

  @Query(() => [Alternative])
  async alternativesByQuest(
    @Arg("questId") questId: number
  ){
    const alternatives = await this.alternativeServices.getByQuest(questId);
    return alternatives;
  }

  @Authorized('Admin')
  @Mutation(() => Number)
  async createAlternative(
    @Arg("newAlternativeData") newAlternativeData: NewAlternativeInput,
    @Arg("idCategory") idCategory: number,
    @Arg("idQuest") idQuest: number
  ){
    const result = await this.alternativeServices.create({newAlternativeData, idCategory, idQuest});
    return result;
  }

  
  @Authorized('Admin')
  @Mutation(() => Number)
  async updateAlternative(
    @Arg("id") id: number,
    @Arg("description") description: string,
    @Arg("level") level: number,
    @Arg("idCategory") idcategory: number,
    @Arg("idQuests") idquest: number
  ){
    const result = await this.alternativeServices.update({id, description, level, idcategory, idquest});
    return result;
  }

   
  @Authorized('Admin')
  @Mutation(() => Boolean)
  async deleteAlternative(
    @Arg("id") id: number
  ){
    const result = await this.alternativeServices.delete(id);
    return result ? true : false;
  }
}