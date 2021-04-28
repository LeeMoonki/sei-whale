import { parse } from '../../src/lib/cookie';

test('parse', () => {
  expect(parse('a=10;b=20')).toEqual({ a: '10', b: '20' });
});
