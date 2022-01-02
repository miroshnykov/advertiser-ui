import gql from 'graphql-tag';
import TodoMutations from '../Mutations/todosMutation';

export const resolvers = {
  Mutation: {
    ...TodoMutations,
  }
}