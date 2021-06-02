import React from "react";
import "../Styles/Projects.css";
import Pro1 from "../Images/pro1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {

    return <div className="Projects" id="Projects">
        <section className="pt-3">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Some Of My Past Projects</h2>
                    </div>
               </div>
        </section>
        <section className="carousel slider" data-ride="carousel" id="postsCarousel">
            <div className="container pt-0 mt-2 carousel-inner">
                <div className="row row-equal carousel-item active m-t-0">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top card-img-top-250">
                                <img className="img-fluid" src={Pro1} alt="project_1"/>
                            </div>
                            <div className="card-block pt-2">
                                <div className="card-header">
                                    <h3>Project 1</h3>
                                </div>
                                <div className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top card-img-top-250">
                                <img className="img-fluid" src={Pro1} alt="project_1"/>
                            </div>
                            <div className="card-block pt-2">
                                <div className="card-header">
                                    <h3>Project 2</h3>
                                </div>
                                <div className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top card-img-top-250">
                                <img className="img-fluid" src={Pro1} alt="project_1"/>
                            </div>
                            <div className="card-block pt-2">
                                <div className="card-header">
                                    <h3>Project 3</h3>
                                </div>
                                <div className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top card-img-top-250">
                                <img className="img-fluid" src={Pro1} alt="project_1"/>
                            </div>
                            <div className="card-block pt-2">
                                <div className="card-header">
                                    <h3>Project 4</h3>
                                </div>
                                <div className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
};

export default Projects;