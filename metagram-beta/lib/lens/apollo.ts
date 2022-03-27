import { ApolloClient, InMemoryCache } from '@apollo/client'

const APIURL: string = 'https://api-mumbai.lens.dev/';

const apolloClient = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
})

export default apolloClient