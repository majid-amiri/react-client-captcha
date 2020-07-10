import React, { useRef, useEffect } from "react";
import cssClasses from "./style.css";

import { generateCode } from "./helpers";
import { defaultProps, propTypes } from "./props";

const ClientCaptcha = ({
  chars,
  charsCount,
  width,
  height,
  fontSize,
  captchaCode,
  backgroundColor,
  fontFamily,
  fontColor,
  retryIcon,
  containerClassName,
  captchaClassName,
  retryButtonClassName,
  retryImgClassName,
  retry,
  retryIconSize
}) => {

  const canvasRef = useRef();

  const generateCaptcha = () => {
    const captcha = generateCode(chars, charsCount);
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = fontColor;
    ctx.fillText(captcha.split("").join(" "), width / 2, height / 2);
    captchaCode(captcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, [])

  const resetCaptcha = e => {
    e.preventDefault();
    generateCaptcha();
  }

  return (
    <div className={containerClassName}>
      <canvas
        width={width}
        height={height}
        ref={canvasRef}
        style={{ pointerEvents: "none" }}
        className={captchaClassName}
      />
      {retry && (
        <button
          onClick={resetCaptcha}
          id="retryButton"
          className={retryButtonClassName}
          type="button"
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

ClientCaptcha.defaultProps = defaultProps(cssClasses);

ClientCaptcha.propTypes = propTypes;

export default ClientCaptcha;
