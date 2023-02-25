import React, { type ReactElement } from 'react';
import { useFormContext } from './FormProvider';
import { type FieldValues } from 'react-hook-form';

interface Props {
  label: string;
  className?: string;
  beforeSubmitCallBack?: (data: FieldValues) => void;
  afterSubmitCallBack?: (data: FieldValues) => void;
}
export function SubmitButton({
  label,
  beforeSubmitCallBack,
  afterSubmitCallBack,
  className,
}: Props): ReactElement {
  const { onSubmit, handleSubmit } = useFormContext();
  async function onClick(data: FieldValues): Promise<void> {
    if (typeof beforeSubmitCallBack === 'function') {
      beforeSubmitCallBack(data);
    }

    await onSubmit(data);

    if (typeof afterSubmitCallBack === 'function') {
      afterSubmitCallBack(data);
    }
  }
  return (
    <button
      className={`px-3 py-1 block w-full border rounded-md ${className ?? ''}`}
      onClick={handleSubmit(onClick)}
    >
      {label}
    </button>
  );
}
