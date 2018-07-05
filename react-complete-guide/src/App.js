import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'sfdsf', name: 'Bishnu', age: 25 },
      { id: 'sfdsff', name: 'Srikant', age: 16 },
      { id: 'sfdsfd', name: 'Jaya', age: 18 }
    ],
    otherState: 'some other value',
    showPersons: false
  }




  someprop = 'abcd'

  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Bish';

  //   // this.setState({
  //   //   persons: [
  //   //     { name: 'Bish', age: 25 },
  //   //     { name: 'Srikant', age: 16 },
  //   //     { name: 'Jaya', age: 19 }
  //   //   ]
  //   // })

  //   this.setState({
  //     persons: [
  //       { name: newName, age: 25 },
  //       { name: 'Srikant', age: 16 },
  //       { name: 'Jaya', age: 19 }
  //     ]
  //   })

  //   this.someprop = 'changed'
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     { name: 'Bishnu', age: 25 },
    //     { name: event.target.value, age: 16 },
    //     { name: 'Jaya', age: 19 }
    //   ]
    // })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons; // this is a bad approach. this directly modifies the state.
    const persons = [...this.state.persons]; // method 1
    //const persons = this.state.persons.slice(); // method 2
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    //console.log('render() is called');

    let persons = null;
    if (this.state.showPersons) {
      // persons = (
      //   <div>
      //     <Person
      //     name={this.state.persons[0].name}
      //     age={this.state.persons[0].age} />

      //     <Person
      //     name={this.state.persons[1].name}
      //     age={this.state.persons[1].age}
      //     // click={this.switchNameHandler.bind(this, 'Bish!')} 
      //     change={this.nameChangedHandler} />

      //     <Person
      //     name={this.state.persons[2].name}
      //     age={this.state.persons[2].age} >I like cakes.</Person>
      //   </div>
      // )

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonsHandler(index)}
              key={person.id}
              change={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red',  'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working :)
          {/* <input type='text' value={this.someprop}></input> */}
        </p>
        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
        {/* <button onClick={this.switchNameHandler.bind(this, 'Bishh.')}>Switch Name</button> */}
        {/* <button style={style} onClick={() => this.switchNameHandler('Bishhh...!')}>Switch Name</button> */}
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

        {/* {
          this.state.showPersons ? 
          <div>
            <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

            <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // click={this.switchNameHandler.bind(this, 'Bish!')} 
            change={this.nameChangedHandler} />

            <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} >I like cakes.</Person>
          </div> : null
        } */}


      </div>
    );

    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //     <p>This is really working :)</p>
    //     <Person name='Bishnu' age='25'/>
    //     <Person name='Srikant' age='16'/>
    //     <Person name='Jaya' age='18'>I like cakes.</Person>
    //   </div>

    // );

    // return (
    //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    // );
  }
}

export default Radium(App);
