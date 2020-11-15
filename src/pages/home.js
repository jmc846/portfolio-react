import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import WeatherImg from '../imgs/weather.PNG';
import MMAImg from '../imgs/mma.png';
import FitnessImg from '../imgs/workout.PNG';
import BurgerImg from '../imgs/burger.PNG';
import TimerImg from '../imgs/timerQuiz.PNG';
import NoteImg from '../imgs/notetaker.gif';
import HeadshotImg from '../imgs/headshot.jpg'

function ToRenderEverything(){
    useEffect( () => {
        console.log("on-load");
    }, []);

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark" id="mainNav">
                <div className="container"><Link to ='https://github.com/jmc846/reactPortfolio/#/' className="navbar-brand js-scroll-trigger">Jonathan Cobb</Link>
                    <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><Link to={{hash: "portfolio"}} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to={{hash: "about"}} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">ABOUT</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to={{hash: "#contact"}} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="masthead bg-light text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <img className="masthead-avatar mb-5 rounded-circle" src={HeadshotImg} alt="myself"/>
                    
                    <h1 className="masthead-heading mb-0 text-dark">I'm an aspiring web developer from North Carolina, looking to break-into the Industry.</h1>
                </div>
            </header>

            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="page-section-heading text-secondary mb-0 d-inline-block">PORTFOLIO</h2>
                    </div>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-book-open"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row justify-content-center">
                        
                    <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/pwr" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src={WeatherImg} alt="Weather App"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/rt" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src={MMAImg} alt="MMA project"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/fsf" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src={FitnessImg} alt="Fitness App"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/mma" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src={BurgerImg} alt="Burger app"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/irlm" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src={TimerImg} alt="Timer Quiz"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/pgen" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src={NoteImg} alt="Note Taker"/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="page-section bg-dark text-white mb-0" id="about">
                <div className="container">
                    
                    <div className="text-center" id="about">
                        <h2 className="page-section-heading d-inline-block text-white">ABOUT</h2>
                    </div>
                    
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-user"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 ml-auto">
                            <p className="pre-wrap lead">
                            I can create effective, efficient, user-friendly and enjoyable web applications for a wide
                            variety of uses. I learn quickly and I'm not afraid to try new ways of doing things.</p>
                        </div>
                        <div className="col-lg-4 mr-auto">
                            <p className="pre-wrap lead">My personal journey as a web developer has only just begun. I'm a lifelong learner and see every challenge as an opportunity to learn and grow.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section" id="contact">
                <div className="container">
                    
                    <div className="text-center">
                        <h2 className="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
                    </div>
                    
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-exclamation"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="d-flex flex-column align-items-center">
                                <a className="icon-contact mb-3 bg-primary" href="tel:9106840230"><i className="fas fa-phone"></i></a>
                                <div className="text-muted">Phone</div>
                                <a className="lead font-weight-bold text-primary" href="tel:9106840230">(910) 684-0230</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex flex-column align-items-center">
                                <a className="icon-contact mb-3 bg-primary" href="mailto:jmco846@scarletmail.rutgers.edu"><i className="far fa-envelope"></i></a>
                                <div className="text-muted">Email</div><a className="lead font-weight-bold text-primary" href="jmc846@scarletmail.rutgers.edu">jmc846@scarletmail.rutgers.edu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer text-center bg-dark">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h4 className="mb-4">LOCATION</h4>
                            <p className="pre-wrap lead mb-0">Fayetteville, North Carolina</p>
                        </div>
                        
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h4 className="mb-4">LEARN MORE</h4>
                            <Link className="btn btn-outline-light btn-social mx-1" Link to="https://github.com/jmc846/portfolio-react"><i className="fab fa-fw fa-github"></i></Link>
                            <Link className="btn btn-outline-light btn-social mx-1" Link to="./public/Jonathan_Cobb_Resume.pdf"><i className="fas fa-file-pdf "></i></Link>
                            <Link className="btn btn-outline-light btn-social mx-1" Link to="https://www.linkedin.com/in/jonathan-cobb-0a479222/"><i className="fab fa-fw fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default ToRenderEverything;