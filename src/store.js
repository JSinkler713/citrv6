import { compose, createStore, applyMiddleware } from 'redux';
import reducer from './reducer'

import  { createEpicMiddleware } from 'redux-observable';
import rootEpic from './fetch-animals-epic'

const epicMiddleware = createEpicMiddleware()

const store = createStore(reducer, 
  compose(
    applyMiddleware(epicMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

epicMiddleware.run(rootEpic)

export default store;
