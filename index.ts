import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { QuestResolver } from './src/resolvers/QuestResolver';
import { CategoryResolver } from './src/resolvers/CategoryResolver';
import { AlternativeResolver } from './src/resolvers/AlternativeResolver';
import { MergeCategoryResolver } from './src/resolvers/MergeCategoryResolver';

async function main(){
  const schema = await buildSchema({
    resolvers: [
      QuestResolver,
      CategoryResolver,
      AlternativeResolver,
      MergeCategoryResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
}

main();