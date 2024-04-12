import React, { useState } from 'react';
import { NavLink } from './nav-link';
import { ChevronDown } from '../../icons/chevron-down';
import { ChevronRight } from '../../icons/chevron-right';
import { Plus } from '../../icons/plus';
import classNames from 'classnames';

export function NavDropdown({
  name,
  dropdownItems,
  addCaption = 'Ajouter',
  disableAdd = false,
  activeChannelId,
  onClickAdd,
}: NavDropdownProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base transition duration-75 rounded-md group"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="hover:bg-primary-400 rounded-md">
          {expanded ? <ChevronDown /> : <ChevronRight />}
        </span>
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
          {name}
        </span>
      </button>
      <div className={classNames('', expanded ? 'block' : 'hidden')}>
        <ul className=" py-2">
          {dropdownItems.map((item, k) => (
            <li key={k}>
              <NavLink
                name={item.name}
                href={item.href}
                icon={item.icon}
                active={item.id == activeChannelId}
                hasUnRead={item.hasUnRead}
              />
            </li>
          ))}
          {!disableAdd && (
            <li>
              <NavLink
                name={addCaption}
                icon={<Plus className="bg-primary-400 rounded-md" />}
                disableHover
                onClick={onClickAdd}
              />
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export type NavDropdownProps = {
  name: string;
  dropdownItems: DropDownItem[];
  addCaption?: string;
  disableAdd?: boolean;
  activeChannelId: number | null;
  onClickAdd?: () => void;
};

export type DropDownItem = {
  id: number;
  name: string;
  href?: string;
  icon?: React.ReactElement;
  hasUnRead?: boolean
};
