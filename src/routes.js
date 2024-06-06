import { Routes as Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
    </Switch>
  );
}
