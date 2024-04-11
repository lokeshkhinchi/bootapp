import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import logo from './logo.svg';
import Header from './components/Header'
import LefrMenu from './components/LeftMenu';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Switch, Route, withRouter, useHistory, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';


const App = () => {
  const history = useHistory();
  let userData = sessionStorage.getItem('sessionData');
  //!userData && history.push('/log-in')
  return (
    // <Provider store={store}>
    //   <CakeContainer />
    //   <HooksCakeContainer />
    //   <IceCreamContainer />
    // </Provider>
    
    <Router history={history}>
      <Switch>
        <Route path='/log-in' component={LogIn} />
        <Route path='/' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
