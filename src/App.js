import Dashboard from './pages/dashboard/dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@popperjs/core"; 
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import './App.scss';
import Login from './pages/login/login';
import { LoginRoute, PrivateRoute } from './helper/route';
import NotFound from './pages/notFound/notFound';
import Transaction from './pages/transaction/transaction';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Login} />
        
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/transaction' component={Transaction} />
        <Route component={NotFound}/> 
      </Switch>
    </Router>
  );
}

export default App;
