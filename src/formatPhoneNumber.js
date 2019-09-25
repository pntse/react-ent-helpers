import { removeNonNumericChars } from './removeNonNumericChars';

export const formatPhoneNumber = phoneNumber => {
  phoneNumber = typeof phoneNumber === 'number' ? phoneNumber.toString() : phoneNumber;
  if (phoneNumber.length < 10) {
    console.warn('phone-number needs to be at least 10 digits long');
    return;
  }

  const strippedNumber = removeNonNumericChars(phoneNumber);
  return `(${strippedNumber.slice(0, 3)}) ${strippedNumber.slice(3, 6)}-${strippedNumber.slice(6, 10)}`;
};
