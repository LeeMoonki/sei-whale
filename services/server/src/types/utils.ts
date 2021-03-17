import http from 'http';
import http2 from 'http2';
import https from 'https';
// import { Server, IncomingMessage, ServerResponse } from 'http';

// refrence : https://github.com/fastify/fastify/blob/master/types/utils.d.ts
export type RawServerBase = http.Server | https.Server | http2.Http2Server | http2.Http2SecureServer
export type RawServerDefault = http.Server

/**
 * The default request type based on the server type. Utilizes generic constraining.
 *
 */
export type RawRequestDefaultExpression<
  RawServer extends RawServerBase = RawServerDefault
> = RawServer extends http.Server | https.Server ? http.IncomingMessage
  : RawServer extends http2.Http2Server | http2.Http2SecureServer ? http2.Http2ServerRequest
    : never

/**
 * The default reply type based on the server type. Utilizes generic constraining.
 */
export type RawReplyDefaultExpression<
  RawServer extends RawServerBase = RawServerDefault
> = RawServer extends http.Server | https.Server ? http.ServerResponse
  : RawServer extends http2.Http2Server | http2.Http2SecureServer ? http2.Http2ServerResponse
    : never
