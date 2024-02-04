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
          'bg-secondary text-white': active,
          'hover:bg-primary-400': !disableHover,
        },
        className,
      )}
      {...props}
    >
      {icon}
      <span className="ms-3">{name}</span>
    </Link>
  );
}

type NavLinkProps = ComponentProps<'a'> & {
  active?: boolean;
  name: string;
  href?: string;
  icon?: React.ReactElement;
  disableHover?: boolean;
};
