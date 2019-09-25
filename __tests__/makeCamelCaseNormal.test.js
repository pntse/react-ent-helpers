import { makeCamelCaseNormal } from '../index';

describe('makeCamelCaseNormal', () => {
  test('makeCamelCaseNormal should return normal text when given a camelCase string', () => {
    const initial = 'shouldBeNormalText';

    const expected = 'Should Be Normal Text';
    const results = makeCamelCaseNormal(initial);

    expect(results).toStrictEqual(expected);
  });
});
