import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class UserResponse{
  @Field(type => ID)
  id: number;

  @Field()
  idAlternative: number;

  @Field()
  idUser: number;
}