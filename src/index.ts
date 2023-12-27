import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { customAuthChecker } from './utils/customAuthChecker.js';
import { AlternativeResolver } from './resolvers/AlternativeResolver.js'
import { CategoryResolver } from './resolvers/CategoryResolver.js'
import { QuestResolver } from './resolvers/QuestResolver.js'
import { SessionResolver } from './resolvers/SessionResolver.js'
import { UserResolver } from './resolvers/UserResolver.js'
import { UserResponseResolver } from './resolvers/UserResponseResolver.js'
import path from 'path';

async function main() {
  const schema = await buildSchema({
    resolvers: [
      AlternativeResolver,
      CategoryResolver,
      QuestResolver,
      SessionResolver,
      UserResolver,
      UserResponseResolver
    ],
    emitSchemaFile: path.resolve('schema.gql'),
    authChecker: customAuthChecker,
    authMode: "null",
  })

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const [token, roles] = req.headers?.authorization?.split(',') || [];

      return { token, roles: [roles] };
    },
    cache: 'bounded'
  })

  const URL = process.env.PORT || 4000;
  await server.listen(URL);

  console.log(`Server running on http://localhost:${URL}`);
}

main();