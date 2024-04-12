import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Hastag } from '../../icons/hastag';

export function NavLink({
  name,
  active,
  icon = <Hastag />,
  href = '#',
  className,
  disableHover = false,
  hasUnRead = false,
  children,
  ref,
  ...props
}: NavLinkProps) {
  return (
    <Link
      to={href}
      className={classNames(
        'flex items-center py-1 px-2 rounded-md group',
        {
          'bg-primary-400 text-white': active,
          'hover:bg-primary-600': !disableHover,
        },
        className,
      )}
      {...props}
    >
      {icon}
      <span className="ms-3">{name}</span>
      {hasUnRead && (
        <span className="relative bottom-1 block w-2 h-2 bg-secondary rounded-full"></span>
      )}
    </Link>
  );
}

type NavLinkProps = ComponentProps<'a'> & {
  active?: boolean;
  name: string;
  href?: string;
  icon?: React.ReactElement;
  disableHover?: boolean;
  hasUnRead?: boolean;
};
