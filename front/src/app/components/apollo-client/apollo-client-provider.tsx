import { PropsWithChildren } from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AccessTokenPersistence } from "src/app/auth/token.persistence";

const SERVER_URL = import.meta.env.VITE_SERVER_URL + "/graphql" || "";
const httpLink = createHttpLink({
    uri: SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
    const access_token = AccessTokenPersistence.get();
    return {
        headers: {
            ...headers,
            authorization: access_token ? `Bearer ${access_token}` : "",
        },
    };
});

const client = new ApolloClient({
    uri: SERVER_URL,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export function ApolloClientProvider({ children }: ApolloClientProviderProps) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

type ApolloClientProviderProps = PropsWithChildren<{}>;
