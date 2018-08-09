import React, { Component } from 'react';
import Landing from './components/landing';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/page" render={() => 'nice'} />
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
}

export default App;
