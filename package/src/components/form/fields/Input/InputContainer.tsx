import React, { ReactElement } from 'react';
import { useFormContext } from '../../FormProvider';

interface Props {
  children: ReactElement | ReactElement[];
  name: string;
  className?: string;
  errorClassName?: string;
  style?: any;
}
function InputContainer({
  children,
  name,
  className,
  errorClassName,
  style,
}: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  const customClass =
    className ??
    'rounded-md shadow-md sm:text-sm focus:border focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300';
  const errorClass =
    errorClassName ?? 'border border-red-500 rounded-md shadow-md sm:text-sm';
  return (
    <div
      className={`flex ${errors[name] ? errorClass : customClass} `}
      style={style}
    >
      {children}
    </div>
  );
}

export default InputContainer;
