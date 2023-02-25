import React, { type Dispatch, type ReactElement, type SetStateAction } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Combobox } from '@headlessui/react';
import { type Accessor } from '../../../../../utilities';

interface Props {
  displayValueFn: any;
  placeholder?: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

function Main<T>({ placeholder, setQuery, displayValueFn }: { displayValueFn: any, accessor?: Accessor<T>, placeholder?: string, setQuery: Dispatch<SetStateAction<string>> }): ReactElement {
  return <Combobox.Input
    placeholder={placeholder}
    className="w-full outline-none border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
    displayValue={displayValueFn}
    onChange={(event) => { setQuery(event.target.value); }}
  />;
}

function After(): ReactElement {
  return <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
    <ChevronUpDownIcon
      className="h-5 w-5 text-gray-400"
      aria-hidden="true"
    />
  </Combobox.Button>;
}

function Title({ setQuery, placeholder, displayValueFn }: Props): ReactElement {
  return (
    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
      <Main displayValueFn={displayValueFn} setQuery={setQuery} placeholder={placeholder} />
      <After />
    </div>
  );
}

export default Title;
