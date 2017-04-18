import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Buckets from './components/Buckets'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' >
        <IndexRoute component={Buckets} />
      </Route>
    </Router>
  );
}

export default App;
