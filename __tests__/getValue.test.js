import { getValue } from '../index';

describe('getValue', () => {
  test('getValue should return value in object of path input when provided', () => {
    const item = {
      foo: {
        bar: [1, 2, 3]
      }
    };

    const expected = [1, 2, 3];
    const results = getValue(item, 'foo.bar', []);

    expect(results).toStrictEqual(expected);
  });

  test('getValue should return default value when object does not match of path input', () => {
    const item = {
      foo: {
        bar: [1, 2, 3]
      }
    };

    const expected = [];
    const results = getValue(item, 'foo.bar.foobar', []);

    expect(results).toStrictEqual(expected);
  });
});
