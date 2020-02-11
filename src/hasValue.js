import { getValue } from './getValue';

export const hasValue = (obj, path) => {
  const value = getValue(obj, path);
  return value == null ? false : true;
};
