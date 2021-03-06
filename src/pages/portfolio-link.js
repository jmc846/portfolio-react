import React from 'react';
import {Link} from 'react-router-dom';
// import WeatherImg from '../imgs/weather.PNG';
// import MMAImg from '../imgs/mma.png';
// import FitnessImg from '../imgs/workout.PNG';
// import BurgerImg from '../imgs/burger.PNG';
// import TimerImg from '../imgs/timerQuiz.PNG';
// import NoteImg from '../imgs/notetaker.gif';
// import HeadshotImg from '../imgs/headshot.jpg'

function PortfolioLink(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark" id="mainNav">
                <div className="container"><Link to='/' className="navbar-brand js-scroll-trigger">Jonathan Cobb</Link>
                    <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" Link to ="/portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" Link to ="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" Link to ="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="masthead bg-light text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <Link to ={props.href} target="_black">
                        <img src={props.src} alt={props.alt} style={{ maxWidth: '65%' }} />
                    </Link>
                </div>
            </header>

            <section className="page-section bg-dark text-white mb-0" >
                <div className="container">

                    <div className="text-center">
                        <h2 className="page-section-heading d-inline-block text-white">{props.name}</h2>
                    </div>

                    <div className="divider-custom divider-light"></div>


                    <div className="container d-flex align-items-center flex-column">
                        {props.dsc}
                    </div>
                    <div className="row">
                        <div className="col-lg-5 ml-auto mt-5">
                            <Link className="h3 page-section-heading d-inline-block text-primary" Link to ={props.github}>GITHUB</Link>
                        </div>
                        <div className="col-lg-3 mr-auto mt-5">
                            <Link className="h3 page-section-heading d-inline-block text-primary" Link to={props.deployed}>DEPLOYED</Link>
                        </div>
                    </div>
                </div>
                      
            </section>
            

        </div>
    )
}

export default PortfolioLink;