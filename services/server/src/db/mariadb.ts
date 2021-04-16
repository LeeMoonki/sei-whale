import mariadb, { Pool, PoolConnection } from 'mariadb';

export interface ConnAsyncParams {
  connCallback: (conn: PoolConnection) => void;
  catch: (error: any) => void;
  finally?: () => void;
}

const db = (function() {
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
        pingConnection.ping()
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
    return Promise.reject(); // error code table 필요
  };

  const connAsync = async ({ connCallback, catch: catchCallback, finally: finallyCallback }: ConnAsyncParams) => {
    if (guardPool(pool)) {
      const conn = await pool.getConnection();

      try {
        return await connCallback(conn);
      } catch (error) {
        return await catchCallback(error);
      } finally {
        conn.release();
        finallyCallback && finallyCallback();
      }

    }
    return Promise.reject(); // error code table 필요
  };

  return {
    init,
    hasPool,
    conn,
    connAsync,
    query,
    activeConnections,
    totalConnections
  };
})();

export default db;
