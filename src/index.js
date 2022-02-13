import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react'
import PropTypes from 'prop-types'

import { generateCanvas, generateCode } from './helpers'
import styles from './styles.module.css'

const ClientCaptcha = forwardRef(
  (
    {
      backgroundColor,
      captchaClassName,
      captchaCode,
      chars,
      charsCount,
      containerClassName,
      font,
      fontColor,
      fontFamily,
      fontSize,
      fontStyle,
      height,
      refreshButton,
      refreshButtonClassName,
      refreshButtonIcon,
      refreshButtonIconClassName,
      refreshButtonIconSize,
      width
    },
    ref
  ) => {
    const canvasRef = useRef(ref.current)

    const generateCaptcha = () => {
      const code = generateCode(chars, charsCount)
      generateCanvas(canvasRef, code, {
        backgroundColor,
        font,
        fontSize,
        fontFamily,
        fontColor,
        fontStyle,
        height,
        width
      })
      captchaCode(code)
      return code
    }

    const resetCaptcha = (e) => {
      e.preventDefault()
      generateCaptcha()
    }

    useEffect(() => {
      generateCaptcha()
    }, [])

    useImperativeHandle(
      ref,
      () => ({
        refresh: generateCaptcha
      }),
      []
    )

    return (
      <div className={containerClassName}>
        <canvas
          width={width}
          height={height}
          ref={canvasRef}
          style={{ pointerEvents: 'none' }}
          className={captchaClassName}
        />
        {refreshButton && (
          <button
            onClick={resetCaptcha}
            id='retryButton'
            className={refreshButtonClassName}
          >
            <img
              src={refreshButtonIcon}
              alt='Re-new captcha'
              className={refreshButtonIconClassName}
              width={refreshButtonIconSize}
              height={refreshButtonIconSize}
            />
          </button>
        )}
      </div>
    )
  }
)

ClientCaptcha.defaultProps = {
  backgroundColor: '#F2F2F2',
  captchaClassName: '',
  captchaCode: () => {},
  chars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  charsCount: 4,
  containerClassName: styles.captchaContainer,
  font: null,
  fontColor: '#000',
  fontFamily: 'Arial, Tahoma',
  fontSize: 22,
  fontStyle: 'normal',
  height: 40,
  refreshButton: true,
  refreshButtonClassName: styles.retryButton,
  refreshButtonIcon:
    'https://cdn.jsdelivr.net/npm/react-client-captcha/dist/retry.svg',
  refreshButtonIconClassName: '',
  refreshButtonIconSize: 24,
  width: 100
}

ClientCaptcha.propTypes = {
  /**
   * backgroundColor of captcha image.
   */
  backgroundColor: PropTypes.string,
  /**
   * className of captcha image
   */
  captchaClassName: PropTypes.string,
  /**
   * function that returns current shown captcha code.
   */
  captchaCode: PropTypes.func,
  /**
   * characters that captcha should be made with.
   */
  chars: PropTypes.string,
  /**
   * count of characters that captcha should be made with.
   */
  charsCount: PropTypes.number,
  /**
   * className of captcha and retry button container div
   */
  containerClassName: PropTypes.string,
  /**
   * the font property for canvas. if set, none of the fontFamily, fontSize and font Style would work.
   */
  font: PropTypes.string,
  /**
   * fontColor of captcha characters.
   */
  fontColor: PropTypes.string,
  /**
   * fontFamily of captcha characters.
   */
  fontFamily: PropTypes.string,
  /**
   * fontSize of captcha characters.
   */
  fontSize: PropTypes.number,
  /**
   * fontStyle of captcha characters.
   */
  fontStyle: PropTypes.string,
  /**
   * height of captcha image.
   */
  height: PropTypes.number,
  /**
   * whether there is a refresh button by default
   */
  refreshButton: PropTypes.bool,
  /**
   * className of refresh button
   */
  refreshButtonClassName: PropTypes.string,
  /**
   * the icon of refresh button
   */
  refreshButtonIcon: PropTypes.string,
  /**
   * className of refresh button icon
   */
  refreshButtonIconClassName: PropTypes.string,
  /**
   * size of refresh button icon
   */
  refreshButtonIconSize: PropTypes.number,
  /**
   * width of captcha image.
   */
  width: PropTypes.number
}

export default ClientCaptcha
