import React, { type ReactElement } from 'react';

interface Props {
  inputRef?: any;
  onChange?: any;
  className?: string;
  required?: boolean;
  error?: boolean;
  label?: string | JSX.Element;
  [x: string]: any;
}
export function TimeElement({
  onChange,
  className,
  inputRef,
  label,
  required,
  error,
  ...props
}: Props): ReactElement {
  return (
    <div>
      <div
        className={`block text-sm font-medium ${
          error ? 'text-danger' : 'text-gray-700'
        }`}
      >
        {label}
        {required && <strong className="text-danger"> * </strong>}
      </div>
      <div className="border border-mute rounded flex w-full">
        {' '}
        <input
          {...props}
          ref={inputRef}
          type="time"
          onChange={onChange}
          className={`w-full py-1 outline-none ${className ?? ''}`}
        />
      </div>
    </div>
  );
}
