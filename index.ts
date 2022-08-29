import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { customAuthChecker } from './src/utils/customAuthChecker';

async function main(){
  const schema = await buildSchema({
    resolvers: [
      path.resolve(__dirname, 'src/resolvers/**Resolver.ts')
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    authChecker: customAuthChecker,
    authMode: "null",

  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
}

main();