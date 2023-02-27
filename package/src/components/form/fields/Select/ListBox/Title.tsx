import React, { type ReactElement } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Listbox } from '@headlessui/react';

interface Props {
  title: string;
  placeholder?: string;
  className?: string;
  errorClassName?: string;
  hasError?: boolean;
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

function Title({
  title,
  placeholder,
  hasError,
  className,
  errorClassName,
}: Props): ReactElement {
  const defaultClass =
    'w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-md sm:text-sm focus:border focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300';
  const customClass = className ?? defaultClass;
  const errorClass = errorClassName ?? `${defaultClass} border border-red-500`;
  return (
    <Listbox.Button
      className={`relative ${hasError ? errorClass : customClass}`}
    >
      <Main title={title} placeholder={placeholder} />
      <After />
    </Listbox.Button>
  );
}

export default Title;
