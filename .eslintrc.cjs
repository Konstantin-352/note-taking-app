/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/order-in-components': [
      'error',
      {
        order: [
          'name',
          'directives',
          'components',
          'mixins',
          ['provide', 'inject'],
          'model',
          'props',
          'filters',
          'data',
          'computed',
          'watch',
          'methods',
          'LIFECYCLE_HOOKS',
          'ROUTER_GUARDS',
        ],
      },
    ],
    'vue/v-for-delimiter-style': ['error', 'of'],
    'vue/next-tick-style': ['error', 'promise'],
    'vue/require-prop-types': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/this-in-template': ['error', 'never'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/no-multi-spaces': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/v-bind-style': 'error',
    'vue/v-slot-style': ['error', 'shorthand'],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup'],
        ignorePublicMembers: true,
      },
    ],
    'no-debugger': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
  }
}
