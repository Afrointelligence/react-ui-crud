import React, { type ReactElement } from 'react';
import { type RegisterOptions } from 'react-hook-form';
import { useFormContext } from '../../FormProvider';
import InputContainer from './InputContainer';
import LeadingIcon from './LeadingIcon';
import TailingIcon from './TailingIcon';
import AddOn from './AddOn';

interface Props {
  label?: string;
  placeholder?: string;
  className?: string;
  errorClassName?: string;
  name: string;
  icon?: string | JSX.Element;
  rules?: RegisterOptions;
  disabled?: boolean;
  addon?: ReactElement | string;
  inLineAddon?: boolean;
  leadingIcon?: ReactElement | string;
  tailingIcon?: ReactElement | string;
  [x: string]: any;
}
export function InputField({
  label,
  name,
  placeholder,
  className,
  errorClassName,
  icon,
  rules = {},
  addon,
  inLineAddon,
  leadingIcon,
  tailingIcon,
  ...props
}: Props): ReactElement {
  const { register } = useFormContext();

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <InputContainer
        className={className}
        errorClassName={errorClassName}
        name={name}
      >
        <AddOn inline={inLineAddon} content={addon} />
        <LeadingIcon content={leadingIcon} />
        <input
          {...register(name, rules)}
          className="outline-none pl-2 py-2 block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={placeholder}
          {...props}
        />
        <TailingIcon content={tailingIcon} />
      </InputContainer>
    </>
  );
}
