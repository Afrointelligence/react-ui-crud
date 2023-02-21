import { objectView } from './objectView';
import { type Accessor } from './AccessorTypes';

export function getSortFunction<T>(accessor?: Accessor<T>) {
  return (item1: T, item2: T) => {
    const option1 = objectView(item1, accessor);
    const option2 = objectView(item2, accessor);

    if (option1 > option2) {
      return 1;
    }

    if (option1 < option2) {
      return -1;
    }

    return 0;
  };
}
