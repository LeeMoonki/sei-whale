import { getQueryString } from '../../../lib/url';

test('getQueryString', () => {
  expect(getQueryString()).toBe('');
  expect(getQueryString({})).toBe('');
  expect(getQueryString(null)).toBe('');

  expect(getQueryString({ a: 10, b: 20 })).toBe('?a=10&b=20');
  expect(getQueryString({ a: 10, b: undefined })).toBe('?a=10');
  expect(getQueryString({ a: 10, b: '한글' })).toBe(`?a=10&b=${encodeURIComponent('한글')}`);
});
