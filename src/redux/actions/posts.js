import firebase from 'firebase'

export const getPosts = () => {
  return dispatch => {
    dispatch({ type: 'posts/GET_POSTS_PENDING' })
    try {
      const postsRef = firebase.database().ref('posts/')
      return postsRef.on('value', snapshot => {
        return dispatch({ type: 'posts/GET_POSTS_SUCCESS', payload: snapshot.val() })
      })
    } catch (error) {
      return dispatch({ type: 'posts/GET_POSTS_ERROR', payload: error.message })
    }
  }
}

export const upVotePost = (sub, id) => {
  return dispatch => {
    dispatch({ type: 'posts/UPVOTE_POST_PENDING' })
    try {
      const postRef = firebase.database().ref(`posts/${sub}/${id}`)
      postRef.transaction(post => {
        return {
          ...post,
          upVotes: (post.upVotes || 0) + 1,
        }
      })
      return dispatch({ type: 'posts/UPVOTE_POST_SUCCESS' })
    } catch (error) {
      return dispatch({ type: 'posts/UPVOTE_POST_ERROR', payload: error.message })
    }
  }
}

export const downVotePost = (sub, id) => {
  return dispatch => {
    dispatch({ type: 'posts/UPVOTE_POST_PENDING' })
    try {
      const postRef = firebase.database().ref(`posts/${sub}/${id}`)
      postRef.transaction(post => {
        return {
          ...post,
          downVotes: (post.downVotes || 0) + 1,
        }
      })
      return dispatch({ type: 'posts/UPVOTE_POST_SUCCESS' })
    } catch (error) {
      return dispatch({ type: 'posts/UPVOTE_POST_ERROR', payload: error.message })
    }
  }
}
