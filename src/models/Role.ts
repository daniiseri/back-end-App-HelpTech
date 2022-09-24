import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Role{
  @Field()
  id: number;

  @Field()
  description: string;
}