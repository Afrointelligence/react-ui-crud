import React, { ReactElement } from 'react';

interface Props {
  content?: ReactElement | string;
}

function TailingIcon({ content }: Props) {
  if (!content) {
    return null;
  }
  return (
    <div className="pointer-events-none flex items-center pr-3">{content}</div>
  );
}

export default TailingIcon;
