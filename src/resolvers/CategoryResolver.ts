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
    @Arg("newCategoryInput") newCategoryInput: NewCategoryInput
  ){
    const newCategory = await this.categoryServices.create( newCategoryInput );
    return newCategory;
  }

  @Authorized('admin')
  @Mutation(() => [Category])
  async updateCategory(
    @Arg("id") id: number,
    @Arg("description") description: string
  ){
    const category = await this.categoryServices.update({id, description});
    return category;
  }

  @Authorized('admin')
  @Mutation(() => Boolean)
  async deleteCategory(
    @Arg("id") id: number
  ){
    const [result] = await this.categoryServices.delete(id);
    const {affectedRows} = result
    return affectedRows > 0;
  }
}