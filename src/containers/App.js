import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '../routes';
import './App.scss';

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        { routes.map(route => ( 
          <Route
            key={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </Fragment>
  </Router>
)

export default App;
