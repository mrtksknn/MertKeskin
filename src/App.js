import React, { Component } from "react";
import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/AboutMe";
import Posts from "./Components/Posts";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

class App extends Component {

  constructor() {
    super();
    this.postID = 0;

    this.state = {
      postArray : [
        {id: 1, author: "landiggity", body: "This is my first comment on this forum so don't be a dick"},
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
          <div className="App">
              <Navbar />
              <Home />
              <About />
              <Projects />
              <div>
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
                <input type="text" onBlur={this.setName}/>
                <input type="text" onBlur={this.setPost}/>
                <button onClick={this.addPost}>Add Post</button>
              </div>
              <Contact />
          </div>
    );
  }
  }

export default App;
