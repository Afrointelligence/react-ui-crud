import React, { Fragment, type ReactElement } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import getKey from '../../../../../utilities/getKey';
import { type Accessor, objectView } from '../../../../../utilities';
import Option from './Option';
import getSelected from '../getSelected';

interface Props<T> {
  accessor?: Accessor<T>;
  value?: T[] | T;
  list: T[];
  multiple?: boolean;
}

function OptionsList<T>({ list, value, accessor, multiple }: Props<T>): ReactElement {
  return <Transition
    as={Fragment}
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <Listbox.Options
      className="absolute mt-1 z-[1000] max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      {list.map((item) => (
        <Option key={getKey()} item={item} label={String(objectView(item, accessor))} selected={getSelected(item, value, multiple)} />
      ))}
    </Listbox.Options>
  </Transition>;
}

export default OptionsList;
