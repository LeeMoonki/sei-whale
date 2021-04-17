module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVerseion: 8,
  },
  env: {
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
