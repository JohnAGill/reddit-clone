import { combineReducers } from 'redux'
import user from './reducers/user'
import posts from './reducers/posts'
import subs from './reducers/subs'

const rootReducer = combineReducers({
  user: user,
  posts: posts,
  subs: subs,
})

export default rootReducer
