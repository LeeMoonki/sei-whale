/* eslint-disable @typescript-eslint/no-explicit-any */
export interface QueryStrings {
  [key: string]: any;
}

export const getQueryString = (qo?: QueryStrings | null) => {
  let queryString = '';
  const qsarr = [];

  if (!qo) {
    return '';
  }

  for (const k in qo) {
    if (qo[k] !== undefined) {
      qsarr.push(`${k}=${encodeURIComponent(qo[k])}`);
    }
  }

  if (qsarr.length > 0) {
    queryString = `?${qsarr.join('&')}`;
  }

  return queryString;
};
