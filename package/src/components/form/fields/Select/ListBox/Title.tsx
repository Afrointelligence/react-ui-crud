import React, { type ReactElement } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Listbox } from '@headlessui/react';

interface Props {
  title: string;
  placeholder?: string;
}

function Main({
  title,
  placeholder,
}: {
  title: string;
  placeholder?: string;
}): ReactElement {
  return (
    <span className="block truncate">
      {title.length ? (
        title
      ) : placeholder ? (
        <span className="text-gray-100">{placeholder}</span>
      ) : (
        <span className="text-transparent">placeholder</span>
      )}
    </span>
  );
}

function After(): ReactElement {
  return (
    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
    </span>
  );
}

function Title({ title, placeholder }: Props): ReactElement {
  return (
    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
      <Main title={title} placeholder={placeholder} />
      <After />
    </Listbox.Button>
  );
}

export default Title;
