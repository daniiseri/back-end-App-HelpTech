import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { customAuthChecker } from './utils/customAuthChecker';

async function main(){
  const schema = await buildSchema({
    resolvers: [
      path.resolve(__dirname, 'resolvers/**Resolver.ts')
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    authChecker: customAuthChecker,
    authMode: "null",
  })

  const server = new ApolloServer({
    schema,
    context: ({req}) => {
      const [token, roles] = req.headers?.authorization?.split(',') || [];

      return {token, roles:[roles]};
    }
  })

  const URL = process.env.PORT || 4000;
  await server.listen(URL);

  console.log(`Server running on http://localhost:${URL}`);
}

main();