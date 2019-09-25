import { get } from '../index';

describe('get', () => {
  test('get should return value in object of path input when provided', () => {
    const item = {
      foo: {
        bar: [1, 2, 3]
      }
    };

    const expected = [1, 2, 3];
    const results = get(item, 'foo.bar', []);

    expect(results).toStrictEqual(expected);
  });

  test('get should return default value when object does not match of path input', () => {
    const item = {
      foo: {
        bar: [1, 2, 3]
      }
    };

    const expected = [];
    const results = get(item, 'foo.bar.foobar', []);

    expect(results).toStrictEqual(expected);
  });
});
