import _ from 'lodash';
import React, { type ReactElement } from 'react';
import { Controller, type RegisterOptions } from 'react-hook-form';
import { type Accessor } from '../../../../utilities/AccessorTypes';
import { getSortFunction } from '../../../../utilities/ getSortFunction';
import getKey from '../../../../utilities/getKey';
import { objectView } from '../../../../utilities/objectView';
import { FieldFooter } from '../FieldFooter';
import { useFormContext } from '../../FormProvider';

interface Props<T> {
  label?: string;
  placeholder?: string;
  name: string;
  icon?: string | JSX.Element;
  rules?: RegisterOptions;
  accessor?: Accessor<T>;
  options: T[];
  disabled?: boolean;
  className?: string;
}
export function NativeSelectField<T>({
  label,
  accessor,
  disabled,
  options,
  name,
  icon,
  placeholder,
  className,
  rules = {},
  ...props
}: Props<T>): ReactElement | null {
  const {
    control,
    watch,
    setValue: setFormValue,
    formState: { errors },
  } = useFormContext();

  const selected = watch(name);
  const [value, setValue] = React.useState<string | undefined>(undefined);
  React.useEffect(() => {
    if (selected && Array.isArray(options)) {
      setValue(
        options.findIndex((option) => _.isEqual(option, selected)).toString()
      );
    }
  }, [selected]);

  if (!Array.isArray(options)) {
    return null;
  }

  options.sort(getSortFunction(accessor));

  return (
    <div className={`field ${className ?? ''}`}>
      <span className={`block ${errors[name] ? 'text-danger' : ''}`}>
        {label}
        {rules?.required && <strong className="text-danger"> * </strong>}
      </span>
      <div
        className={`border p-1 border-gray-dark rounded flex ${
          errors[name] ? 'border border-danger' : ''
        }`}
      >
        {icon && (
          <span
            className={`material-icons-round p-1 ${
              !!value && value.length ? '' : 'text-gray'
            }`}
          >
            {icon}
          </span>
        )}
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange } }) => (
            <select
              {...props}
              className="w-full py-0 outline-none border-none"
              value={`${value ?? ''}`}
              disabled={disabled}
              placeholder={placeholder}
              onChange={(event: any) => {
                onChange(options[event.target.value]);
                setFormValue(name, options[event.target.value]);
              }}
            >
              <option>{placeholder ?? ''}</option>
              {options.map((option, index) => (
                <option value={index} key={getKey()}>
                  {objectView(option, accessor)}
                </option>
              ))}
            </select>
          )}
        />
      </div>
      <FieldFooter name={name} label={label} />
    </div>
  );
}
