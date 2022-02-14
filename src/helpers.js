export const generateCode = (chars, charsCount) => {
  const captcha = []
  for (let i = 0; i < charsCount; i += 1) {
    const index = Math.ceil(Math.random() * chars.length)
    if (chars[index] && captcha.indexOf(chars[index]) === -1)
      captcha.push(chars[index])
    else i -= 1
  }
  return captcha.join('')
}

export const generateCanvas = (
  ctx,
  code,
  {
    backgroundColor,
    font,
    fontColor,
    fontFamily,
    fontSize,
    fontStyle,
    height,
    width
  }
) => {
  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, width, height)
  ctx.font = font || `${fontStyle} ${fontSize}px ${fontFamily}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = fontColor
  ctx.fillText(code.split('').join(' '), width / 2, height / 2)
}
