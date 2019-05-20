import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from '../reducers/'

const middleware = [thunk, logger]

const store = createStore(reducers, applyMiddleware(...middleware))
console.log('STORE:', store.getState())

export default store
