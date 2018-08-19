import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import axios from 'axios';
import axios from '../../axios'

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
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>

                {/*
                <Route path="/" exact render={() => <h2>Home</h2>} />
                <Route path="/" render={() => <h2>Home 2</h2>} />
                */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />

                {/* <Posts /> */}
            </div>
        );
    }
}

export default Blog;