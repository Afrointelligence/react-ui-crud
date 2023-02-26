import React, { ReactElement } from 'react';
import { useFormContext } from '../../FormProvider';

interface Props {
  children: ReactElement | ReactElement[];
  name: string;
  className?: string;
  style?: any;
}
function InputContainer({ children, name, className, style }: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={`rounded-md flex shadow-md sm:text-sm ${className ?? ''} ${
        errors[name] ? 'border border-red-500' : ''
      } `}
      style={style}
    >
      {children}
    </div>
  );
}

export default InputContainer;
