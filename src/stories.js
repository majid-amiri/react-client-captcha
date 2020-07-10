import React, { useState } from "react";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import ClientCaptcha from "./index";

export default {
  title: "ClientCaptcha",
  component: ClientCaptcha,
  decorators: [withKnobs],
};

const BaseComponent = (props) => {
  const [captchaCode, setCaptcha] = useState();

  return (
    <div>
      <ClientCaptcha captchaCode={setCaptcha} {...props} />
      Current captcha code: {captchaCode}
    </div>
  )
};

export const basic = () => <BaseComponent />

export const withCustomization = () => {
  const props = {
    chars: text("Characters", "ABCDEFGHIJK!@#$%^&*"),
    charsCount: number("Characters count", 6),
    width: number("Canvas width", 300),
    height: number("Canvas height", 100),
    fontSize: number("Font size", 45),
    backgroundColor: text("Background color", "#BD272D"),
    fontColor: text("Font color", "#fff")
  };
  
  return <BaseComponent {...props} />
}

export const withInputAndValidation = () => {
  const [captchaCode, setCaptcha] = useState();
  const [captchaInput, setCaptchaInput] = useState();
  const validateCaptcha = (e) => {
    e.preventDefault();

    if(captchaCode === captchaInput)
        alert("Valid")
    else
        alert("Invalid")
  }
  
  return (
    <form onSubmit={validateCaptcha}>
      <ClientCaptcha captchaCode={setCaptcha} />
      <input type="text" value={captchaInput} onChange={e => setCaptchaInput(e.target.value)} />
      <button type="submit">Validate</button>
    </form>
  );
}