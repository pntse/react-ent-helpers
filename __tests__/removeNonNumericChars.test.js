import { removeNonNumericChars } from '../index';

describe('removeNonNumbericChars', () => {
  test('removeNonNumericChars should return a string that only contains digits', () => {
    const initial = 'D32c492D-3889-42e2-B3FD-C55E6d20F47f';

    const expected = '32492388942235562047';
    const results = removeNonNumericChars(initial);

    expect(results).toStrictEqual(expected);
  });
});
