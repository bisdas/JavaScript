import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] Inside Constructor', props);

        this.state = {
            persons: [
                { id: 'sfdsf', name: 'Bishnu', age: 25 },
                { id: 'sfdsff', name: 'Srikant', age: 16 },
                { id: 'sfdsfd', name: 'Jaya', age: 18 }
            ],
            otherState: 'some other value',
            showPersons: false
        }
    }
    

    
    
    // state = {
    //     persons: [
    //         { id: 'sfdsf', name: 'Bishnu', age: 25 },
    //         { id: 'sfdsff', name: 'Srikant', age: 16 },
    //         { id: 'sfdsfd', name: 'Jaya', age: 18 }
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
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
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonsHandler}
                changed={this.nameChangedHandler} />;
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    appTitle = {this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler} />
                {persons}
            </div>
        );
    }
}

export default App;
