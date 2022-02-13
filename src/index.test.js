import React from 'react'
import { render } from '@testing-library/react'
import ClientCaptcha from '../src/index'

const defaultProps = {
  captchaCode: jest.fn()
}

const mockEvent = {
  stopPropagation: jest.fn(),
  target: {}
}

describe('Captcha', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockEvent.target = {}
  })

  it('Should have a default export', () => {
    expect(typeof ClientCaptcha).toBe('function')
  })

  describe('Render', () => {
    let wrapper

    beforeAll(() => {
      wrapper = render(<ClientCaptcha {...defaultProps} />)
    })

    afterAll(() => {
      wrapper.unmount()
    })

    it('Should render the captcha', () => {
      expect(wrapper.find(ClientCaptcha).length).toBe(1)
      expect(wrapper.find(ClientCaptcha)).toMatchSnapshot()
    })
  })

  describe('captchaCode function', () => {
    let wrapper

    beforeAll(() => {
      wrapper = render(<ClientCaptcha {...defaultProps} />)
    })

    afterAll(() => {
      wrapper.unmount()
    })

    it('Should have default captchaCode function', () => {
      expect(wrapper.props().captchaCode).toBeDefined()
    })
  })

  describe('generateCode', () => {
    let wrapper

    beforeAll(() => {
      wrapper = render(
        <ClientCaptcha {...defaultProps} charsCount={6} chars='0123456789' />
      )
    })

    afterAll(() => {
      wrapper.unmount()
    })

    it('Should return a 6 chars length captcha code', () => {
      expect(wrapper.instance().generateCode()).toHaveLength(6)
    })

    it('Should return a captcha code with characters: 0123456789', () => {
      expect(wrapper.instance().generateCode()).toMatch(/[1-9]/g)
    })
  })

  describe('generateCaptcha', () => {
    let wrapper

    beforeAll(() => {
      wrapper = render(<ClientCaptcha {...defaultProps} />)
    })

    afterAll(() => {
      wrapper.unmount()
    })

    it('Should make a code with generateCode', () => {
      expect(wrapper.instance().captchaCode).toBeTruthy()
    })

    it('Should get canvas object', () => {
      expect(
        wrapper.instance().canvasRef.current.getContext('2d')
      ).toBeInstanceOf(CanvasRenderingContext2D)
    })
  })

  describe('retryButton', () => {
    let wrapper

    beforeAll(() => {
      wrapper = render(<ClientCaptcha {...defaultProps} />)
    })

    afterAll(() => {
      wrapper.unmount()
    })

    it('Should change captcha value', () => {
      const oldCaptcha = wrapper.instance().captchaCode
      const button = wrapper.find('#retryButton')
      expect(button.length).toEqual(1)
      button.simulate('click')
      expect(wrapper.instance().captchaCode).not.toBe(oldCaptcha)
    })

    it('Should not be shown when props if false', () => {
      wrapper.setProps({ retry: false })
      expect(wrapper.find('#retryButton').length).toBe(0)
    })
  })
})
