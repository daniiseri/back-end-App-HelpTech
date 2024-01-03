import { Field, ID, ObjectType } from "type-graphql";
import { IsInt, IsDate } from 'class-validator' 

@ObjectType()
export class UserResponse{
  @Field(type => ID)
  id: number;

  @Field()
  @IsInt()
  idalternative: number;

  @Field()
  @IsInt()
  iduser: number;

  @Field()
  @IsDate()
  date: Date;
}