import { deepCopy } from '../index';

describe('deepCopy', () => {
  test('deepCopy should return an exact copy of the parameter provided', () => {
    const initial = { arr1: [1, 2, 3] };

    const expected = { arr1: [1, 2, 3] };
    const results = deepCopy(initial);
    console.log('results:  ', results);

    expect(results).toStrictEqual(expected);
  });
});
