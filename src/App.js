import React, { Component } from 'react';
import './App.css';

import TopBar from './components/topBar/topBar';
import Footer from './components/footer/footer';
import Content from './content';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
