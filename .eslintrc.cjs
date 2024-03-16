module.exports = {
  extends: ['plugin:astro/recommended'],
  plugins: ['import'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              'index',
              'sibling',
              'parent',
              'internal',
              'external',
              'builtin',
            ],
          },
        ],
      },
    },
    // ...
  ],
};
