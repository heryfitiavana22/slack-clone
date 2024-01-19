import { PropsWithChildren } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Channel } from "./channel/channel";
import { Login } from "./auth/login/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Channel />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export function RouterDom({}: RouterDomProps) {
    return <RouterProvider router={router} />;
}

type RouterDomProps = PropsWithChildren<{}>;
