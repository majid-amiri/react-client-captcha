import React, { useRef } from 'react'

import ClientCaptcha from 'react-client-captcha'

const App = () => {
  const captchaRef = useRef()
  const handleClick = () => {
    captchaRef.current.refresh()
  }

  return (
    <>
      <ClientCaptcha ref={captchaRef} />

      <button onClick={handleClick}>Refresh</button>
    </>
  )
}

export default App
