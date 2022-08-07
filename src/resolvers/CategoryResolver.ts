import { Args, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../models/Category";
import { CategoryArgs } from "../args/CategoryArgs";

@Resolver()
export class CategoryResolver{
  private data: Category[]=[];

  @Query(() => [Category])
  async categories(){
    return this.data;
  }

  @Mutation(() => Category)
  async createCategory(
    @Args() { description }: CategoryArgs
  ){
    const category = { id: 1, description };
    this.data.push(category);
    return category;
  }
}