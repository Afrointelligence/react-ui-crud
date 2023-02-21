import React, { type ReactElement, useEffect, useState } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { type Accessor } from '../../../../../utilities';
import getKey from '../../../../../utilities/getKey';
import { objectView } from '../../../../../utilities';

function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(' ');
}

interface Props<T> {
  label?: string;
  placeholder?: string;
  accessor?: Accessor<T>;
  value?: T;
  disabled?: boolean;
  getList: any;
  onChange: any;
  error: boolean;
  required: boolean;
}

export function ComboBoxElement<T>({
  label,
  accessor,
  disabled,
  placeholder,
  getList,
  value,
  error,
  required,
  onChange,
}: Props<T>): ReactElement {
  const [query, setQuery] = useState('');
  const [list, setList] = useState<T[]>([]);

  useEffect(() => {
    getList(query).then(setList);
  }, [query]);

  return (
    <Combobox
      disabled={disabled}
      as="div"
      nullable
      value={value}
      onChange={onChange}
    >
      <Combobox.Label
        className={`block text-sm font-medium ${
          error ? 'text-danger' : 'text-gray-700'
        }`}
      >
        {label}
        {required && <strong className="text-danger"> * </strong>}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className={`w-full rounded-md border bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary/[.9] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm ${
            error ? 'border-danger' : 'border-gray-300'
          }`}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          displayValue={(val: any) => String(objectView(val, accessor))}
          placeholder={placeholder}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {list.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {list.map((item) => (
              <Combobox.Option
                key={getKey()}
                value={item}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-primary text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        'block truncate',
                        selected && 'font-semibold'
                      )}
                    >
                      {objectView(item, accessor)}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-primary'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
