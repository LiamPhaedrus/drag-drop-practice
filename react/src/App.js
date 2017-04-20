import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import MainContainer from './components/MainContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' >
        <IndexRoute component={MainContainer} />
      </Route>
    </Router>
  );
}

export default App;
