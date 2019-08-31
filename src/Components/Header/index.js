import React from 'react'
import Logo from '../Logo'
import Test from '../../assets/redditLogo.svg'
export default () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', display: 'flex', height: 70, alignItems: 'center', paddingLeft: 20 }}>
      <Logo source={Test} />
    </div>
    // <Filter />
    // <SearchBar />
    // <LoginButton />
    // <SignUpButton />
    // <ProfileIcon />

  )
}
