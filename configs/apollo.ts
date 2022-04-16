import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
    uri: `https://swapi-graphql.netlify.app/.netlify/functions/index`,
});

const errorLink = onError(
    ({ graphQLErrors, networkError, }: any) => {
        if (graphQLErrors) {
            graphQLErrors.map(({ massage, location, path }: any) => {
                alert(`Error gql ${massage}`)
            })
        }

    })

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export {client};