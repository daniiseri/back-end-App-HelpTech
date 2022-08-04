import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { QuestResolver } from './src/resolvers/QuestResolver';

async function main(){
  const schema = await buildSchema({
    resolvers: [
      QuestResolver,
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