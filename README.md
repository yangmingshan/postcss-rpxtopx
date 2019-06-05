# postcss-rpxtopx

一个 PostCSS 插件，用于将小程序的 rpx 单位转换为 px

## 安装

你可以通过 [yarn](https://yarnpkg.com/) 或 [npm](https://npmjs.com/) 安装

```
$ yarn add postcss-rpxtopx --dev
$ npm install postcss-rpxtopx --save-dev
```

## 使用

### 输入/输出

```css
// 输入
h1 {
  margin: 0 0 20rpx;
  font-size: 32rpx;
  line-height: 1.2;
  letter-spacing: 1rpx;
}

// 输出
h1 {
  margin: 0 0 20px;
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: 1px;
}
```

### 例子

```js
const fs = require('fs');
const postcss = require('postcss');
const rpxtopx = require('postcss-rpxtopx');
const acss = fs.readFileSync('main.acss', 'utf8');
const css = postcss(rpxtopx()).process(acss).css;

fs.writeFile('main.css', css, err => {
  if (err) {
    throw err;
  }
  console.log('Css file written.');
});
```

## 许可证

[MIT](https://opensource.org/licenses/MIT)