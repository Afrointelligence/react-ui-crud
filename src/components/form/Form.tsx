import React, { type ReactElement, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { FormProvider } from './FormProvider';

interface Props<T> {
  children: ReactNode;
  onSubmit: (data: T) => Promise<void> | void;
}
export function Form<T>({ children, onSubmit }: Props<T>): ReactElement {
  const form = useForm();
  return (
    <FormProvider {...form} onSubmit={onSubmit}>
      {children}
    </FormProvider>
  );
}
