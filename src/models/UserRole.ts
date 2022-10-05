import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserRole{
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  roleid: number;
}