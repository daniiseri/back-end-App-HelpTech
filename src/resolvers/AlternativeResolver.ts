import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { NewAlternativeInput } from "../input/NewAlternativeInput";
import { Alternative } from "../models/Alternative";
import { AlternativeServices } from "../services/AlternativeServices";

@Resolver()
export class AlternativeResolver{
  alternativeServices: AlternativeServices;

  constructor(){
    this.alternativeServices = new AlternativeServices();
  }

  @Query(() => [Alternative])
  async alternatives(){
    const alternatives = await this.alternativeServices.getAll();
    return alternatives[0];
  }

  @Authorized('admin')
  @Mutation(() => [Alternative])
  async createAlternative(
    @Arg("newAlternativeData") newAlternativeData: NewAlternativeInput,
    @Arg("idCategory") idCategory: number,
    @Arg("idQuests") idQuest: number
  ){
    const newAlternative = await this.alternativeServices.create({newAlternativeData, idCategory, idQuest});
    return newAlternative;
  }

  
  @Authorized('admin')
  @Mutation(() => [Alternative])
  async updateAlternative(
    @Arg("id") id: number,
    @Arg("description") description: string,
    @Arg("level") level: number,
    @Arg("idCategory") idCategory: number,
    @Arg("idQuests") idQuest: number
  ){
    const alternative = await this.alternativeServices.update({id, description, level, idCategory, idQuest});
    return alternative;
  }

   
  @Authorized('admin')
  @Mutation(() => Boolean)
  async deleteAlternative(
    @Arg("id") id: number
  ){
    const [result] = await this.alternativeServices.delete(id);
    const {affectedRows} = result;
    return affectedRows > 0;
  }
}