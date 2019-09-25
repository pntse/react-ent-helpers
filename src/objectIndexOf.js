import Compare from './Compare';

/**
 * Returns an object's index in an array of objects.
 *
 * @param {array} arr
 * @param {object} obj
 */
export const objectIndexOf = (arr, obj) => {
  for (let i = 0; i < arr.length; i++) {
    if (Compare.deepCompare(arr[i], obj).isEqual) {
      return i;
    }
  }

  return -1;
};
