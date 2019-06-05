const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  extends: [
    'standard',
    isProd ? 'plugin:prettier/recommended' : 'prettier',
    'prettier/standard'
  ],
  rules: {
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off'
  }
};
