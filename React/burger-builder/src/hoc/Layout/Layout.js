import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showsideDrawer: false
    }

    sideDrawerClosedhander = () => {
        this.setState({ showsideDrawer: false });
    }

    sideDrawerClickedHandler = () => {
        this.setState((prevState) => {
            return { showsideDrawer: !prevState.showsideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerClickedHandler} />
                <SideDrawer
                    open={this.state.showsideDrawer}
                    closed={this.sideDrawerClosedhander} />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;