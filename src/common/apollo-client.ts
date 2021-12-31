import {auth} from "../utils/auth";
// import * as dotenv from 'dotenv';

// dotenv.config();

console.log('process.env.APP_GRAPHQL_URL:', process.env.APP_GRAPHQL_URL)
//const api = `${process.env.APP_GRAPHQL_URL}` || `http://localhost:4009`
const api = `http://localhost:4009`
console.log('api:', api)
const graphqlUrl = `${api}/graphql`

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {useMutation} from "@apollo/react-hooks";
import {REFRESH_TOKEN} from "../graphql/User";

const httpLink = createHttpLink({
  uri: graphqlUrl,
});

const authLink =  setContext(async (_, { headers }) => {

  const tokenNewFunc = await auth()
  const newToken = await tokenNewFunc()
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${newToken}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client