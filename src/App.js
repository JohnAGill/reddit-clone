import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
import FrontPage from './Containers/FrontPage'
import About from './Containers/About'
import Header from './Components/Header'

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#DAE0E6', height: '100%' }}>
        <Header />
        <Route exact path="/" component={FrontPage} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
}

export default App
