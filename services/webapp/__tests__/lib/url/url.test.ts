import { url, getQueryString } from '../../../lib/url';

const mockUrl = 'http://someurl:8080';

// jest.mock은 반드시 global 환경에서 실행해줍니다.
jest.mock('../../../config', () => ({
  HOST: 'http://someurl:8080',
}));

describe('url을 다루는 라이브러리를 확인합니다.', () => {
  it('url에 path를 추가합니다.', () => {
    expect(url()).toBe(mockUrl);
    expect(url('/path')).toBe(mockUrl + '/path');
  });

  it('url에 query string을 추가합니다.', () => {
    const queryStringObject = { a: 10 };
    const queryString = getQueryString(queryStringObject);
    expect(url('/path', queryStringObject)).toBe(mockUrl + '/path' + queryString);
  });
});
