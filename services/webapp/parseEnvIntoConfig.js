const { writeFileSync } = require('fs');

const envs = require('dotenv').config().parsed;

writeFileSync(
  'config.ts',
  Object.entries(envs)
    .map((kv) => `export const ${kv.join(" = '")}';`)
    .join('\n') + '\n',
  (err) => {
    throw new Error(err);
  }
);
