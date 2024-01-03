import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserRole{
  @Field()
  id: number;

  @Field()
  IdUser: number;

  @Field()
  IdRole: number;

  @Field()
  description: string;
}