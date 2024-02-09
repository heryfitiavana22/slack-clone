import classNames from 'classnames';
import { KeyboardEventHandler, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const components = {
  DropdownIndicator: null,
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

export function MultiCreatable({
  id,
  label,
  labelRight,
  labelClassName,
  placeholder = 'Ecrire et appuyer sur entrée...',
  onChange = () => {},
}: MultiCreatableProps) {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        const newValue = [...value, createOption(inputValue)];
        setValue(newValue);
        onChange(newValue.map((v) => v.value));
        setInputValue('');
        event.preventDefault();
    }
  };

  return (
    <div>
      {label && (
        <div className="flex items-center justify-between gap-3 mb-2">
          <label
            htmlFor={id}
            className={classNames(
              'block text-sm text-gray-900 dark:text-white',
              labelClassName,
            )}
          >
            {label}
          </label>
          {labelRight}
        </div>
      )}
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        id={id}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={(newValue) => {
          setValue(newValue);
          onChange(newValue.map((v) => v.value));
        }}
        onInputChange={(newValue) => setInputValue(newValue)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

type MultiCreatableProps = {
  id?: string;
  label?: string;
  labelRight?: React.ReactNode;
  labelClassName?: string;
  placeholder?: string;
  onChange?: (values: string[]) => void;
};
