import { PropsWithChildren } from "react";
import { RouterDom } from "./router-dom";
import { ApolloClientProvider } from "./components/apollo-client/apollo-client-provider";
import { AuthProvider } from "./auth/auth-provider";

export function App({}: AppProps) {
    return (
        <ApolloClientProvider>
            <AuthProvider>
                <RouterDom />
            </AuthProvider>
        </ApolloClientProvider>
    );
}

type AppProps = PropsWithChildren<{}>;
