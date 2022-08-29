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
}