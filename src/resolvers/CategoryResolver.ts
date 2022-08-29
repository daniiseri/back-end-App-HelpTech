import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../models/Category";
import { CategoryServices } from "../services/CategoryServices";
import { NewCategoryInput } from "../input/NewCategoryInput";

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

  @Authorized('admin')
  @Mutation(() => [Category])
  async createCategory(
    @Arg("newCategoryData") newCategoryData: NewCategoryInput
  ){
    const newCategory = await this.categoryServices.create( newCategoryData );
    return newCategory;
  }
}