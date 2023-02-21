import { Controller, type RegisterOptions } from 'react-hook-form';
import React, { type ReactElement } from 'react';
import { FieldFooter } from '../../FieldFooter';
import { ComboBoxMultipleElement } from './ComboBoxMultiple.element';
import { type Accessor } from '../../../../../utilities';
import { useFormContext } from '../../../FormProvider';

interface Props<T> {
  label?: string;
  placeholder?: string;
  name: string;
  rules?: RegisterOptions;
  accessor?: Accessor<T>;
  getList: any;
  disabled?: boolean;
  actionButton?: JSX.Element | null;
  onSelectedItemClicked?: any;
}

export function ComboBoxMultipleField<T>({
  label,
  accessor,
  actionButton,
  disabled,
  getList,
  name,
  placeholder,
  onSelectedItemClicked,
  rules = {},
  ...props
}: Props<T>): ReactElement {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const selected = watch(name);

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange } }) => (
          <ComboBoxMultipleElement
            {...props}
            accessor={accessor}
            actionButton={actionButton}
            getList={getList}
            error={!!errors[name]}
            required={!!rules?.required}
            value={selected || []}
            disabled={disabled}
            label={label}
            onSelectedItemClicked={onSelectedItemClicked}
            placeholder={placeholder}
            onChange={(data: any) => {
              onChange(data);
            }}
          />
        )}
      />
      <FieldFooter name={name} label={label} />
    </>
  );
}
