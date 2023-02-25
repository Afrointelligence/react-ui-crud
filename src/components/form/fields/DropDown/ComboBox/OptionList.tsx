import React, { type Dispatch, Fragment, type ReactElement, type SetStateAction } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { type Accessor } from '../../../../../utilities';
import getKey from '../../../../../utilities/getKey';
import _ from 'lodash';
import Option from './Option';
import getSelected from '../getSelected';

interface Props<T> {
  accessor?: Accessor<T>;
  setQuery: Dispatch<SetStateAction<string>>;
  query: string;
  list: T[];
  multiple?: boolean;
  value?: T | T[];
}

function OptionList<T>({ list, setQuery, query, value, accessor, multiple }: Props<T>): ReactElement {
  return <Transition
    as={Fragment}
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    afterLeave={() => { setQuery(''); }}
  >
    <Combobox.Options className="absolute z-[1000] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      {list.length === 0 && query !== ''
        ? (
          <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
          </div>
          )
        : (
            list.map((item) => (
            <Option selected={getSelected(item, value, multiple)} key={getKey()} item={item} accessor={accessor} />
            ))
          )}
    </Combobox.Options>
  </Transition>;
}

export default OptionList;
