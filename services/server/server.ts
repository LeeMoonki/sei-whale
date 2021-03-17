import app from './src/app';

const fastify = app();
const envPORT = process.env.PORT;
const PORT =
  (typeof envPORT === 'string' || typeof envPORT === 'number' ? envPORT : null)
  || 3000;

function start(port: number | string) {
  fastify.listen(port, function(err, address) {
    if (err) {
      fastify.log.error(err.message);
      process.exit(1);
    }
  });
}

start(PORT);
