const initialState = {
  userDetails: [],
  userSignUpError: null,
  userLogInError: null,
  logInModal: false,
  signUpModal: false,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'user/SIGN_UP_PENDING': {
      return {
        ...state,
        userDetails: [],
      }
    }
    case 'user/SIGN_UP_SUCCESS': {
      return {
        ...state,
        userDetails: action.payload,
      }
    }
    case 'user/SIGN_UP_ERROR': {
      return {
        ...state,
        userDetails: [],
        userSignUpError: action.payload,
      }
    }
    case 'user/LOG_IN_PENDING': {
      return {
        ...state,
        userDetails: [],
        userLogInError: null,
      }
    }
    case 'user/LOG_IN_SUCCESS': {
      return {
        ...state,
        userDetails: action.payload,
        userLogInError: null,
      }
    }
    case 'user/LOG_IN_ERROR': {
      return {
        ...state,
        userDetails: [],
        userLogInError: action.payload,
      }
    }
    case 'user/SIGN_OUT_PENDING': {
      return {
        ...state,
      }
    }
    case 'user/SIGN_OUT_SUCCESS': {
      return {
        ...state,
        userDetails: [],
      }
    }
    case 'user/SIGN_OUT_ERROR': {
      return {
        ...state,
        userSignOutError: action.payload,
      }
    }
    case 'user/SET_LOGIN_MODAL': {
      return {
        ...state,
        logInModal: action.payload,
      }
    }
    case 'user/SET_SIGN_UP_MODAL': {
      return {
        ...state,
        signUpModal: action.payload,
      }
    }
    default:
      return state
  }
}
