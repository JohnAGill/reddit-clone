import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store'
import './App.scss'
import FrontPage from './Containers/FrontPage'
import About from './Containers/About'
import Header from './Containers/Header'

firebase.initializeApp({
  apiKey: 'AIzaSyAgo-cm0dvDkUewFsCJvFwjmgCErPLM48w',
  authDomain: 'reddit-clone-95fa2.firebaseapp.com',
  databaseURL: 'https://reddit-clone-95fa2.firebaseio.com',
  projectId: 'reddit-clone-95fa2',
  storageBucket: 'reddit-clone-95fa2.appspot.com',
  messagingSenderId: '910677024025',
  appId: '1:910677024025:web:5acb87ba81e00432473988',
})

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div style={{ backgroundColor: '#DAE0E6', height: '100%' }}>
          <Header />
          <Route exact path="/" component={FrontPage} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </PersistGate>
  </Provider>
)
