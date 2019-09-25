import { removeDuplicates } from '../index';

describe('removeDuplicates', () => {
  test('removeDuplicates should remove any duplicate values in an array', () => {
    const initial = [1, 2, 3, 4, 2, 4];

    const expected = [1, 2, 3, 4];
    const results = removeDuplicates(initial);

    expect(results).toStrictEqual(expected);
  });
});
