import { getQs } from '../../lib/api';

test('getQs', () => {
  expect(getQs({ a: 10, b: 20 })).toBe('?a=10&b=20');
});
