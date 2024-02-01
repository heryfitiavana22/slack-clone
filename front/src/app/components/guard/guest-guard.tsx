import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "src/app/auth/use-auth";
import { ROUTES } from "src/app/routes";

export function GuestGuard({ children }: GuestGuardProps) {
    const { status } = useAuth();
    // console.log(status);

    if (status == "unknown") return <div>loading...</div>;

    if (status == "authenticated") return <Navigate to={ROUTES.home()} />;

    return <>{children}</>;
}

type GuestGuardProps = PropsWithChildren<{}>;
