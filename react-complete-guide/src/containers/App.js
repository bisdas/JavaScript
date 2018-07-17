import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClassWrap from '../hoc/withClassWrap';

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);

        this.state = {
            persons: [
                { id: 'sfdsf', name: 'Bishnu', age: 25 },
                { id: 'sfdsff', name: 'Srikant', age: 16 },
                { id: 'sfdsfd', name: 'Jaya', age: 18 }
            ],
            otherState: 'some other value',
            showPersons: false,
            toggleClicked: 0
        }
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidUpdate()');
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
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    }

    deletePersonsHandler = (personIndex) => {
        //const persons = this.state.persons; // this is a bad approach. this directly modifies the state.
        const persons = [...this.state.persons]; // method 1
        //const persons = this.state.persons.slice(); // method 2
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    render() {
        console.log('[App.js] Inside render()');

        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonsHandler}
                changed={this.nameChangedHandler} />;
        }

        return (
            <Aux>
                <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler} />
                {persons}
            </Aux>
        );
    }
}

export default withClassWrap(App, classes.App);
