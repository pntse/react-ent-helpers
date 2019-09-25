import { formatPhoneNumber } from '../index';

describe('formatPhoneNumber', () => {
  test("formatPhoneNumber should return a phone number in the format of '(xxx) xxx-xxxx' when provided with a phone number", () => {
    const initial = '3178675309';

    const expected = '(317) 867-5309';
    const results = formatPhoneNumber(initial);

    expect(results).toBe(expected);
  });

  test('formatPhoneNumber should return nothing when provided with less than 10 digits', () => {
    const initial = '31786';

    const results = formatPhoneNumber(initial);

    expect(results).toBeUndefined();
  });
});
