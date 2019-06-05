'use strict';

const postcss = require('postcss');
const rpxtopx = require('../index');

describe('rpxtopx', () => {
  it('should replace the rpx unit with px', () => {
    const rules = '.rule { font-size: 16rpx }';
    const expected = '.rule { font-size: 16px }';
    const processed = postcss(rpxtopx()).process(rules).css;
    expect(processed).toBe(expected);
  });

  it('should ignore non rpx properties', () => {
    const expected = '.rule { font-size: 16em }';
    const processed = postcss(rpxtopx()).process(expected).css;
    expect(processed).toBe(expected);
  });

  it('should remain unitless if 0', () => {
    const rules = '.rule { border: 0rpx; outline: 0; }';
    const expected = '.rule { border: 0; outline: 0; }';
    const processed = postcss(rpxtopx()).process(rules).css;
    expect(processed).toBe(expected);
  });
});

describe('value parsing', () => {
  it('should not replace values in double quotes or single quotes', () => {
    const rules =
      '.rule { content: \'16rpx\'; font-family: "16rpx"; font-size: 16rpx; }';
    const expected =
      '.rule { content: \'16rpx\'; font-family: "16rpx"; font-size: 16px; }';
    const processed = postcss(rpxtopx()).process(rules).css;
    expect(processed).toBe(expected);
  });

  it('should not replace values in `url()`', () => {
    const rules = '.rule { background: url(16rpx.jpg); font-size: 16rpx; }';
    const expected = '.rule { background: url(16rpx.jpg); font-size: 16px; }';
    const processed = postcss(rpxtopx()).process(rules).css;
    expect(processed).toBe(expected);
  });
});
