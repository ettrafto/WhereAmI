import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Users from './users/pages/Users';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace/>
        </Route>
        <Redirect to="/"/>
        </Switch>
    </Router>
    );
}

export default App;
