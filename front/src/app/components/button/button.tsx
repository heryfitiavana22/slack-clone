import classNames from 'classnames';
import { ComponentProps } from 'react';
import { cva } from 'class-variance-authority';
import { Variant } from 'src/app/types';

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(button({ intent: variant, size }), className)}
      {...props}
    ></button>
  );
}

type ButtonProps = ComponentProps<'button'> & {
  variant?: Variant | 'gray';
  size?: 'md' | 'sm';
};

const button = cva('text-white focus:ring-4 font-medium', {
  variants: {
    intent: {
      primary: 'bg-primary-500 hover:bg-primary-600 focus:ring-primary-300',
      secondary:
        'bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-300',
      danger: 'bg-danger-500 hover:bg-danger-600 focus:ring-danger-300',
      success: 'bg-success-500 hover:bg-success-600 focus:ring-success-300',
      info: 'bg-info-500 hover:bg-info-600 focus:ring-info-300',
      warning: 'bg-warning-500 hover:bg-warning-600 focus:ring-warning-300',
      gray: 'text-primary-500 bg-gray-200 hover:bg-gray-300 focus:ring-primary-300',
    },
    size: {
      sm: 'text-sm px-3 py-1.5 rounded-md',
      md: 'text-sm px-5 py-2.5 rounded-lg',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});
