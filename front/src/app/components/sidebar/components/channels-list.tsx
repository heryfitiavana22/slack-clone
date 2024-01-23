import { PropsWithChildren } from "react";
import { NavDropdown } from "./nav-dropdown";

export function ChannelsList({}: ChannelsListProps) {
    const dropdownItems = [
        { name: "aléatoire", href: "#" },
        { name: "example", href: "#" },
    ];
    
    return (
        <li>
            <NavDropdown
                name={"Canaux"}
                dropdownItems={dropdownItems}
                addCaption={"Ajouter des canaux"}
            />
        </li>
    );
}

type ChannelsListProps = PropsWithChildren<{}>;
