import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";



function App() {
  return (
    //BEM
    <Router>
    <div className="App">
      <Switch>
      <Route path='/checkout'>
      <Header/>
      <h1>I am the checkout Page</h1>

      </Route>
      <Route path='/'>
      <Header/>
      <Home />

      </Route>
      </Switch>

      {/* {Home} */}
    </div>
    </Router>
  );
}

export default App;
