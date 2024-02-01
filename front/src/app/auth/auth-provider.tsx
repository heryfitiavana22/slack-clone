import { gql, useQuery } from "@apollo/client";
import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "./use-auth";

const GET_ME = gql`
    query {
        me {
            id
            name
            email
        }
    }
`;

export function AuthProvider({ children }: AuthProviderProps) {
    const { error, data } = useQuery(GET_ME);
    const { setUser } = useAuth();
    console.log(data);

    useEffect(() => {
        if (data?.me) return setUser(data.me);
        if (error) return setUser(null);
    }, [data, error]);

    if (error?.message == "Failed to fetch")
        return <p>Error, server not running : {error?.message}</p>;

    return <>{children}</>;
}

type AuthProviderProps = PropsWithChildren<{}>;
