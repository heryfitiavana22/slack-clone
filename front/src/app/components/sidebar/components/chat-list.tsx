import { PropsWithChildren } from "react";
import { NavDropdown } from "./nav-dropdown";

export function ChatList({}: ChatListProps) {
    const dropdownItems = [
        { name: "hery hery", href: "#" },
        { name: "go-max", href: "#" },
    ];

    return (
        <li>
            <NavDropdown
                name={"Message"}
                dropdownItems={dropdownItems}
                addCaption={"Ajouter des collègues"}
            />
        </li>
    );
}

type ChatListProps = PropsWithChildren<{}>;
