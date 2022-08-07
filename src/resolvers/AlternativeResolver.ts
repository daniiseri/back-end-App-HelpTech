import { Args, Mutation, Query, Resolver } from "type-graphql";
import { Alternative } from "../models/Alternative";
import { AlternativeArgs } from "../args/AlternativeArgs";

@Resolver()
export class AlternativeResolver{
  private data: Alternative[]=[];

  @Query(() => [Alternative])
  async alternatives(){
    return this.data;
  }

  @Mutation(() => Alternative)
  async createAlternative(
    @Args() { description, level, idCategory, idQuest }: AlternativeArgs
  ){
    const alternative = { id: 1, description, level, idCategory, idQuest };
    this.data.push(alternative);
    return alternative;
  }
}Alternative