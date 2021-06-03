import React, { Component } from 'react';

class Posts extends Component {
    render() {
        return (
            <div className="posts">
                <li style={{listStyle : "none"}}>
                    <hr/>
                    <p style={{ fontWeight : "bolder" }}>{this.props.author}</p>
                    <p><i>-{this.props.body}</i></p>
                    <button onClick={this.props.delete}>Delete</button>
                    <hr/>
                </li>
            </div>
        )
    }
}

export default Posts;