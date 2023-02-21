import { Controller, type RegisterOptions, useWatch } from 'react-hook-form';
import React, { type ReactElement } from 'react';
import { FieldFooter } from '../../FieldFooter';
import { ComboBoxElement } from './ComboBox.element';
import { type Accessor } from '../../../../../utilities';
import { useFormContext } from '../../../FormProvider';

interface Props<T> {
  label?: string;
  placeholder?: string;
  name: string;
  rules?: RegisterOptions;
  accessor?: Accessor<T>;
  getList: (s: string) => Promise<T[]>;
  disabled?: boolean;
  className?: string;
  onChange?: any;
}

export function ComboBoxField<T>({
  label,
  accessor,
  disabled,
  getList,
  name,
  placeholder,
  className,
  onChange,
  rules = {},
  ...props
}: Props<T>): ReactElement {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const selected = useWatch({ control, name });

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange: onFieldChange } }) => (
          <ComboBoxElement
            {...props}
            accessor={accessor}
            getList={getList}
            error={!!errors[name]}
            required={!!rules?.required}
            value={selected}
            disabled={disabled}
            label={label}
            placeholder={placeholder}
            onChange={(data: any) => {
              onFieldChange(data);
              if (typeof onChange === 'function') {
                onChange(data);
              }
            }}
          />
        )}
      />
      <FieldFooter name={name} label={label} />
    </>
  );
}
