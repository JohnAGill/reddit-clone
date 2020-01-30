import React, { useState } from 'react'
import FloatingLabel from '../FloatingLabelInput'
import Button from '../Button'
import './styles.scss'

export default props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  return (
    <div className="signup-modal-container">
      <div onClick={() => props.close()} className="signup-modal-close-container">
        <span className="signup-modal-close">X</span>
      </div>
      <div className="signup-modal-header-container">
        <p className="signup-modal-header-text">{props.title}</p>
      </div>
      <div className="signup-modal-inputs-container">
        <div className="signup-modal-username-container">
          <FloatingLabel id="email" name="email" placeholder="email" type="email" value={email} onChange={evt => setEmail(evt.currentTarget.value)} />
        </div>
        <div className="signup-modal-username-container">
          <FloatingLabel id="username" name="username" placeholder="username" type="username" value={username} onChange={evt => setUsername(evt.currentTarget.value)} />
        </div>
        <div className="signup-modal-password-container">
          <FloatingLabel id="password" name="password" placeholder="password" type="password" value={password} onChange={evt => setPassword(evt.currentTarget.value)} />
        </div>
      </div>
      <div className="signup-modal-button-container">
        <Button title={props.buttonTitle} onClick={() => props.submit(email, password, username)} solid large />
      </div>
      <div className="signup-modal-swap-button-container">
        <Button title="LOG IN" onClick={() => props.swapToLogin()} solid large />
      </div>
      {props.error ? (
        <div className="signup-modal-error-container">
          <p>An Error occured, {props.error}</p>
        </div>
      ) : null}
    </div>
  )
}
