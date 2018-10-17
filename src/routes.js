//import 3 components (Home, Page2, Page3)
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';

export default (
  <Switch>
    <Route path="/page2" component={Page2} />
    <Route path="/page3" component={Page3} />
    <Route exact path="/" component={Home} />
  </Switch>
);
