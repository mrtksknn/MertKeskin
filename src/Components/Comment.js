import React, { Component } from "react";
import "../Styles/Comment.css";

class Comment extends React.Component {

    render () {
      return(
        <div className="Comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
          <div className="comment-footer">
            <a href="#" className="comment-footer-delete" onClick={this.props._deleteComment}>Delete Comment</a>
          </div>
        </div>
      );
    }

}

export default Comment;