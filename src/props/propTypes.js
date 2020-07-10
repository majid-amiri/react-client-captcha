import PropTypes from "prop-types";

export const propTypes = {
  /**
   * width of captcha image.
   */
  width: PropTypes.number,
  /**
   * height of captcha image.
   */
  height: PropTypes.number,
  /**
   * fontSize of captcha characters.
   */
  fontSize: PropTypes.number,
  /**
   * fontFamily of captcha characters.
   */
  fontFamily: PropTypes.string,
  /**
   * fontColor of captcha characters.
   */
  fontColor: PropTypes.string,
  /**
   * characters that captcha should be made with.
   */
  chars: PropTypes.string,
  /**
   * count of characters that captcha should be made with.
   */
  charsCount: PropTypes.number,
  /**
   * function that returns current shown captcha code.
   */
  captchaCode: PropTypes.func.isRequired,
  /**
   * backgroundColor of captcha image.
   */
  backgroundColor: PropTypes.string,
  /**
   * whether captcha has retry functionality
   */
  retry: PropTypes.bool,
  /**
   * the icon of retry button
   */
  retryIcon: PropTypes.string,
  /**
   * size of retry button icon
   */
  retryIconSize: PropTypes.number,
  /**
   * className of retry button
   */
  retryButtonClassName: PropTypes.string,
  /**
   * className of retry img
   */
  retryImgClassName: PropTypes.string,
  /**
   * className of captcha and retry button container div
   */
  containerClassName: PropTypes.string,
  /**
   * className of captcha image
   */
  captchaClassName: PropTypes.string
};