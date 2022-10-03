import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { NewAlternativeInput } from "../input/NewAlternativeInput";
import { Alternative } from "../models/Alternative";
import { ResultSetHeader } from "../models/ResultSetHeader";
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

  @Query(() => [Alternative])
  async alternativesByQuest(
    @Arg("questId") questId: number
  ){
    const alternatives = await this.alternativeServices.getByQuest(questId);
    return alternatives;
  }

  @Authorized('Admin')
  @Mutation(() => ResultSetHeader)
  async createAlternative(
    @Arg("newAlternativeData") newAlternativeData: NewAlternativeInput,
    @Arg("idCategory") idCategory: number,
    @Arg("idQuest") idQuest: number
  ){
    const result = await this.alternativeServices.create({newAlternativeData, idCategory, idQuest});
    return result;
  }

  
  @Authorized('Admin')
  @Mutation(() => ResultSetHeader)
  async updateAlternative(
    @Arg("id") id: number,
    @Arg("description") description: string,
    @Arg("level") level: number,
    @Arg("idCategory") idCategory: number,
    @Arg("idQuests") idQuest: number
  ){
    const result = await this.alternativeServices.update({id, description, level, idCategory, idQuest});
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