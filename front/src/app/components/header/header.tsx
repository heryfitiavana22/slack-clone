import { PropsWithChildren } from "react";

export function Header({}: HeaderProps) {
    return <header className="h-11 fixed top-0 left-0 w-full bg-primary-600 z-10"></header>;
}

type HeaderProps = PropsWithChildren<{}>;
