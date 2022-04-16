import { Route } from 'react-router';
import AllPokes from './pages/allPokes';
import Home from './pages/home';
import Login from './pages/login';

const Routes = () => {
  <>
    <Route exact path='/' component={Login} />
    <Route exact path='/home' component={Home} />
    <Route exact path='/see-all' component={AllPokes} />
  </>
};

export default Routes;