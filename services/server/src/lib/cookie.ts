/** cookie를 객체로 파싱 */
export const parse = (cookie: string) => {
  const result: { [key: string]: string } = {};
  cookie
    .split(';')
    .map((kv) => kv.trim().split('='))
    .forEach(([k, v]) => (result[k] = v));

  return result;
};
