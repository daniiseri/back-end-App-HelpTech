import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Quest } from "../models/Quest";
import  crypto  from 'crypto';
//query: buscar dados
//mutation: criar, alterar ou deletar

@Resolver()
export class QuestResolver{
  private data: Quest[] = [];

  @Query(() => [Quest])
  async quests(){
    return this.data;
  }

  @Mutation(() => Quest)
  async createQuest(
    @Arg('description') description: string
  ){
    const quest = { id: crypto.randomUUID(), description };

    this.data.push(quest);

    return quest;
  }
}