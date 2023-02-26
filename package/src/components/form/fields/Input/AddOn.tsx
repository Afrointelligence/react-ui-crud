import React, { ReactElement } from 'react';

interface Props {
  inline?: boolean;
  content?: ReactElement | string;
}
function AddOn({ inline, content }: Props) {
  if (!content) {
    return null;
  }
  return (
    <div
      className={`flex items-center rounded-l-md pl-3 pr-1 sm:text-sm text-gray-500 ${
        inline ? '' : 'border-r border-gray-300 bg-gray-50'
      }`}
    >
      {content}
    </div>
  );
}

export default AddOn;
