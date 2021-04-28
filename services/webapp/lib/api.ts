/* eslint-disable @typescript-eslint/no-explicit-any */
type QueryOption = Omit<RequestInit, 'method'>;
type BodyOption = Omit<RequestInit, 'method' | 'body'>;
type JSONBody = {
  [key: string]: any;
};

type CallType = 'front' | 'server';
type ToolOptions = {
  pure?: boolean;
  host?: string;
};
interface QueryOptions {
  cookie?: string | undefined;
  api?: QueryOption;
  tool?: ToolOptions;
}
interface BodyOptions {
  cookie?: string | undefined;
  api?: BodyOption;
  tool?: ToolOptions;
}

interface QueryStrings {
  [key: string]: any;
}

export interface BaseResponse {
  [key: string]: any;
}

export const getQs = (qo: QueryStrings | null) => {
  let queryString = '';
  const qsarr = [];

  if (!qo) {
    return '';
  }

  for (const k in qo) {
    qsarr.push(`${k}=${encodeURIComponent(qo[k])}`);
  }

  if (qsarr.length > 0) {
    queryString = `?${qsarr.join('&')}`;
  }

  return queryString;
};

export const api = (function () {
  const getHost = (type: CallType) =>
    type === 'server' ? (process.env.API_URL_IN_SERVER as string) : 'http://localhost:7070/api/';
  const resolve = (url: string) => url.replace(/(\w)[/]{2,}(\w)/g, '$1/$2').replace(/\/$/, '');
  const apiurl = (hostAndPrefix: string, u: string) => resolve(`${hostAndPrefix}/${u}`);

  const makeRequestWithoutBody = (method: 'GET' | 'DELETE', type: CallType) => {
    const host = getHost(type);

    return async function <ResponseType = BaseResponse>(
      url: string,
      queryStrings: QueryStrings | null,
      options?: QueryOptions
    ): Promise<ResponseType> {
      const qs = getQs(queryStrings);

      const opts = options || {};
      const apiOptions = opts.api || {};
      const toolOptions = opts.tool || {};

      const opt = {
        method,
        ...apiOptions,
        headers: {
          ...Object.assign(
            {},
            apiOptions.headers,
            options?.cookie ? { Cookie: options?.cookie } : {}
          ),
        },
      };

      try {
        const response = await fetch(`${apiurl(toolOptions.host || host, url)}${qs}`, opt);

        if (toolOptions.pure) {
          return (response as unknown) as ResponseType;
        }

        const json = await response.json();

        return json;
      } catch (error) {
        return Promise.reject();
      }
    };
  };

  const makeRequestWithBody = (method: 'POST' | 'PUT', original: boolean, type: CallType) => {
    const host = getHost(type);

    return async <ResponseType = BaseResponse>(
      url: string,
      body: JSONBody | RequestInit['body'],
      options?: BodyOptions
    ): Promise<ResponseType> => {
      const opts = options || {};
      const apiOptions = opts.api || {};
      const toolOptions = opts.tool || {};

      const opt = {
        method,
        ...apiOptions,
        headers: {
          ...Object.assign(
            {},
            apiOptions.headers,
            options?.cookie ? { Cookie: options?.cookie } : {}
          ),
        },
      };

      if (!original) {
        Object.assign(opt, {
          headers: { 'Content-Type': 'application/json', ...apiOptions.headers },
          body: JSON.stringify(body),
        });
      } else {
        Object.assign(opt, { body });
      }

      try {
        const response = await fetch(apiurl(toolOptions.host || host, url), opt);

        if (toolOptions.pure) {
          return (response as unknown) as ResponseType;
        }

        const json = await response.json();

        return json;
      } catch (error) {
        return Promise.reject();
      }
    };
  };

  return {
    apiurl,
    s: {
      get: makeRequestWithoutBody('GET', 'server'),
      delete: makeRequestWithoutBody('DELETE', 'server'),
      post: makeRequestWithBody('POST', false, 'server'),
      postOriginal: makeRequestWithBody('POST', true, 'server'),
      put: makeRequestWithBody('PUT', false, 'server'),
      putOriginal: makeRequestWithBody('PUT', true, 'server'),
    },
    f: {
      get: makeRequestWithoutBody('GET', 'front'),
      delete: makeRequestWithoutBody('DELETE', 'front'),
      post: makeRequestWithBody('POST', false, 'front'),
      postOriginal: makeRequestWithBody('POST', true, 'front'),
      put: makeRequestWithBody('PUT', false, 'front'),
      putOriginal: makeRequestWithBody('PUT', true, 'front'),
    },
  };
})();
