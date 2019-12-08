import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import _ from 'lodash'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './rootReducer'

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['user'],
}

const pReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger()
const middlewares = _.compact([thunk, logger])
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const createStore1 = createStoreWithMiddleware(pReducer)

export const persistor = persistStore(createStore1)

export default createStore1
