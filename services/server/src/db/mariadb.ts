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
        pingConnection.ping()
          .then(() => console.info('🗄️    Database has been connected!'))
          .catch(() => console.error('🗄️    Connecting to the database failed!'))
          .finally(() => pingConnection.release());
      }
    }

    return Promise.resolve();
  };

  const query = (query: string) => {
    if (guardPool(pool)) {
      return pool.query(query);
    }

    return Promise.resolve({ success: false });
  };

  return {
    init,
    query,
  };
})();

export default db;
