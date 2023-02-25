import React, { type ReactElement, type ReactNode, useContext } from 'react';
import { type UseFormReturn } from 'react-hook-form';

export interface FormContextType<T> extends UseFormReturn {
  onSubmit: (data: T) => Promise<void> | void;
}
const FormProviderContext = React.createContext<FormContextType<any>>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as FormContextType<any>
);

interface Props<T> extends FormContextType<T> {
  children: ReactNode;
}
export function FormProvider<T>({
  children,
  ...others
}: Props<T>): ReactElement {
  return (
    <FormProviderContext.Provider value={{ ...others }}>
      {children}
    </FormProviderContext.Provider>
  );
}

export function useFormContext(): FormContextType<any> {
  return useContext(FormProviderContext);
}
