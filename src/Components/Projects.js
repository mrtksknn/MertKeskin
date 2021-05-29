import React from "react";
import "../Styles/Projects.css";
import Pro1 from "../Images/pro1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {

    return <div className="Projects">
        <section className="pt-3">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Projects</h1>
                    </div>
               </div>
        </section>
        <section className="carousel slider" data-ride="carousel" id="postsCarousel">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-right mb-4">
                        <a className="btn btn-outline-secondary prev" href="/" title="go back">
                            <i className="fa fa-lg fa-chevron-left"></i>
                        </a>
                        <a className="btn btn-outline-secondary next" href="/" title="more">
                            <i className="fa fa-lg fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
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
                </div>
                <div className="row row-equal carousel-item m-t-0">
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
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top card-img-top-250">
                                <img className="img-fluid" src={Pro1} alt="project_1"/>
                            </div>
                            <div className="card-block pt-2">
                                <div className="card-header">
                                    <h3>Project 5</h3>
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
                                    <h3>Project 6</h3>
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