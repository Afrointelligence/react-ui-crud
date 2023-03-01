import React, { type FC, type ReactElement } from 'react';
import { useForm, type UseFormReturn } from 'react-hook-form';
import { FormProvider } from './FormProvider';

interface Props<T> {
  children: FC<UseFormReturn> | JSX.Element | (JSX.Element | JSX.Element[])[];
  onSubmit: (data: T) => Promise<void> | void;
  className?: string;
}
export function Form<T>({
  children,
  onSubmit,
  className,
}: Props<T>): ReactElement {
  const form = useForm();
  return (
    <div className={className}>
      <FormProvider {...form} onSubmit={onSubmit}>
        {typeof children === 'function' ? children(form) : children}
      </FormProvider>
    </div>
  );
}
