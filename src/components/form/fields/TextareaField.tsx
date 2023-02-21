import { type RegisterOptions, useWatch } from 'react-hook-form';
import React, { type ReactElement } from 'react';
import { FieldFooter } from './FieldFooter';
import { useFormContext } from '../FormProvider';

interface Props {
  label?: string;
  placeholder?: string;
  className?: string;
  name: string;
  icon?: string;
  rules?: RegisterOptions;
  disabled?: boolean;
  rows?: number;
}
export function TextareaField({
  label,
  name,
  placeholder,
  className,
  icon,
  rows,
  rules = {},
  ...props
}: Props): ReactElement {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const value = useWatch({ name, control });

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
        className={`flex border rounded ${
          errors[name] ? 'border border-danger' : 'border-gray-300'
        }`}
      >
        {icon && (
          <i
            className={`fa-solid fa-${icon} p-2 ${
              !!value && value.length ? '' : 'text-mute'
            }`}
          />
        )}
        <textarea
          {...register(name, rules)}
          className="block p-2.5 w-full bg-white
            rounded border-0 focus:border focus:border-primary/[.9] focus:outline-none focus:ring-1 focus:ring-primary
          "
          rows={rows}
          {...props}
          placeholder={placeholder}
        />
      </div>
      <FieldFooter name={name} label={label} />
    </div>
  );
}
