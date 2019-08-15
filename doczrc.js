import { css } from "docz-plugin-css";

export default {
  title: "react-client-captcha",
  description: "A light JS-based captcha generator.",
  src: ".",
  base: "/react-client-captcha/",
  dest: "./docs",
  codeSandbox: false,
  plugins: [
    css({
      preprocessor: "postcss",
      cssmodules: true
    })
  ],
  filterComponents: files =>
    files.filter(filepath => /w*.(js|jsx|ts|tsx)$/.test(filepath))
};
