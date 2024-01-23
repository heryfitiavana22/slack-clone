import React, { useMemo, useState } from "react";
import { NavLink } from "./nav-link";
import { ChevronDown } from "../../icons/chevron-down";
import { ChevronRight } from "../../icons/chevron-right";
import { Plus } from "../../icons/plus";

export function NavDropdown({
    name,
    dropdownItems,
    addCaption = "Ajouter",
    disableAdd = false,
}: NavDropdownProps) {
    const id = useMemo(() => Math.floor(Math.random() * 100), []);
    const [expanded, setExpanded] = useState(false);
    const dropdownName = `dropdown-${id}`;

    return (
        <>
            <button
                type="button"
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-md group"
                aria-controls={dropdownName}
                data-collapse-toggle={dropdownName}
                onClick={() => setExpanded(!expanded)}
            >
                <span className="hover:bg-primary-400 rounded-md">
                    {expanded ? <ChevronDown /> : <ChevronRight />}
                </span>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    {name}
                </span>
            </button>
            <ul id={dropdownName} className="hidden py-2">
                {dropdownItems.map((item, k) => (
                    <li key={k}>
                        <NavLink
                            name={item.name}
                            href={item.href}
                            icon={item.icon}
                        />
                    </li>
                ))}
                {!disableAdd && (
                    <li>
                        <NavLink
                            name={addCaption}
                            icon={<Plus className="bg-primary-400 rounded-md"/>}
                            disableHover
                        />
                    </li>
                )}
            </ul>
        </>
    );
}

export type NavDropdownProps = {
    name: string;
    dropdownItems: DropDownItem[];
    addCaption?: string;
    disableAdd?: boolean;
};

type DropDownItem = {
    name: string;
    href?: string;
    icon?: React.ReactElement;
};
