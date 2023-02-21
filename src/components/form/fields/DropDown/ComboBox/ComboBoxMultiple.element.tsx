import React, { type ReactElement, useEffect, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { MinusCircleIcon } from '@heroicons/react/24/outline';
import _ from 'lodash';
import getKey from '../../../../../utilities/getKey';
import { type Accessor } from '../../../../../utilities';
import { objectView } from '../../../../../utilities';

function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(' ');
}

interface Props<T> {
  label?: string;
  placeholder?: string;
  actionButton?: JSX.Element | null;
  accessor?: Accessor<T>;
  value?: T[];
  disabled?: boolean;
  getList: any;
  onChange: any;
  error: boolean;
  required: boolean;
  onSelectedItemClicked?: any;
}

export function ComboBoxMultipleElement<T>({
  label,
  accessor,
  actionButton = null,
  disabled,
  placeholder,
  getList,
  value = [],
  error,
  required,
  onChange,
  onSelectedItemClicked,
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
      value={value}
      onChange={onChange}
      multiple
    >
      <div className="flex">
        <Combobox.Label
          className={`block text-sm font-medium grow ${
            error ? 'text-danger' : 'text-gray-700'
          }`}
        >
          {label}
          {required && <strong className="text-danger"> * </strong>}
        </Combobox.Label>
        {actionButton}
      </div>
      <div className="relative mt-1">
        <Combobox.Input
          className={`w-full rounded-md border bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm ${
            error ? 'border-danger' : 'border-gray-300'
          }`}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
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
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
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
                          active ? 'text-white' : 'text-indigo-600'
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
      {value.map((item, index) => (
        <div key={getKey()} className="flex items-center mt-3">
          <span
            className="inline-block h-1 w-1 flex-shrink-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          <div
            onClick={() => onSelectedItemClicked(index, item)}
            className="w-5/6 grow ml-2"
          >
            <div className="text-sm font-medium text-gray-500 hover:text-primary truncate cursor-pointer">
              {objectView(item, accessor)}
            </div>
          </div>
          <div className="ml-2">
            <MinusCircleIcon
              onClick={() => {
                onChange(value?.filter((item2) => !_.isEqual(item2, item)));
              }}
              className="h-4 w-4 text-danger cursor-pointer"
            />
          </div>
        </div>
      ))}
    </Combobox>
  );
}
