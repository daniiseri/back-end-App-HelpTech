import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class CategoryArgs{
  @Field(type => String)
  description: string;
}