export const removeNonNumericChars = (value: string): string =>
  value.replace(/\D/g, '');
