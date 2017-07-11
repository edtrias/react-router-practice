import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Nav from './nav';
import One from './one';
import Two from './two';
import Three from './three';
import Four from './four';
import Five from './five';

const App = () => (
  <Router>
    <div className="container">
      <Nav />
      <Route exact path="/" component={One}/>
      <Route path="/two" component={Two}/>
      <Route path="/three" component={Three}/>
      <Route path="/four" component={Four}/>
      <Route path="/five" component={Five}/>
    </div>
  </Router>
)

export default App;
