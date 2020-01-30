import firebase from 'firebase'
import _ from 'lodash'

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

const checkForUpvote = (post, userID) => {
  const upVotes = post.upVotes
  return _.includes(_.keys(upVotes), userID)
}
const checkForDownvote = (post, userID) => {
  const downVotes = post.downVotes
  return _.includes(_.keys(downVotes), userID)
}

export const upVotePost = (sub, id) => {
  return (dispatch, getState) => {
    dispatch({ type: 'posts/UPVOTE_POST_PENDING' })
    try {
      const userID = getState().user.userDetails.user.uid
      const postRef = firebase.database().ref(`posts/${sub}/${id}`)
      postRef.transaction(post => {
        if (checkForUpvote(post, userID)) {
          return {
            ...post,
            upVotes: {
              ...post.upVotes,
              [userID]: 1,
            },
          }
        }
        return {
          ...post,
          upVotes: {
            ...post.upVotes,
            [userID]: 1,
          },
          downVotes: {
            ..._.without(post.downVotes, userID),
          },
        }
      })
      return dispatch({ type: 'posts/UPVOTE_POST_SUCCESS' })
    } catch (error) {
      return dispatch({ type: 'posts/UPVOTE_POST_ERROR', payload: error.message })
    }
  }
}

export const downVotePost = (sub, id) => {
  return (dispatch, getState) => {
    dispatch({ type: 'posts/UPVOTE_POST_PENDING' })
    try {
      const userID = getState().user.userDetails.user.uid
      const postRef = firebase.database().ref(`posts/${sub}/${id}`)
      postRef.transaction(post => {
        if (checkForDownvote(post, userID)) {
          return {
            ...post,
            downVotes: {
              ...post.downVotes,
            },
          }
        }
        return {
          ...post,
          downVotes: {
            ...post.downVotes,
            [userID]: 1,
          },
          upVotes: {
            ..._.without(post.upVotes, userID),
          },
        }
      })
      return dispatch({ type: 'posts/UPVOTE_POST_SUCCESS' })
    } catch (error) {
      return dispatch({ type: 'posts/UPVOTE_POST_ERROR', payload: error.message })
    }
  }
}
