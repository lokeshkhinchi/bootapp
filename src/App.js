import logo from './logo.svg';
import Header from './components/Header'
import LefrMenu from './components/LeftMenu';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Switch, Route, withRouter, useHistory, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';

const App = () => {
  const history = useHistory();
  let userData = sessionStorage.getItem('sessionData');
  //!userData && history.push('/log-in')
  return (
    <Router history={history}>
      <Route path='/' component={Dashboard} />
      <Route path='/log-in' component={LogIn} />
    </Router>
  );
}

export default App;
