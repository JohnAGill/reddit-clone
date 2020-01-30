import firebase from 'firebase'
import moment from 'moment'
import superagent from 'superagent'

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

export const newPostModal = state => ({ type: 'subs/NEW_POST_MODAL', payload: state })
export const newSubModal = state => ({ type: 'subs/NEW_SUB_MODAL', payload: state })

export const createNewPost = (title, content, sub) => {
  return async (dispatch, getState) => {
    dispatch({ type: 'subs/CREATE_NEW_POST_PENDING' })
    try {
      const userID = getState().user.userDetails.user.uid
      try {
        const userRef = firebase.database().ref(`users/${userID}/username`)
        const userName = await userRef.once('value')
        try {
          const newPostKey = firebase
            .database()
            .ref()
            .child(`posts/${sub}`)
            .push().key
          const postRef = firebase.database().ref(`posts/${sub}/${newPostKey}`)
          await postRef.set({
            title: title,
            body: content,
            downVotes: 0,
            upVotes: 0,
            userName: userName.val(),
            sub: sub,
            timeStamp: moment().unix(),
            uid: newPostKey,
          })
          return dispatch({ type: 'subs/NEW_POST_MODAL', payload: false })
        } catch (error) {
          return dispatch({ type: 'subs/CREATE_NEW_POST_ERROR', payload: error.message })
        }
      } catch (error) {
        dispatch({ type: 'user/SET_LOGIN_MODAL', payload: true })
      }
    } catch (error) {
      return dispatch({ type: 'user/SET_LOGIN_MODAL', payload: true })
    }
    return null
  }
}

export const createNewSub = (subName, file) => {
  return async dispatch => {
    dispatch({ type: 'subs/CREATE_NEW_SUB_PENDING' })
    try {
      await superagent
        .post('https://api.cloudinary.com/v1_1/dculjemh4/upload')
        .field('upload_preset', 'ueukoh4z')
        .field('file', file)
        .end(async (error, response) => {
          const url = response.body.url
          try {
            const postRef = firebase.database().ref(`subs/${subName}`)
            await postRef.set({
              title: subName,
              image: url,
            })
            dispatch({ type: 'subs/NEW_SUB_MODAL', payload: false })
            return dispatch({ type: 'subs/CREATE_NEW_SUB_SUCCESS' })
          } catch (firebaseError) {
            return dispatch({ type: 'subs/CREATE_NEW_SUB_ERROR', payload: firebaseError.message })
          }
        })
    } catch (error) {
      return dispatch({ type: 'subs/CREATE_NEW_SUB_ERROR', payload: error.message })
    }
    return null
  }
}
