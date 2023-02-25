import { type RegisterOptions, useWatch } from 'react-hook-form';
import React, { type ReactElement } from 'react';
import { FieldFooter } from './FieldFooter';
import { useFormContext } from '../FormProvider';

interface Props {
  label?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: number;
  name: string;
  icon?: string;
  rules?: RegisterOptions;
  disabled?: boolean;
}
export function NumberField({
  label,
  name,
  className,
  placeholder,
  defaultValue,
  icon,
  rules = {},
  ...props
}: Props): ReactElement {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const value = useWatch({ control, name, defaultValue });

  return (
    <div className={`field ${className ?? ''}`}>
      <span
        className={`block text-sm font-medium ${
          errors[name] ? 'text-danger' : ''
        }`}
      >
        {label}
        {rules?.required && <strong className="text-danger"> * </strong>}
      </span>
      <div
        className={`border rounded ${
          errors[name] ? 'border border-danger' : 'border-gray-300'
        }`}
      >
        {icon && (
          <i
            className={`fa-solid fa-${icon} p-1 ${
              !!value && value.length ? '' : 'text-mute'
            }`}
          />
        )}
        <input
          {...register(name, rules)}
          min="0"
          className="w-full rounded-md border-0 py-2 shadow-sm focus:border focus:border-primary/[.9] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
          type="number"
          {...props}
          placeholder={placeholder}
        />
      </div>
      <FieldFooter name={name} label={label} />
    </div>
  );
}
