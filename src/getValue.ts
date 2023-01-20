export const getValue = (obj: any, path: string, defaultValue: any = null) => {
  return path.split('.').reduce((a: Object, c: string) => {
    return a != null &&
      typeof a != 'undefined' &&
      a[c as keyof Object] != null &&
      typeof a[c as keyof Object] != 'undefined'
      ? a[c as keyof Object]
      : defaultValue != null
      ? defaultValue
      : null;
  }, obj);
};
