import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class ClientCaptcha extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.captchaCode = "";
  }

  componentDidMount() {
    this.generateCaptcha();
  }

  generateCode = () => {
    const { chars, charsCount } = this.props;
    const captcha = [];
    for (let i = 0; i < charsCount; i += 1) {
      const index = Math.ceil(Math.random() * chars.length);
      if (chars[index] && captcha.indexOf(chars[index]) === -1)
        captcha.push(chars[index]);
      else i -= 1;
    }
    return captcha.join("");
  };

  generateCaptcha = () => {
    const {
      width,
      height,
      fontSize,
      captchaCode,
      backgroundColor,
      fontFamily,
      fontColor
    } = this.props;
    this.captchaCode = this.generateCode();
    const ctx = this.canvasRef.current.getContext("2d");
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = fontColor;
    ctx.fillText(this.captchaCode.split("").join(" "), width / 2, height / 2);
    captchaCode(this.captchaCode);
  };

  render() {
    const {
      width,
      height,
      retryIcon,
      containerClassName,
      captchaClassName,
      retryButtonClassName,
      retryImgClassName,
      retry,
      retryIconSize
    } = this.props;
    return (
      <div className={containerClassName}>
        <canvas
          width={width}
          height={height}
          ref={this.canvasRef}
          style={{ pointerEvents: "none" }}
          className={captchaClassName}
        />
        {retry && (
          <button
            onClick={this.generateCaptcha}
            id="retryButton"
            className={retryButtonClassName}
          >
            <img
              src={retryIcon}
              alt="Re-new captcha"
              className={retryImgClassName}
              width={retryIconSize}
              height={retryIconSize}
            />
          </button>
        )}
      </div>
    );
  }
}

ClientCaptcha.defaultProps = {
  width: 100,
  height: 40,
  fontSize: 22,
  fontFamily: "Arial, Tahoma",
  fontColor: "#000",
  chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  charsCount: 4,
  backgroundColor: "#F2F2F2",
  retry: true,
  retryIcon: "https://cdn.jsdelivr.net/npm/react-client-captcha/dist/retry.svg",
  retryIconSize: 24,
  retryButtonClassName: "retryButton",
  retryImgClassName: "",
  containerClassName: "captchaContainer",
  captchaClassName: ""
};

ClientCaptcha.propTypes = {
  /**
   * width of captcha image.
   */
  width: PropTypes.number.isRequired,
  /**
   * height of captcha image.
   */
  height: PropTypes.number.isRequired,
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

export default ClientCaptcha;
