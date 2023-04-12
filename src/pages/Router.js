import React, { useState } from 'react'
import { Switch,Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Card from './Card';
function Router() {
  // hook
  const [card,setCard] = useState([])
  return (
    <Switch>
        <Route exact path='/'>
          <Home card={card} setCard={setCard}/>
        </Route>
        <Route path='/about'>
            <About card={card} setCard={setCard}/>
        </Route>
        <Route path='/card'>
            <Card card={card} setCard={setCard}/>
        </Route>
     </Switch>
  )
}

export default Router