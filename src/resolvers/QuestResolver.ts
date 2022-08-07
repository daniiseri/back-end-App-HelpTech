import { Args, Mutation, Query, Resolver } from "type-graphql";
import { Quest } from "../models/Quest";
import { QuestArgs } from "../args/QuestArgs";

@Resolver()
export class QuestResolver{
  private data: Quest[]=[];

  @Query(() => [Quest])
  async quests(){
    return this.data;
  }

  @Mutation(() => Quest)
  async createQuest(
    @Args() { description, idCategory }: QuestArgs
  ){
    const quest = { id: 1, description, idCategory };
    this.data.push(quest);
    return quest;
  }
}