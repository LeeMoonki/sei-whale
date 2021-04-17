import mariadb, { Pool, PoolConnection } from 'mariadb';
import { BaseError } from '../error';
import { MariadbNoPoolError } from '../error/db';

export interface ConnAsyncParams<Response> {
  connCallback: (conn: PoolConnection) => Response;
  catch: (error: BaseError) => BaseError;
  finally?: () => void;
}

const db = (function () {
  let pool: null | Pool = null;
  let pinged = false;

  const guardPool = (pool: unknown): pool is Pool => {
    return pool !== null;
  };

  const init = async () => {
    if (pool === null) {
      pool = mariadb.createPool({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '3306'),
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_DATABASE,
      });

      if (!pinged) {
        const pingConnection = await pool.getConnection();
        pinged = true;
        pingConnection
          .ping()
          .then(() => console.info('🗄️    Database has been connected!'))
          .catch(() => console.error('🗄️    Connecting to the database failed!'))
          .finally(() => pingConnection.release());
      }
    }

    return Promise.resolve();
  };

  const hasPool = () => !!pool;

  const query = (query: string | mariadb.QueryOptions, values?: any) => {
    if (guardPool(pool)) {
      return pool.query(query, values);
    }

    return Promise.resolve({ success: false });
  };

  const activeConnections = () => {
    if (guardPool(pool)) {
      return pool.activeConnections();
    }
    return 0;
  };

  const totalConnections = () => {
    if (guardPool(pool)) {
      return pool.totalConnections();
    }
    return 0;
  };

  const conn = () => {
    if (guardPool(pool)) {
      return pool.getConnection();
    }
    const error = new MariadbNoPoolError();

    console.error(error.message);

    return Promise.reject(error);
  };

  return {
    init,
    hasPool,
    conn,
    query,
    activeConnections,
    totalConnections,
  };
})();

export default db;
