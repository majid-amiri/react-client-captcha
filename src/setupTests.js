import 'babel-polyfill'
import 'jest-canvas-mock'
require.extensions['.svg'] = () => {}

window.scroll = jest.fn()
