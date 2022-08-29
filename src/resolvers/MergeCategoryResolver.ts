import { Authorized, Mutation, Query, Resolver } from "type-graphql";
import { MergeCategory } from "../models/MergeCategory";
import { MergeCategoryServices } from "../services/MergeCategoryServices";

@Resolver()
export class MergeCategoryResolver{
  mergeServices: MergeCategoryServices;

  constructor(){
    this.mergeServices = new MergeCategoryServices();
  }

  @Query(() => [MergeCategory])
  async mergeCategories(){
    const mergeCategories = await this.mergeServices.getAll();
    return mergeCategories[0];
  }

  @Authorized('admin')
  @Mutation(() => MergeCategory)
  async createMergeCategory(){
    
  }
}