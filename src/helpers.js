/* eslint-disable import/prefer-default-export */

export const generateCode = (chars, charsCount) => {
    const captcha = [];
    for (let i = 0; i < charsCount; i += 1) {
      const index = Math.ceil(Math.random() * chars.length);
      if (chars[index] && captcha.indexOf(chars[index]) === -1)
        captcha.push(chars[index]);
      else i -= 1;
    }
    return captcha.join("");
  };