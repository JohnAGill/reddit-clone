const initialState = {
  posts: {},
  getPostsError: null,
}

export default function posts(state = initialState, action) {
  switch (action.type) {
    case 'posts/GET_POSTS_PENDING': {
      return {
        ...state,
        posts: [],
      }
    }
    case 'posts/GET_POSTS_SUCCESS': {
      return {
        ...state,
        posts: action.payload,
      }
    }
    case 'posts/GET_POSTS_ERROR': {
      return {
        ...state,
        posts: [],
        postsError: action.payload,
      }
    }
    default:
      return state
  }
}
