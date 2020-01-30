import firebase from 'firebase'

export const logIn = (email, password) => {
  return async dispatch => {
    dispatch({ type: 'user/LOG_IN_PENDING' })
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password)
      dispatch({ type: 'user/SET_LOGIN_MODAL', payload: false })
      return dispatch({ type: 'user/LOG_IN_SUCCESS', payload: result })
    } catch (error) {
      return dispatch({ type: 'user/LOG_IN_ERROR', payload: error.message })
    }
  }
}

export const signUp = (email, password, username) => {
  return async dispatch => {
    dispatch({ type: 'user/SIGN_UP_PENDING' })
    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
      const id = result.user.uid
      await firebase
        .database()
        .ref('users/' + id)
        .set({ email: email, username: username })
      dispatch({ type: 'user/SET_SIGN_UP_MODAL', payload: false })
      return dispatch({ type: 'user/SIGN_UP_SUCCESS', payload: result })
    } catch (error) {
      return dispatch({ type: 'user/SIGN_UP_ERROR', payload: error.message })
    }
  }
}

export const signOut = () => {
  return async dispatch => {
    dispatch({ type: 'user/SIGN_OUT_PENDING' })
    try {
      const result = await firebase.auth().signOut()
      return dispatch({ type: 'user/SIGN_OUT_SUCCESS', payload: result })
    } catch (error) {
      return dispatch({ type: 'user/SIGN_OUT_ERROR', payload: error.message })
    }
  }
}

export const logInModal = value => {
  return { type: 'user/SET_LOGIN_MODAL', payload: value }
}

export const signUpModal = value => {
  return { type: 'user/SET_SIGN_UP_MODAL', payload: value }
}
