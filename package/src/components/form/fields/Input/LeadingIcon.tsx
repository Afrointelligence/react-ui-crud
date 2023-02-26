import React, { ReactElement } from 'react';

interface Props {
  content?: ReactElement | string;
}

function LeadingIcon({ content }: Props) {
  if (!content) {
    return null;
  }
  return (
    <div className="pl-2 pointer-events-none flex items-center">{content}</div>
  );
}

export default LeadingIcon;
