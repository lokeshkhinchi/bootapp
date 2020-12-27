import React, { Component } from 'react';
import Header from './Header'
import LefrMenu from './LeftMenu';
import MainContent from './MainContent';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();
  let userData = sessionStorage.getItem('sessionData');
  !userData && history.push('/log-in')
  userData = JSON.parse(userData);
  
  
  return (
    <>
    {
      userData ? 
      <Header userName={userData.userName} password={userData.password} /> : 
      <Header />
    }
    
    <Router>
      <div className="dashboard-container">
        <div className="man-nav">
          <LefrMenu />
        </div>
        <section className="main-content">
          <MainContent />
        </section>
      </div>
      
      
    </Router>
    </>
  )
}

export default Dashboard;
