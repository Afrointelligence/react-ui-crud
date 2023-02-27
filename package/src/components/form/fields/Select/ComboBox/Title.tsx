import React, {
  type Dispatch,
  type ReactElement,
  type SetStateAction,
} from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Combobox } from '@headlessui/react';
import { type Accessor } from '../../../../../utilities';

interface Props {
  displayValueFn: any;
  placeholder?: string;
  className?: string;
  errorClassName?: string;
  hasError?: boolean;
  setQuery: Dispatch<SetStateAction<string>>;
}

function Main<T>({
  placeholder,
  setQuery,
  displayValueFn,
}: {
  displayValueFn: any;
  accessor?: Accessor<T>;
  placeholder?: string;
  setQuery: Dispatch<SetStateAction<string>>;
}): ReactElement {
  return (
    <Combobox.Input
      placeholder={placeholder}
      className="w-full outline-none border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
      displayValue={displayValueFn}
      onChange={(event) => {
        setQuery(event.target.value);
      }}
    />
  );
}

function After(): ReactElement {
  return (
    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
    </Combobox.Button>
  );
}

function Title({
  setQuery,
  placeholder,
  displayValueFn,
  className,
  errorClassName,
  hasError,
}: Props): ReactElement {
  const defaultClass =
    'w-full cursor-default rounded-md bg-white text-left shadow-md sm:text-sm focus:border focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300';
  const customClass = className ?? defaultClass;
  const errorClass = errorClassName ?? `${defaultClass} border border-red-500`;
  return (
    <div
      className={`relative overflow-hidden ${
        hasError ? errorClass : customClass
      }`}
    >
      <Main
        displayValueFn={displayValueFn}
        setQuery={setQuery}
        placeholder={placeholder}
      />
      <After />
    </div>
  );
}

export default Title;
