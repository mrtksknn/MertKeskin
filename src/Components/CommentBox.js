import React, { Component } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import "../Styles/CommentBox.css";

class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
            showComments: false,
            comments: [
                {id: 1, author: "landiggity", body: "This is my first comment on this forum so don't be a dick"},
                {id: 2, author: "scarlett-jo", body: "That's a mighty fine comment you've got there my good looking fellow..."},
                {id: 3, author: "rosco", body: "What is the meaning of all of this 'React' mumbo-jumbo?"}
            ]
        };
    }

    _addComment(author, body) {
      const comment = {
        id: this.state.comments.length + 1,
        author,
        body
      };
      this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments() {    
      return this.state.comments.map((comment, index) => { 
        return (
          <Comment 
            author={comment.author} 
            body={comment.body} 
            key={comment.id} 
            delete={this.delete.bind(this, index)}
          />
        ); 
      });
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount}`;
      }
    }

    _deleteComment = (index) => {
        const copyPostArray = Object.assign([], this.state.comments);
        copyPostArray.splice(index, 1);
        this.setState({
          posrtArray: copyPostArray
        })
    }


    render() {

        const comments = this._getComments();
        let commentNodes;
        let buttonText = 'Show Comments';

        if (this.state.showComments) {
            buttonText = 'Hide Comments';
            commentNodes = <div className="comment-list">{ comments }</div>
        }

        return (
            <div className="comment-box" id="Comments">
                <h2>Comments ({this._getCommentsTitle(comments.length)})</h2>
                <h4 className="comment-count">
                <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
                  {buttonText}
                </button>
                </h4>
                {commentNodes}
                  <CommentForm addComment={this._addComment.bind(this)}/>
                             
            </div>
        )
    }
}

export default CommentBox;