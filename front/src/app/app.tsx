import { PropsWithChildren } from "react";
import { RouterDom } from "./router-dom";


export function App({}: AppProps) {
    return (
        <>
            <RouterDom />
        </>
    );
}

type AppProps = PropsWithChildren<{}>;
