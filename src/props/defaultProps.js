export const defaultProps = (cssClasses) => ({
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
    retryButtonClassName: cssClasses.retryButton,
    retryImgClassName: "",
    containerClassName: cssClasses.captchaContainer,
    captchaClassName: ""
});