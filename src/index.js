import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClientCaptcha extends Component {
    constructor(props) {
        super(props)
        this.canvasRef = React.createRef()
    }

    componentDidMount() {
        this.generateCaptcha()
    }

    generateCode = () => {
        const { chars, charsCount } = this.props
        const captcha = []
        for (let i = 0; i < charsCount; i += 1) {
            const index = Math.ceil(Math.random() * chars.length)
            if (chars[index] && captcha.indexOf(chars[index]) === -1) captcha.push(chars[index])
            else i -= 1
        }
        return captcha.join('')
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
        } = this.props
        const code = this.generateCode()
        const ctx = this.canvasRef.current.getContext('2d')
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, width, height)
        ctx.font = `${fontSize}px ${fontFamily}`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = fontColor
        ctx.fillText(code.split('').join(' '), width / 2, height / 2)
        captchaCode(code)
    };

    render() {
        const { width, height, retryIcon, containerClassName, captchaClassName, retryClassName, retry, retryIconSize } = this.props
        return (
            <div className={containerClassName}>
                <canvas
                    width={width}
                    height={height}
                    ref={this.canvasRef}
                    style={{ pointerEvents: 'none' }}
                    className={captchaClassName}
                />
                {retry && (
                    <img
                        src={retryIcon}
                        onClick={this.generateCaptcha}
                        alt='Re-new captcha'
                        className={retryClassName}
                        width={retryIconSize}
                        height={retryIconSize}
                    />
                )}
            </div>
        )
    }
}

ClientCaptcha.defaultProps = {
    width: 100,
    height: 40,
    fontSize: 22,
    fontFamily: 'Arial, Tahoma',
    fontColor: '#000',
    chars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    charsCount: 4,
    captchaCode: () => undefined,
    backgroundColor: '#F2F2F2',
    retry: true,
    retryIcon: 'https://cdn.jsdelivr.net/npm/react-client-captcha/dist/retry.png',
    retryIconSize: 40,
    retryClassName: '',
    containerClassName: '',
    captchaClassName: ''
}

ClientCaptcha.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fontSize: PropTypes.number,
    fontFamily: PropTypes.string,
    fontColor: PropTypes.string,
    chars: PropTypes.string,
    charsCount: PropTypes.number,
    captchaCode: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string,
    retry: PropTypes.bool,
    retryIcon: PropTypes.string,
    retryIconSize: PropTypes.number,
    retryClassName: PropTypes.string,
    containerClassName: PropTypes.string,
    captchaClassName: PropTypes.string
}

export default ClientCaptcha
