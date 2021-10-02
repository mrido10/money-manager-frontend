import Dashboard from './pages/dashboard/dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import './App.scss';
import Login from './pages/login/login';
import { LoginRoute } from './helper/route';
import NotFound from './pages/notFound/notFound';

function App() {
  return (
    <Router>
      <Switch>
        <LoginRoute path='/login' component={Login} />
        <Route exact path='/' component={Dashboard} />
        <Route component={NotFound}/> 
      </Switch>
    </Router>
  );
}

export default App;
