import { Routes as Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" Component={Dashboard} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
    </Switch>
  );
}
