import { type RegisterOptions } from 'react-hook-form';
import { TimeElement } from './TimeElement';
import { FieldFooter } from '../FieldFooter';
import { type ReactElement } from 'react';
import React from 'react';
import { useFormContext } from '../../FormProvider';

interface Props {
  label?: string;
  className?: string;
  name: string;
  rules?: RegisterOptions;
  disabled?: boolean;
}
export function TimeField({
  label,
  name,
  className,
  rules = {},
  ...props
}: Props): ReactElement {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { ref, onChange, ...propsDown } = register(name, rules);
  return (
    <div className={`field ${className ?? ''}`}>
      <TimeElement
        {...props}
        onChange={(e: any) => {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          setValue(name, `${e.target.value}:00.000`);
        }}
        required={!!rules?.required}
        error={!!errors[name]}
        label={label}
        className={`border-none rounded py-1.5 ${className ?? ''}`}
        inputRef={ref}
        {...propsDown}
      />
      <FieldFooter name={name} label={label} />
    </div>
  );
}
