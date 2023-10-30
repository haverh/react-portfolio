import React from 'react';
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import profile from '../../images/profile.jpg';
import linkedin from '../../images/icon-linked-in-30.png';
import github from '../../images/icon-github-30.png';
import resume from '../../images/icon-resume-50.png';

import python from '../../images/icon-python-48.png';
import java from '../../images/icon-java-48.png';
import javascript from '../../images/icon-javascript-48.png';
import html from '../../images/icon-html-48.png';
import css from '../../images/icon-css3-48.png';
import sql from '../../images/icon-sql-48.png';

import react from '../../images/icon-react-48.png';
import node from '../../images/icon-nodejs-48.png';
import jquery from '../../images/icon-jquery-48.png';
import bootstrap from '../../images/icon-bootstrap-48.png';

import git from '../../images/icon-git-48.png';
import vscode from '../../images/icon-vs-code-48.png';
import sublime from '../../images/icon-sublime-text-48.png';
import intellij from '../../images/icon-intellij-idea-48.png';
import eclipse from '../../images/icon-java-eclipse-48.png';

import fablix from '../../images/fabflix-main.png';
import searchEngine from '../../images/search-engine-main.png';
import drinkSearch from '../../images/drinkSearch.png';

const Main = () => {
    return (
        <div className="content">
            <div className="landing-content">
                <div className="profile-container">
                    <img className="landing-img" src={profile} alt="Profile"/>
                    <div className="profile-link">
                        <a href="https://www.linkedin.com/in/haverho/"><img
                                style={{backgroundColor: "aliceblue", borderRadius: "5px"}} src={linkedin}
                                alt="LinkedIn Icon"/>
                        </a>
                        <a href="https://github.com/haverh"><img style={{backgroundColor: "aliceblue", borderRadius: "5px"}}
                                src={github} alt="GitHub Icon"/>
                        </a>
                        <a href="downloadables/Resume.pdf" download><img
                                style={{backgroundColor: "aliceblue", borderRadius: "5px"}} src={resume}
                                alt="Resume Icon"/>
                        </a>
                    </div>
                </div>
                <article>
                    <h2>hello.<br/> i'm Haver Ho</h2>
                    <h2>i enjoy Learning and Coding for the Web.</h2>
                    <h2>i'm a Passionate and Motivated student with a strong Enthusiasm for learning and coding for the Web.
                    </h2>
                </article>

            </div>
            
            <section id="skills">
                <h2 className="section-title">Tech Stack</h2>
                <div className="skills-container">
                    <article className="skills-content">
                        <h3>Languages</h3>
                        <div className="icons-container">
                            <img src={python} alt="Python Icon"/>
                            <img style={{width: "42px", backgroundColor: "rgba(240, 248, 255, 0.658)", padding: "3px", borderRadius: "30%"}}
                                src={java} alt="Java Icon"/>
                            <img src={javascript} alt="JavaScript Icon"/>
                            <img src={html} alt="HTML Icon"/>
                            <img src={css} alt="CSS Icon"/>
                            <img src={sql} alt="SQL Icon"/>
                        </div>
                    </article>

                    <article className="skills-content">
                        <h3>Frameworks/Libraries</h3>
                        <div className="icons-container">
                            <img src={react} alt="React Icon"/>
                            <img style={{width: "42px", backgroundColor: "rgba(240, 248, 255, 0.658)", padding: "3px", borderRadius: "30%"}}
                                src={node} alt="NodeJS Icon"/>
                            <img src={jquery} alt="jQuery Icon"/>
                            <img src={bootstrap} alt="Bootstrap Icon"/>
                        </div>
                    </article>

                    <article className="skills-content">
                        <h3>Developer Tools</h3>
                        <div className="icons-container">
                            <img src={git} alt="Git Icon"/>
                            <img src={vscode} alt="VS Code IDE Icon"/>
                            <img src={sublime} alt="Sublime Text IDE Icon"/>
                            <img src={intellij} alt="IntelliJ IDE Icon"/>
                            <img src={eclipse} alt="Eclipse IDE Icon"/>
                        </div>

                    </article>
                </div>
            </section>
            
            <section id="projects">
                <h1 className="section-title">Projects</h1>
                <div className="projects-container">
                    <article className="project">
                        <img src={fablix} alt="Project 1 browsing page" class="project-img"/>
                        <h2 className="project-title">Fabflix</h2>
                        <div>
                            <button className="showcase-btn">Github</button>
                            <button className="showcase-btn">Live Demo</button>
                        </div>
                    </article>
                    <article className="project">
                        <img src={searchEngine} alt="Project 2 search engine" class="project-img"/>
                        <h2 className="project-title">valgrind.lookup</h2>
                        <div>
                            <button className="showcase-btn"
                                onclick="window.location.href='https://github.com/haverh/search-engine/'">Github</button>
                            <button className="showcase-btn">Live Demo</button>
                        </div>
                    </article>
                    <article className="project">
                        <img src={drinkSearch} alt="Project 3 landing page" class="project-img"/>
                        <h2 className="project-title">drinkSearch</h2>
                        <div>
                            <button className="showcase-btn"
                                onclick="window.location.href='https://github.com/haverh/drinkSearch2.0'">Github</button>
                            <button className="showcase-btn"
                                onclick="window.location.href='https://haverh.github.io/drinkSearch2.0/'">Live Demo</button>
                        </div>
                    </article>
                </div>
            </section>
            <a href="#" className="back-to-top" aria-label="Back to Top">
                <FontAwesomeIcon icon={faArrowUp} style={{color: "#39b3c9"}}/>
            </a>
        </div>
    )
    
}

export default Main;