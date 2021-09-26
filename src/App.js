import Dashboard from './pages/dashboard/dashboard';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import './App.scss';

function App() {
  return (
    <Router>
      <Dashboard/>
    </Router>
  );
}

export default App;
