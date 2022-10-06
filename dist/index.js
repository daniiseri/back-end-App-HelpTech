"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const path_1 = __importDefault(require("path"));
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const customAuthChecker_1 = require("./utils/customAuthChecker");
async function main() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [
            path_1.default.resolve(__dirname, 'resolvers/**Resolver.js')
        ],
        emitSchemaFile: path_1.default.resolve(__dirname, 'schema.gql'),
        authChecker: customAuthChecker_1.customAuthChecker,
        authMode: "null",
    });
    const server = new apollo_server_1.ApolloServer({
        schema,
        context: ({ req }) => {
            var _a, _b;
            const [token, roles] = ((_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(',')) || [];
            return { token, roles: [roles] };
        },
        cache: 'bounded'
    });
    const URL = process.env.PORT || 4000;
    await server.listen(URL);
    console.log(`Server running on http://localhost:${URL}`);
}
main();
