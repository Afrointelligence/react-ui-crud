import React, { type ReactElement } from 'react';

interface Props {
  inputRef?: any;
  className?: string;
  error?: boolean;
  required?: boolean;
  label?: string | JSX.Element;
  [x: string]: any;
}
export function DateElement({
  className,
  label,
  inputRef,
  error,
  required,
  ...props
}: Props): ReactElement {
  return (
    <div className="block">
      <div
        className={`block text-sm font-medium ${
          error ? 'text-danger' : 'text-gray-700'
        }`}
      >
        {label}
        {required && <strong className="text-danger"> * </strong>}
      </div>
      <div
        className={`border border-mute rounded flex w-full focus-within:border-primary/[.9] focus-within:outline-none focus-within:ring-1 focus-within:ring-primary ${
          error ? 'border-danger' : 'border-gray-300'
        }`}
      >
        {' '}
        <input
          {...props}
          ref={inputRef}
          type="date"
          className={`w-full py-1.5 outline-none ${className || ''}`}
        />
      </div>
    </div>
  );
}
