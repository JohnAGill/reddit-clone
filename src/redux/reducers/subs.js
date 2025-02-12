const initialState = {
  subInfo: {},
  subInfoError: null,
  newPostModal: false,
  newSubModal: false,
  createSubError: null,
}

export default function subs(state = initialState, action) {
  switch (action.type) {
    case 'subs/GET_SUB_INFO_PENDING': {
      return {
        ...state,
        subInfo: {},
      }
    }
    case 'subs/GET_SUB_INFO_SUCCESS': {
      return {
        ...state,
        subInfo: action.payload,
      }
    }
    case 'subs/GET_SUB_INFO_ERROR': {
      return {
        ...state,
        subInfo: {},
        subInfoError: action.payload,
      }
    }
    case 'subs/GET_POSTS_PENDING': {
      return {
        ...state,
        posts: [],
      }
    }
    case 'subs/GET_POSTS_SUCCESS': {
      return {
        ...state,
        posts: action.payload,
      }
    }
    case 'subs/GET_POSTS_ERROR': {
      return {
        ...state,
        posts: [],
        postsError: action.payload,
      }
    }
    case 'subs/NEW_POST_MODAL': {
      return {
        ...state,
        newPostModal: action.payload,
      }
    }
    case 'subs/NEW_SUB_MODAL': {
      return {
        ...state,
        newSubModal: action.payload,
      }
    }
    case 'subs/CREATE_NEW_SUB_ERROR': {
      return {
        ...state,
        createSubError: action.payload,
      }
    }
    default:
      return state
  }
}
