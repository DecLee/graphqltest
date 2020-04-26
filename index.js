const { ApolloServer, gql} = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
import { merge } from 'lodash';
const { makeExecutableSchema } = require('graphql-tools');
const User = require('./models/user');
import Career from './models/career';

require('./config');
import { typeDefs as userType, resolvers as userResolvers } from './src/user.js';
import { typeDefs as careerType, resolvers as carResolvers } from './src/career.js';

const Query = gql`
  type Query{
    _empty: String
  },

  type Mutation{
    _empty: String
  }
`;

const resolvers = {};
const schema = makeExecutableSchema({
  typeDefs: [Query, userType, careerType],
  resolvers: merge(resolvers,userResolvers,carResolvers),
});


const server = new ApolloServer({
  schema
})

const app = express();
app.use(bodyParser.json());

server.applyMiddleware({ app });

app.listen({port: 8000}, () => {
  console.log(`Apollo Server ready on http://localhost:8000${server.graphqlPath}`);
});
