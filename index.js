'use strict';

const postcss = require('postcss');
const rpxRegex = require('./lib/rpx-unit-regex');

module.exports = postcss.plugin('postcss-rpxtopx', () => (css) => {
  css.walkDecls((decl) => {
    if (!decl.value.includes('rpx')) return;
    decl.value = decl.value.replace(rpxRegex, (m, $1) => {
      if (!$1) return m;
      return parseFloat($1) ? `${$1}px` : '0';
    });
  });
});
