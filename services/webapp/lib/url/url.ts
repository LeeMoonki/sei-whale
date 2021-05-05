import { DOMAIN } from '../../config';
import { getQueryString, QueryStrings } from './queryString';

export function url(path?: string, queryStringObject?: QueryStrings) {
  return (path ? (DOMAIN as string) + path : DOMAIN) + getQueryString(queryStringObject);
}
