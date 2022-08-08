import { Args, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../models/Category";
import { CategoryArgs } from "../args/CategoryArgs";
import { CategoryServices } from "../services/CategoryServices";

@Resolver()
export class CategoryResolver{
  categoryServices: CategoryServices;

  constructor(){
    this.categoryServices = new CategoryServices();
  }

  @Query(() => [Category])
  async categories(){
    const categories = await this.categoryServices.getAll();
    return categories[0];
  }

  @Mutation(() => Category)
  async createCategory(){
   
  }
}