import React, { type ReactElement } from 'react';
import getKey from '../../../../../utilities/getKey';
import { type Accessor, objectView } from '../../../../../utilities';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Combobox } from '@headlessui/react';

interface Props<T> {
  item: T;
  accessor?: Accessor<T>;
  selected: boolean;
}

function Option<T>({ item, accessor, selected }: Props<T>): ReactElement {
  return (
    <Combobox.Option
      key={getKey()}
      className={({ active }) =>
        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
          active ? 'bg-gray-100' : 'text-gray-900'
        }`
      }
      value={item}
    >
      {({ active }) => {
        return (
          <>
            <span
              className={`block truncate ${
                selected ? 'font-medium' : 'font-normal'
              }`}
            >
              {objectView(item, accessor)}
            </span>
            {selected ? (
              <span
                className={`absolute inset-y-0 left-0 flex items-center pl-3`}
              >
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            ) : null}
          </>
        );
      }}
    </Combobox.Option>
  );
}

export default Option;
