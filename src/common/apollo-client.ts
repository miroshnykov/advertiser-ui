import {ApolloClient, InMemoryCache} from '@apollo/client';

const api = `${process.env.APP_GRAPHQL_URL || 'http://localhost:4009'}`
console.log('api:', api)
const client = new ApolloClient({
  uri: `${api}/graphql`,
  cache: new InMemoryCache()
});

export default client