import { objectIndexOf } from './objectIndexOf';

export const removeDuplicates = (arr: Array<any>): Array<any> => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const index = objectIndexOf(newArr, arr[i]);
    if (index === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};
