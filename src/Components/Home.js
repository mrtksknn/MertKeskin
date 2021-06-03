import React from "react";
import Typed from "react-typed";
import author from "../Images/author.jpeg";
import "../Styles/Home.css";

const Home = () => {
    return (
        <div className="Home" id="Home">
            <div className="title" style={{width: "90%"}}>
                <h1>
                    <p>Hi,</p>
                    <p>I'm Mert</p>
                    <p>
                    <Typed
                        style={{ color: "#3f71f4" }}
                        className="typed-text"
                        strings={["Web Developer", "UI Developer"]}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                    />
                    </p>
                </h1>
            </div>
            <div className="person">
                <img 
                    src={author}
                    alt="person"
                />
            </div>
        </div>
    );
};

export default Home;