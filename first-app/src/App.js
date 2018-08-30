// remember about hacker haze theme on vs

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Alli!</h1>
        <p>Can nest JSX elements, but cannot really have more than one parent element</p>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    );

    // code below is the equivilant of the code above, the code below gets
    // compiled into the code above
    // code below is not recommended, code above is
    // return React.createElement('div', {className: 'App'}, 
    // React.createElement('h1', null, 'Hi baby!!'));
  }
}

export default App;
