import _ from 'lodash';

const getSelected = <T>(item: T, value: T | T[], multiple?: boolean): boolean => {
  if (multiple) {
    return !!(value as T[]).find((ii) => _.isEqual(item, ii));
  }
  return _.isEqual(item, value);
};
export default getSelected;
