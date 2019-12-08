import { combineReducers } from 'redux'
import user from './reducers/user'
import posts from './reducers/posts'

const rootReducer = combineReducers({
  user: user,
  posts: posts,
})

export default rootReducer
