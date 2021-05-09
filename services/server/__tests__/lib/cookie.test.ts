import * as cookie from '../../src/lib/cookie';

test('convertStringToProperValue', () => {
  const assertionSet = [
    { received: '10', expected: 10 },
    { received: 'NaN', expected: NaN },
    { received: 'true', expected: true },
    { received: 'false', expected: false },
    { received: 'null', expected: null },
    { received: 'undefined', expected: undefined },
  ];

  for (const a of assertionSet) {
    expect(cookie.convertStringToProperValue(a.received)).toBe(a.expected);
  }
});

test('parseCookieString', () => {
  const cookieString = 'a=10;b=20;c=null;d=undefined';
  const count = cookieString.split(';').length;

  jest.spyOn(cookie, 'convertStringToProperValue');

  cookie.parseCookieString(cookieString);

  expect(cookie.convertStringToProperValue).toBeCalledTimes(count);
});
