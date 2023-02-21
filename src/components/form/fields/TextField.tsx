import React, { type ReactElement } from 'react';
import { type RegisterOptions } from 'react-hook-form';
import { FieldFooter } from './FieldFooter';
import { useFormContext } from '../FormProvider';

interface Props {
  label?: string;
  placeholder?: string;
  className?: string;
  name: string;
  icon?: string | JSX.Element;
  rules?: RegisterOptions;
  disabled?: boolean;
  [x: string]: any;
}
export function TextField({
  label,
  name,
  placeholder,
  className,
  icon,
  rules = {},
  ...props
}: Props): ReactElement {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
        className={`border p-2 pl-4 rounded-md flex shadow-sm focus-within:border-primary/[.9] focus-within:outline-none focus-within:ring-1 focus-within:ring-primary sm:text-sm ${
          errors[name] ? 'border border-danger' : 'border-gray-300'
        }`}
      >
        {icon && icon}
        <input
          {...register(name, rules)}
          className="w-full outline-none"
          placeholder={placeholder}
          {...props}
        />
      </div>
      <FieldFooter name={name} label={label} />
    </div>
  );
}
