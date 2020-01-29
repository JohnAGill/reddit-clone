import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Logo from '../../Components/Logo'
import Button from '../../Components/Button'
import LoginModal from '../../Components/LoginModal'
import Test from '../../assets/redditLogo.svg'
import { logIn, signUp, logInModal, signUpModal, signOut } from '../../redux/actions/user'
import './styles.scss'

class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <Fragment>
        {this.props.logInModal ? (
          <LoginModal
            buttonTitle="LOG IN"
            title="Login"
            error={this.props.userLogInError}
            submit={(email, password) => this.props.dispatch(logIn(email, password))}
            close={() => this.props.dispatch(logInModal(false))}
          />
        ) : null}
        {this.props.signUpModal ? (
          <LoginModal
            buttonTitle="SIGN UP"
            title="Sign up"
            error={this.props.userSignUpError}
            submit={(email, password) => this.props.dispatch(signUp(email, password))}
            close={() => this.props.dispatch(signUpModal(false))}
          />
        ) : null}
        <div className="reddit-clone-header-container">
          <Logo source={Test} />
          {!_.isEmpty(this.props.userDetails) ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 224 }}>
              <Button title="SIGN OUT" onClick={() => this.props.dispatch(signOut())} />
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 224 }}>
              <Button title="LOG IN" onClick={() => this.props.dispatch(logInModal(true))} />
              <Button title="SIGN UP" onClick={() => this.props.dispatch(signUpModal(true))} solid />
            </div>
          )}
        </div>
      </Fragment>
    )
  }
}

export default connect(state => state.user)(Header)
