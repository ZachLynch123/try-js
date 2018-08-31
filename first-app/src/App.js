// remember about hacker haze theme on vs

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // variable that is only available in classes that extend Component
  // if the component is a function like in Person.js, then state won't work
  // handle state with care
  state = {
    persons: [
      {name: 'Zach', age: 23},
      {name: 'Alli', age: 20},
      {name: 'Matt', age: 25}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Alli!</h1>
        <p>Can nest JSX elements, but cannot really have more than one parent element</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: Racing</Person>
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
