import classNames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export const Input = forwardRef(
  (
    {
      label,
      labelRight,
      className,
      id,
      type = 'text',
      placeholder,
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <div>
        {label && (
          <div className="flex items-center justify-between gap-3 mb-2">
            <label
              htmlFor={id}
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>
            {labelRight}
          </div>
        )}
        <input
          type={type}
          id={id}
          className={classNames(
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
            className,
          )}
          placeholder={placeholder}
          {...props}
          ref={ref as any}
        />
      </div>
    );
  },
);

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label?: string;
  labelRight?: React.ReactNode;
};
