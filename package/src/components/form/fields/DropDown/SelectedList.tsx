import React, { type ReactElement } from 'react';
import getKey from '../../../../utilities/getKey';
import { type Accessor, objectView } from '../../../../utilities';
import { MinusCircleIcon } from '@heroicons/react/24/outline';
import _ from 'lodash';

interface Props<T> {
  accessor?: Accessor<T>;
  value: T[];
  list: T[];
  onChange: any;
}

function SelectedList<T>({ value, accessor, onChange }: Props<T>): ReactElement {
  return (
    <div>
      {value.map((item) => (
        <div key={getKey()} className="flex items-center mt-3">
          <span
            className="inline-block h-1 w-1 flex-shrink-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          <div
            className="w-5/6 grow ml-2"
          >
            <div className="text-sm font-medium text-gray-500 hover:text-primary truncate cursor-pointer">
              {objectView(item, accessor)}
            </div>
          </div>
          <div className="ml-2">
            <MinusCircleIcon
              onClick={() => {
                onChange(value?.filter((item2) => !_.isEqual(item2, item)));
              }}
              className="h-4 w-4 text-danger cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectedList;
