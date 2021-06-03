import React, { Component } from "react";
import "../Styles/Comments.css";
import Posts from "./Posts";

class Comments extends Component {

  constructor() {
    super();
    this.postID = 0;

    this.state = {
      postArray : [
        {id: 1, author: "landiggity", body: "This is my first comment on this forum"},
        {id: 2, author: "scarlett-jo", body: "That's a mighty fine comment you've got there my good looking fellow..."},
        {id: 3, author: "rosco", body: "What is the meaning of all of this 'React' mumbo-jumbo?"}

      ],
      Body : "",
      Author : ""
    }
  }

  deleteEvent = (index) => {
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.splice(index, 1);
    this.setState({
      postArray : copyPostArray
    })
  }

  setPost = (element) => {
    this.setState({
      Body : element.target.value
    })
  }

  setName = (element) => {
    this.setState({
      Author : element.target.value
    })
  }


  addPost = () => {
    this.postID = this.postID + 1;
    const copyPostArray = Object.assign([], this.state.postArray)
    copyPostArray.push({
      author: this.state.Author,
      body : this.state.Body
    })
    this.setState({
      postArray : copyPostArray
    })
  }

  render() {
    return (
          <div>
              <div className="Comments" id="Comments">
              <h2>Comments</h2>
                <ul>
                  {
                    this.state.postArray.map((post, index) => {
                      return (
                        <Posts 
                          key = {post.id}
                          author = {post.author}
                          body = {post.body}
                          delete = {this.deleteEvent.bind(this, index)}
                      />
                      )
                    })
                  }
                </ul>
                  <div style={{backgroundColor: "#F3F3FE", borderRadius: "10px"}}>
                    <div style={{padding: "20px" }}>
                      <p style={{fontWeight: "600"}}>Add New Comment</p>
                      <input type="text" placeholder="Username" id="username" onBlur={this.setName}/>
                      <input type="text" placeholder="Comments" id="comment" onBlur={this.setPost}/>
                      <button onClick={this.addPost}>Add Comment</button>
                    </div>
                  </div>
              </div>
          </div>
    );
  }
  }

export default Comments;
