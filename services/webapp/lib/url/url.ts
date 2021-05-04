import { HOST } from '../../config';
import { getQueryString, QueryStrings } from './queryString';

export function url(path?: string, queryStringObject?: QueryStrings) {
  return (path ? (HOST as string) + path : HOST) + getQueryString(queryStringObject);
}
