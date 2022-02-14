import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import ClientCaptcha from '../index'

jest.fn('../helpers', () => ({
  generateCanvas: jest.fn(),
  generateCode: jest.fn()
}))

const defaultProps = {
  captchaCode: jest.fn()
}

describe('ClientCaptcha', () => {
  it('Should have a default export', () => {
    expect(typeof ClientCaptcha).toBe('object')
  })

  describe('Render', () => {
    it('Should render the ClientCaptcha', () => {
      const { container } = render(<ClientCaptcha {...defaultProps} />)

      expect(container).toMatchSnapshot()
    })
  })

  describe('refresh button', () => {
    it('Should call captchaCode function on refresh', () => {
      render(<ClientCaptcha {...defaultProps} />)
      fireEvent.click(screen.getByTestId('refreshButton'))
      expect(defaultProps.captchaCode).toHaveBeenCalled()
    })

    it('Should not be shown when props if false', () => {
      render(<ClientCaptcha {...defaultProps} refreshButton={false} />)
      expect(screen.queryByTestId('refreshButton')).toBeNull()
    })
  })
})
