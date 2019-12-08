import React, { useState } from 'react'
import FloatingLabel from '../FloatingLabelInput'
import Button from '../Button'
import './styles.scss'

export default props => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="login-modal-container">
      <div onClick={() => props.close()} className="login-modal-close-container">
        <span className="login-modal-close">X</span>
      </div>
      <div className="login-modal-header-container">
        <p className="login-modal-header-text">{props.title}</p>
      </div>
      <div className="login-modal-inputs-container">
        <div className="login-modal-username-container">
          <FloatingLabel id="username" name="username" placeholder="username" type="email" value={userName} onChange={evt => setUserName(evt.currentTarget.value)} />
        </div>
        <div className="login-modal-password-container">
          <FloatingLabel id="password" name="password" placeholder="password" type="password" value={password} onChange={evt => setPassword(evt.currentTarget.value)} />
        </div>
      </div>
      <div className="login-modal-button-container">
        <Button title={props.buttonTitle} onClick={() => props.submit(userName, password)} solid large />
      </div>
      {props.error ? (
        <div className="login-modal-error-container">
          <p>An Error occured, {props.error}</p>
        </div>
      ) : null}
    </div>
  )
}
