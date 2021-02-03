import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import 'genshin-impact-api'
import Home from './components/Day17/Home'
import Nav from './components/Day17/Nav'
import Contact from './components/Day17/Contact' 
import About from './components/Day17/About'
import Characters from './components/Day17/Characters'
import CharacterDetails from './components/Day17/CharacterDetails'


function App(){


  return(
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/characters' exact component={Characters}/>
          <Route path='/characters/:id' component={CharacterDetails}/>
        </Switch>
      </Router>
    </>
  )
    
  
}

export default App