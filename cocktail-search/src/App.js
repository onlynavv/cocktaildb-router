import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Home from './Home'
import About from './about'
import Error from './Error'
import SingleCocktail from './SingleCocktail'

import Navbar from './Navbar'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/cocktail/:id' children={<SingleCocktail />}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
