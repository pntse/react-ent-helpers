import { get } from './get';

export const has = (obj, path) => {
  const value = get(obj, path);
  return value == null ? false : true;
};
