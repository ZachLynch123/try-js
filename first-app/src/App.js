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
      {name: 'Matt', age: 25},
    ]
  }

  // usually use Handler at the end of method in order to 
  // show that this method is an event handler (like clicks or something)
  switchNameHandler = (newName) => {
    //console.log('Was Clicked');
    /* cannot call 'this' because it will not refer to the class 'this'
    given the nature of ES5 js. By using the ES6 syntax here, we work around the issue
    so using 'this' will work in this case
    */

   // DON'T DO THIS, USE SPECIAL METHOD setState this.state.persons[0].name="zekahri"
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: 'Allison', age: 20},
        {name: 'Matthew', age: 25},
        {name: 'Danny', age: 23}
       ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'zek', age: 23},
        {name: 'Allison', age: 20},
        {name: event.target.value, age: 25},
        {name: 'Danny', age: 23}
       ]
      })
  }


  render() {

    const style = {
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return ( 
      <div className="App">
        <h1>Hello Alli!</h1>
        <p>Can nest JSX elements, but cannot really have more than one parent element</p>
        {/* do not pass method with parentheses, that will execute the method at runtime, not when clicked 
        UNLESS we use an arrow function like we did here, which (if written on the same line)
        we can ommit the return keyword (see section 2: Arrow Functions for more info)
        this way can be inefficient, so be mindful of that when building larger apps
        */}
        <button className="hello" style={style} onClick={() => this.switchNameHandler('Zachary!!!!')}>Switch Name</button>
        <Person
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} />
        <Person
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, 'Matt!!!')}
        changed={this.nameChangedHandler}>
        My hobbies: Racing
        </Person>
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
