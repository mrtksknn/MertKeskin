import React, { Component } from 'react';
import "../Styles/Posts.css";

class Posts extends Component {
    render() {
        return (
            <div className="posts">
                <li>
                    <hr/>
                    <p>{this.props.author}</p>
                    <p><i>-{this.props.body}</i></p>
                    <button onClick={this.props.delete}>Delete</button>
                    <hr/>
                </li>
            </div>
        )
    }
}

export default Posts;