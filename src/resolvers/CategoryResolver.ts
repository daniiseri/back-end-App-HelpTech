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
    return categories;
  }

  @Authorized('Admin')
  @Mutation(() => Number)
  async createCategory(
    @Arg("newCategoryInput") newCategoryInput: NewCategoryInput
  ){
    const result = await this.categoryServices.create( newCategoryInput );
    return result;
  }

  @Authorized('Admin')
  @Mutation(() => Number)
  async updateCategory(
    @Arg("id") id: number,
    @Arg("description") description: string
  ){
    const category = await this.categoryServices.update({id, description});
    return category;
  }

  @Authorized('Admin')
  @Mutation(() => Boolean)
  async deleteCategory(
    @Arg("id") id: number
  ){
    const result = await this.categoryServices.delete(id);
    return result ? true : false;
  }
}