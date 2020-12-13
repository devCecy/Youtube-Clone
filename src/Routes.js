import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from './component/main/main';
import Detail from './component/detail/detail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/main' component={Main} />
          <Route exact path='/detail' component={Detail} />
        </Switch>
      </Router>
    )
  }
}

export default Routes