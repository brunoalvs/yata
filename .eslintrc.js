module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    'react': {
      'version': 'detect'
    }
  },
  rules: {
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
  },
  ignorePatterns: ['node_modules/', '.next/', 'public/', 'next-env.d.ts', 'next.config.js'],
}
