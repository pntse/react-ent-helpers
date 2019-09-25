import { has } from '../index';

describe('has', () => {
  test('has should return true when given object contains specified field', () => {
    const item = {
      foo: {
        bar: [1, 2, 3]
      }
    };

    const expected = true;
    const results = has(item, 'foo.bar');

    expect(results).toBe(expected);
  });

  test('has should return false when given object does not contain specified field', () => {
    const item = {
      foo: {
        bar: [1, 2, 3]
      }
    };

    const expected = false;
    const results = has(item, 'foo.foobar');

    expect(results).toBe(expected);
  });
});
