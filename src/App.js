import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './components/pages/auth/Auth';
import HomePage from './components/pages/home/Home';
import Profile from './components/pages/profile/Profile';
import PrivateRoute from './components/utils/PrivateRoute';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]} component={HomePage} />

        <Route exact path='/auth' component={Auth} />

        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>

      </Switch>
    </Router>
  );
}

export default App;
