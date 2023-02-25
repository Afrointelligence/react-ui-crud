import React, { type ReactElement } from 'react';
import { Listbox } from '@headlessui/react';
import { type Accessor, objectView } from '../../../../../utilities';
import Title from './Title';
import OptionList from './OptionsList';
import SelectedList from '../SelectedList';

interface Props<T> {
  placeholder?: string;
  accessor?: Accessor<T>;
  value?: T | T[];
  disabled?: boolean;
  multiple?: boolean;
  list: T[];
  onChange: any;
}

export default function ListBoxElement<T>({
  accessor,
  disabled,
  multiple,
  placeholder,
  list,
  value,
  onChange,
}: Props<T>): ReactElement {
  const props = {
    value,
    onChange,
    disabled,
  };

  if (multiple) {
    Object.defineProperty(props, 'multiple', { value: true, enumerable: true });
  }

  const title = multiple ? (value as T[]).map((item) => objectView(item, accessor)).join(', ') : String(objectView(value as T, accessor));

  return (
    <Listbox {...props}>
      <div className="relative mt-1 mb-4">
        <Title title={title} placeholder={placeholder}/>
        <OptionList list={list} multiple={multiple} value={value} accessor={accessor} />
      </div>
      {multiple && <SelectedList value={value as T[]} accessor={accessor} list={list} onChange={onChange} />}
    </Listbox>
  );
}
