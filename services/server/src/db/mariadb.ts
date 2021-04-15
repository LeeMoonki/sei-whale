import mariadb, { Pool } from 'mariadb';

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

  return {
    init,
    hasPool,
    conn,
    query,
    activeConnections,
    totalConnections
  };
})();

export default db;
