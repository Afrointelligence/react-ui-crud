import React, { type ReactElement } from 'react';
import { useFormContext } from '../FormProvider';

interface Props {
  name: string;
  description?: string;
  label?: string;
}

export function FieldFooter({
  name,
  label = '',
  description = '',
}: Props): ReactElement {
  const {
    formState: { errors },
  } = useFormContext();

  function getErrorMessage({ type, message }: any): string {
    if (message) {
      return String(message);
    }

    return `"${label ?? name}" failed rule : ${String(type)}`;
  }

  if (errors[`${name}`] != null) {
    return (
      <p className="text-danger mt-2 text-sm">
        {getErrorMessage(errors[`${name}`])}
      </p>
    );
  }

  if (description) {
    return <p className="mt-2 text-sm">{description}</p>;
  }

  return <p className="mt-2">&nbsp;</p>;
}
