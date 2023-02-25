import { Controller, type RegisterOptions, useWatch } from 'react-hook-form';
import React, { type ReactElement, useEffect, useState } from 'react';
import { type Accessor, objectView } from '../../../../utilities';
import { useFormContext } from '../../FormProvider';
import ComboBoxElement from './ComboBox/ComboBoxElement';
import getKey from '../../../../utilities/getKey';
import ListBoxElement from './ListBox/ListBoxElement';
import _ from 'lodash';

type selectType = 'native' | 'list' | 'combo';
interface Props<T> {
  placeholder?: string;
  name: string;
  rules?: RegisterOptions;
  accessor?: Accessor<T>;
  getList?: () => Promise<T[]> | T[];
  list?: T[];
  disabled?: boolean;
  multiple?: boolean;
  className?: string;
  onChange?: any;
  type?: selectType;
}

export function SelectField<T>({
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
  type = 'list',
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
  const { control } = useFormContext();
  const value = useWatch({
    control,
    name,
    defaultValue: multiple ? [] : undefined,
  });

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
        render={({ field: { onChange: onFieldChange } }) => {
          if (type === 'combo') {
            return (
              <ComboBoxElement
                {...newProps}
                onChange={(data: any) => {
                  onFieldChange(data);
                  if (typeof onChange === 'function') {
                    onChange(data);
                  }
                }}
              />
            );
          }
          if (type === 'native') {
            return (
              <select
                {...props}
                className="w-full py-0 outline-none border-none text-gray-700"
                value={list.findIndex((item) => _.isEqual(item, value))}
                disabled={disabled}
                placeholder={placeholder}
                onChange={(event: any) => {
                  const data = list[event.target.value];
                  onFieldChange(data);
                  if (typeof onChange === 'function') {
                    onChange(data);
                  }
                }}
              >
                <option>{placeholder ?? ''}</option>
                {list.map((option, index) => (
                  <option value={index} key={getKey()}>
                    {objectView(option, accessor)}
                  </option>
                ))}
              </select>
            );
          }
          return (
            <ListBoxElement
              {...newProps}
              onChange={(data: any) => {
                onFieldChange(data);
                if (typeof onChange === 'function') {
                  onChange(data);
                }
              }}
            />
          );
        }}
      />
    </>
  );
}
