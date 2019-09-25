import { uuid } from '../index';

describe('uuid', () => {
  test('uuid should return a unique universal id', () => {
    const expected = new RegExp(/[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-4[a-zA-Z0-9]{3}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}/gi);
    const results = uuid();

    expect(results).toMatch(expected);
  });
});
