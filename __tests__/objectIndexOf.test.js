import { objectIndexOf } from '../index';

describe('objectIndexOf', () => {
  test('objectIndexOf should return the index of the second param within the first param', () => {
    const indexObj = { 2: 'two' };
    const initial = { arrOne: [1.40005, { 2: 'two' }, 3] };

    const expected = -1;
    const results = objectIndexOf(initial, indexObj);

    expect(results).toBe(expected);
  });
});
