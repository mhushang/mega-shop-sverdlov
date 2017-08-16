import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import ScrollToTop from 'react-scroll-up';

import TopBar from './components/topBar/topBar';
import Footer from './components/footer/footer';
import LandingPage from './components/landingPage/landingPage';
import ContactUsPage from './components/contactUs/contactUsPage';
import BranchesPage from './components/branchesPage/branchesPage';


class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="content">
          <main>
            <Switch>
              <Route path="/" exact component={LandingPage}/>
              <Route path="/contact-us" component={ContactUsPage}/>
              <Route path="/branches" component={BranchesPage}/>
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
        <ScrollToTop showUnder={100} duration={700}>
          <span>UP</span>
        </ScrollToTop>
        <Footer />
      </div>
    );
  }
}

export default App;
