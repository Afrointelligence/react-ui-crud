import React, { type ReactElement } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Listbox } from '@headlessui/react';
import getKey from '../../../../../utilities/getKey';

interface Props<T> {
  item: T;
  selected: boolean;
  label: string;
}

function Option<T>({ item, selected, label }: Props<T>): ReactElement {
  return (
    <Listbox.Option
      key={getKey()}
      className={({ active }) =>
        `relative cursor-default select-none py-2 pl-10 pr-4 ${
          active ? 'bg-green-100 text-green-900' : 'text-gray-900'
        }`
      }
      value={item}
    >
      {() => {
        return (
          <>
            <span
              className={`block truncate ${
                selected ? 'font-medium' : 'font-normal'
              }`}
            >
              {label}
            </span>
            {selected
              ? (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                )
              : null}
          </>
        );
      }}
    </Listbox.Option>
  );
}

export default Option;
