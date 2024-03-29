# react-client-captcha

[![npm version](https://img.shields.io/npm/v/react-client-captcha.svg)](https://www.npmjs.com/package/react-client-captcha)
![Codecov](https://img.shields.io/codecov/c/github/majid-amiri/react-client-captcha?token=fa410599316a4368b4ecdb828baf6cbb)
[![Build Status](https://travis-ci.org/majid-amiri/react-client-captcha.svg?branch=master)](https://travis-ci.org/majid-amiri/react-client-captcha)

![](https://raw.githubusercontent.com/majid-amiri/react-client-captcha/master/react-client-captcha.png)

A light JS-based captcha generator.

- Custom characters.
- Retry functionality.
- Easily customizable via props.

[Documentation](https://majid-amiri.github.io/react-client-captcha/)

## Installation

```
npm install react-client-captcha --save
or
yarn add react-client-captcha
```

## Usage

[![Edit react-client-captcha](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/stoic-noyce-fnkkq)

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import ClientCaptcha from 'react-client-captcha'

export default class App extends React.Component {
  render() {
    return <ClientCaptcha captchaCode={(code) => console.log(code)} />
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
```

## Props

<!-- --begin-insert-props-- -->
### ClientCaptcha

|Name|Description|Type|Default|
|---|---|---|---|
|backgroundColor|backgroundColor of captcha image.|`string`|`'#F2F2F2'`|
|captchaClassName|className of captcha image|`string`|`''`|
|captchaCode|function that returns current shown captcha code.|`func`|`() => {}`|
|chars|characters that captcha should be made with.|`string`|`'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'`|
|charsCount|count of characters that captcha should be made with.|`number`|`4`|
|containerClassName|className of captcha and retry button container div|`string`|`styles.captchaContainer`|
|font|the font property for canvas. if set, none of the fontFamily, fontSize and font Style would work.|`string`|`null`|
|fontColor|fontColor of captcha characters.|`string`|`'#000'`|
|fontFamily|fontFamily of captcha characters.|`string`|`'Arial, Tahoma'`|
|fontSize|fontSize of captcha characters.|`number`|`22`|
|fontStyle|fontStyle of captcha characters.|`string`|`'normal'`|
|height|height of captcha image.|`number`|`40`|
|refreshButton|whether there is a refresh button by default|`bool`|`true`|
|refreshButtonClassName|className of refresh button|`string`|`styles.retryButton`|
|refreshButtonIcon|the icon of refresh button|`string`|`'https://cdn.jsdelivr.net/npm/react-client-captcha/dist/retry.svg'`|
|refreshButtonIconClassName|className of refresh button icon|`string`|`''`|
|refreshButtonIconSize|size of refresh button icon|`number`|`24`|
|width|width of captcha image.|`number`|`100`|
<!-- --end-insert-props-- -->

## Tests

Clone the project and run `yarn test`

## License

MIT © [Majid Amiri](https://github.com/majid-amiri/)
