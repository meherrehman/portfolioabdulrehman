import React from 'react';
import Home from './Components/Home';
import Project from './Components/Project';
import Contact from './Components/Contact';
import {Route,Switch} from "react-router-dom";

export const App = () => {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Project" component={Project} />
      <Route exact path="/Contact" component={Contact} />
    </Switch>
    </div>
  )
}

export default App;