import React, { Component } from 'react';
import classes from './Person.css'
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Auxiliary';
import withClassWrap from '../../../hoc/withClassWrap';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }

    }

    render() {
        console.log('[Person.js] Inside render()');

        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name} />
            </Aux>
        );

        // return [
        //     <p key="1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.change} value={this.props.name} />
        // ]
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default withClassWrap(Person, classes.Person);