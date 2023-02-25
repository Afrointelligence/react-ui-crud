import React, { useEffect } from 'react';
import { type ReactElement, useState } from 'react';
import { Combobox } from '@headlessui/react';
import { type Accessor, objectView } from '../../../../../utilities';
import Title from './Title';
import OptionsList from './OptionList';
import SelectedList from '../SelectedList';

interface Props<T> {
  placeholder?: string;
  accessor?: Accessor<T>;
  value?: T | T[];
  disabled?: boolean;
  multiple?: boolean;
  getList?: (s: string) => (Promise<T[]> | T[]);
  list?: T[];
  onChange: any;
}

export default function ComboBoxElement<T>({
  accessor,
  disabled,
  multiple,
  placeholder,
  getList,
  list: listFromProps,
  value,
  onChange,
}: Props<T>): ReactElement {
  const [query, setQuery] = useState('');
  const [list, setList] = useState<T[]>(listFromProps ?? []);

  async function getAndSetList(): Promise<void> {
    if (typeof getList === 'function') {
      setList(await getList(query));
    }
  }
  useEffect(() => {
    void getAndSetList();
  }, [query]);

  const filteredList =
        query === ''
          ? list
          : list.filter((item) =>
            String(objectView(item, accessor))
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          );

  const displayValueFn = multiple ? (value: any[]) => (value.map((item: any) => objectView(item, accessor)).join(', ')) : (value: any) => String(objectView(value, accessor));

  const props = {
    value,
    onChange,
    disabled
  };

  if (multiple) {
    Object.defineProperty(props, 'multiple', { value: true, enumerable: true });
  }

  return (
    <Combobox {...props}>
      <div className="relative mt-1">
        <Title setQuery={setQuery} displayValueFn={displayValueFn} placeholder={placeholder} />
        <OptionsList multiple={multiple} list={filteredList} value={value} accessor={accessor} setQuery={setQuery} query={query} />
      </div>
      {multiple && <SelectedList value={value as T[]} accessor={accessor} list={filteredList} onChange={onChange} />}
    </Combobox>
  );
}
