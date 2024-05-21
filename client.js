import { ApolloClient, InMemoryCache } from '@apollo/client';
const BASE_URL = 'https://rest-to-graphql-api-f1.vercel.app/graphql';

const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache(),
  });
  
  export default client;