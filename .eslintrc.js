module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended'
  ],
  'overrides': [],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'settings': { 'react': { 'version': 'detect' } },
  'plugins': [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-curly-newline': ['error', { 'multiline': true }],
    'arrow-body-style': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/self-closing-comp': ['error', { 'component': true, 'html': true }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        'closingSlash': 'never',
        'beforeSelfClosing': 'always',
        'afterOpening': 'never',
        'beforeClosing': 'never'
      }
    ],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'react/no-unescaped-entities': 'off',
    'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-curly-spacing': [
      'error',
      {
        'when': 'always',
        'children': true,
        'spacing': {
          'objectLiterals': 'never',
          'arrayBrackets': 'never'
        }
      }
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        'maximum': 1,
        'when': 'multiline'
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
  },
}
