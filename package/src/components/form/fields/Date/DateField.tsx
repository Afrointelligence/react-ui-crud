import { type RegisterOptions } from 'react-hook-form';
import { DateElement } from './DateElement';
import { FieldFooter } from '../FieldFooter';
import { useFormContext } from '../../FormProvider';
import React, { type ReactElement } from 'react';

interface Props {
  label?: string;
  className?: string;
  name: string;
  rules?: RegisterOptions;
  disabled?: boolean;
}
export function DateField({
  label,
  name,
  className,
  rules = {},
  ...props
}: Props): ReactElement {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { ref, ...propsDown } = register(name, rules);
  return (
    <div className={`field ${className ?? ''}`}>
      <DateElement
        {...props}
        error={!!errors[name]}
        required={!!rules?.required}
        label={label}
        className={`border-none rounded py-1 ${className ?? ''}`}
        inputRef={ref}
        {...propsDown}
      />
      <FieldFooter name={name} label={label} />
    </div>
  );
}
