import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css'
import FrontPage from './Containers/FrontPage'
import About from './Containers/About'
import Header from './Components/Header'

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#DAE0E6' }}>
        <Header />
        <Route exact path="/" component={FrontPage} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
}

export default App;
