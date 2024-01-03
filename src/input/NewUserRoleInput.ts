import { Field, InputType } from "type-graphql";
import { IsInt } from 'class-validator'

@InputType()
export class NewUserRoleInput {
    @Field()
    @IsInt()
    iduser: number

    @Field({ nullable: true })
    @IsInt()
    idrole?: number
}