import classNames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export const Input = forwardRef(
  (
    {
      label,
      labelRight,
      labelClassName,
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
              className={classNames(
                'block text-sm  text-gray-900',
                labelClassName,
              )}
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
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
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
  labelClassName?: string;
};
