module.exports = {
  extends: ['airbnb-base'],
  rules: {
    "semi": [2, "always"],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'space-before-function-paren': [2, 'always'],
    'no-underscore-dangle':0,
    'no-unused-vars':0,
    'max-params': ['error', { max: 3 }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'function-paren-newline': ['error', 'multiline'],
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'consistent-return': [0],
    'arrow-body-style': [0],
  },
}
