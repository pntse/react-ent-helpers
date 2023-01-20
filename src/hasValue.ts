import { getValue } from './getValue';

export const hasValue = (obj: any, path: string): boolean => {
  const value = getValue(obj, path);
  return value == null ? false : true;
};
