import React, { Component } from 'react';
import './content.css';

import LandingPage from './components/landingPage/landingPage';

class Content extends Component {
  render() {
    return (
        <div className="content">
            <LandingPage />
        </div>
    );
  }
}

export default Content;
