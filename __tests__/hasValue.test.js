import { hasValue } from '../index';

describe('hasValue', () => {
  test('hasValue should return true when given object contains specified field', () => {
    const item = {
      foo: {
        bar: [1, 2, 3]
      }
    };

    const expected = true;
    const results = hasValue(item, 'foo.bar');

    expect(results).toBe(expected);
  });

  test('hasValue should return false when given object does not contain specified field', () => {
    const item = {
      foo: {
        bar: [1, 2, 3]
      }
    };

    const expected = false;
    const results = hasValue(item, 'foo.foobar');

    expect(results).toBe(expected);
  });
});
