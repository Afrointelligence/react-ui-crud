import { Controller, type RegisterOptions, useWatch } from 'react-hook-form';
import React, { type ReactElement, useEffect, useState } from 'react';
import { type Accessor } from '../../../../../utilities';
import { useFormContext } from '../../../FormProvider';
import ListBoxElement from './ListBoxElement';

interface Props<T> {
  placeholder?: string;
  name: string;
  rules?: RegisterOptions;
  accessor?: Accessor<T>;
  getList?: () => (Promise<T[]> | T[]);
  list?: T[];
  disabled?: boolean;
  multiple?: boolean;
  className?: string;
  onChange?: any;
}

export function ListBoxField<T>({
  accessor,
  disabled,
  multiple,
  getList,
  list: listFromProp,
  name,
  placeholder,
  className,
  onChange,
  rules = {},
  ...props
}: Props<T>): ReactElement {
  const [list, setList] = useState(listFromProp ?? []);

  async function getAndSetList(): Promise<void> {
    if (typeof getList === 'function') {
      setList(await getList());
    }
  }
  useEffect(() => {
    void getAndSetList();
  }, []);
  const {
    control,
  } = useFormContext();
  const value = useWatch({ control, name, defaultValue: multiple ? [] : undefined });

  const newProps = {
    ...props,
    list,
    accessor,
    value,
    disabled,
    placeholder,
    multiple,
  };
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange: onFieldChange } }) => (
          <ListBoxElement {...newProps} onChange={(data: any) => {
            onFieldChange(data);
            if (typeof onChange === 'function') {
              onChange(data);
            }
          }} />
        )}
      />
    </>
  );
}
