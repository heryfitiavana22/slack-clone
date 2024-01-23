import { PropsWithChildren } from "react";

export function Header({}: HeaderProps) {
    return <header className="h-11 bg-primary-600"></header>;
}

type HeaderProps = PropsWithChildren<{}>;
