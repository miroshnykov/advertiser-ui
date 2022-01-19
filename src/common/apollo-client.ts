import {auth} from "../utils/auth";
import * as dotenv from 'dotenv';

dotenv.config();

console.log('process.env.APP_GRAPHQL_URL:', process.env.APP_GRAPHQL_URL)
//const api = `${process.env.APP_GRAPHQL_URL}` || `http://localhost:4009`
const api = `http://localhost:4009`

const graphqlUrl = `${api}/graphql`
console.log('graphqlUrl:', graphqlUrl)
// import { InMemoryCache } from 'apollo-cache-inmemory';
import {ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {useMutation} from "@apollo/react-hooks";
import {REFRESH_TOKEN} from "../graphql/User";
import {resolvers} from './GraphQL/Resolvers';

const httpLink = createHttpLink({
  uri: graphqlUrl,
});

const authLink = setContext(async (_, {headers}) => {

  const tokenNewFunc = await auth(graphqlUrl)
  const newToken = await tokenNewFunc()
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${newToken}`,
    }
  }
});

const cache = new InMemoryCache()

const client = new ApolloClient<NormalizedCacheObject>({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, {isConnected}, {cache}) => {
        cache.writeData({data: {isConnected}});
        return null;
      }
    }
  },
});

// cache.writeData({
//   data: {
//     user: []
//   },
// });

export default client