import { generateCanvas, generateCode } from '../helpers'

const canvasOptions = {
  backgroundColor: '#fff',
  font: 'normal 14px arial',
  fontColor: '#000',
  height: 40,
  width: 80
}

describe('helpers', () => {
  const code = generateCode('0123456789', 6)

  describe('generateCode', () => {
    it('Should return a 6 chars length captcha code', () => {
      expect(code).toHaveLength(6)
    })
    it('Should return a captcha code with characters: 0123456789', () => {
      expect(code).toMatch(/[1-9]/g)
    })
  })

  describe('generateCaptcha', () => {
    it('Should modify canvas', () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      generateCanvas(ctx, code, canvasOptions)
      expect(ctx).toBeInstanceOf(global.CanvasRenderingContext2D)
    })
  })
})
