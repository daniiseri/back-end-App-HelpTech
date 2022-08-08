import { Args, Mutation, Query, Resolver } from "type-graphql";
import { Quest } from "../models/Quest";
import { QuestArgs } from "../args/QuestArgs";
import { QuestRepositories } from "../database/repositories/QuestRepositories";

@Resolver()
export class QuestResolver{
  data: any;

  constructor(){
    this.data = new QuestRepositories().findAll();
  }

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