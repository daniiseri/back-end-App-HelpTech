import { Args, Mutation, Query, Resolver } from "type-graphql";
import { Alternative } from "../models/Alternative";
import { AlternativeArgs } from "../args/AlternativeArgs";
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

  @Mutation(() => Alternative)
  async createAlternative(){
  }
}