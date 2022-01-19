import gql from 'graphql-tag';
// @ts-ignore
import TodoMutations from '../Mutations/todosMutation';

export const resolvers = {
  Mutation: {
    ...TodoMutations,
  }
}