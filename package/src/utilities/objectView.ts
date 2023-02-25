import _ from 'lodash';
import { type Accessor } from './AccessorTypes';

export function objectView<T>(
  object: T,
  accessor?: Accessor<T>
): string | JSX.Element {
  if (!object) {
    return '';
  }
  if (!accessor) {
    return String(object);
  }
  if (typeof accessor === 'string') {
    return _.get(object, accessor);
  }

  if (typeof accessor === 'function') {
    return accessor(object);
  }

  return String(object);
}
