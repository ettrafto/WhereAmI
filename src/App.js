import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './users/pages/Users';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import UserPlaces from './places/pages/UserPlaces';


const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces/>
          </Route>
          <Route path="/places/new" exact>
            <NewPlace/>
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
    );
}

export default App;
