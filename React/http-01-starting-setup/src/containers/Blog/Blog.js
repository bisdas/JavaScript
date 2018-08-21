import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
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
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;