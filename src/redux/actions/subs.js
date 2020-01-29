import firebase from 'firebase'

export const getSubInfo = sub => {
  return dispatch => {
    dispatch({ type: 'subs/GET_SUB_INFO_PENDING' })
    try {
      const postsRef = firebase.database().ref(`subs/${sub}`)
      return postsRef.on('value', snapshot => {
        return dispatch({ type: 'subs/GET_SUB_INFO_SUCCESS', payload: snapshot.val() })
      })
    } catch (error) {
      return dispatch({ type: 'subs/GET_SUB_INFO_ERROR', payload: error.message })
    }
  }
}

export const getSubPosts = sub => {
  return dispatch => {
    dispatch({ type: 'subs/GET_POSTS_PENDING' })
    try {
      const postsRef = firebase.database().ref(`posts/${sub}`)
      return postsRef.on('value', snapshot => {
        return dispatch({ type: 'subs/GET_POSTS_SUCCESS', payload: snapshot.val() })
      })
    } catch (error) {
      return dispatch({ type: 'subs/GET_POSTS_ERROR', payload: error.message })
    }
  }
}
