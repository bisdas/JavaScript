import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */}

                            {
                                /*
                                 absolute path: '/new-post'; writing link to like this always get appended to 
                                 the root domain.

                                 to achienve the links not to start at the root domain, rather to append to the 
                                 url, write like this: this.props.match.url + '/new-post'

                                 example: 
                                 pathname: '/new-post'   --- this always generates absolute path
                                 pathname: this.props.match.url + '/new-post'   --- this generates relative path
                                */
                            }
                            <li>
                                <NavLink
                                    to="/posts"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true',
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/*
                <Route path="/" exact render={() => <h2>Home</h2>} />
                <Route path="/" render={() => <h2>Home 2</h2>} />
                */}

                <Switch>
                    {
                        this.state.auth ?
                            <Route path="/new-post" component={AsyncNewPost} /> :
                            null
                    }
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} */}
                </Switch>
            </div>
        );
    }
}

export default Blog;