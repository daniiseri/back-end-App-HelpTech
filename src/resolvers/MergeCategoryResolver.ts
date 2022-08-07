import { Args, Mutation, Query, Resolver } from "type-graphql";
import { MergeCategory } from "../models/MergeCategory";
import { MergeCategoryArgs } from "../args/MergeCategoryArgs";

@Resolver()
export class MergeCategoryResolver{
  private data: MergeCategory[]=[];

  @Query(() => [MergeCategory])
  async mergeCategories(){
    return this.data;
  }

  @Mutation(() => MergeCategory)
  async createMergeCategory(
    @Args() { idCategoryOne, idCategoryTwo }: MergeCategoryArgs
  ){
    const mergeCategory = { id: 1, idCategoryOne, idCategoryTwo };
    this.data.push(mergeCategory);
    return mergeCategory;
  }
}