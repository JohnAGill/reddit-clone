import React from 'react'
import Logo from '../Logo'
import Button from '../Button'
import Test from '../../assets/redditLogo.svg'
import './styles.scss'

export default () => {
  return (
    <div className="reddit-clone-header-container">
      <Logo source={Test} />
      <div style={{ display: 'flex', justifyContent: 'space-between', width: 224 }}>
        <Button title="LOG IN" onClick={() => console.log('log in')} />
        <Button title="SIGN UP" onClick={() => console.log('sign up')} solid />
      </div>
    </div>
    // <Filter />
    // <SearchBar />
    // <ProfileIcon />
  )
}
