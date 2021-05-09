/** cookie를 객체로 파싱 */
export const convertStringToProperValue = (str: string) => {
  const num = Number(str);
  if (!isNaN(num)) {
    return num;
  } else {
    switch (str) {
      case 'true':
        return true;
      case 'false':
        return false;
      case 'null':
        return null;
      case 'undefined':
        return undefined;
    }

    return NaN;
  }
};

export const parseCookieString = (cookie: string) => {
  const result: { [key: string]: any } = {};
  cookie
    .split(';')
    .map((kv) => kv.trim().split('='))
    .forEach(([k, v]) => (result[k] = convertStringToProperValue(v)));

  return result;
};
