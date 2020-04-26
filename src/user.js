const { gql } = require('apollo-server-express');
const User = require('../models/user');

export const typeDefs = gql`
  type User{
    id: ID!
    userName: String!
    email: String!
    ##careerPosted: [Career!]
  }
  extend type Query {
    user(id:ID!): User
    users: [User]
  }
  extend type Mutation{
    addUser(userName: String!, email: String!): User
    deleteUser(id: ID!): User
    updateUser(id: ID!, userName: String!, email: String!): User
  }
`;

export const resolvers = {
  Query: {
    user: async (_, args) => await User.findById(args.id),
    users: async () => await User.find({}).exec(),
  },
  Mutation: {
    addUser: async (parent,args) => {
      try {
        let response = await User.create(args)
        return response;
      } catch(e) {
        return e.message;
      }
    },
    deleteUser: async (_, args) => {
      try {
        let response = await User.findByIdAndRemove(args.id);
        return response;
      } catch (e) {
        return e.message;
      }
    },
    updateUser: async(_, args) => {
      try {
        let response = await User.findByIdAndUpdate(
          {_id: args.id },
          {userName: args.userName,
          email: args.email },
          {new: true},
        )
        return response;
      } catch (e) {
          return e.message;
        }
    },
  },
};
