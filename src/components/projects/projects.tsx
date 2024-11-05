
import "./projects.css";

import JobHiveSS from "../../assets/projects/jobhive/jobhive.png"
import FabflixSS from "../../assets/projects/fablix/fabflix.png";
import MangoReedSS from "../../assets/projects/mango-reed/chapter-page.png";
import SleepTrackerSS1 from "../../assets/projects/sleeptracker/sleeptracker.png";
import SleepTrackerSS2 from "../../assets/projects/sleeptracker/sleeptracker-2.png";
import SleepTrackerSS3 from "../../assets/projects/sleeptracker/sleeptracker-3.png";
import GotchaMoviesSS from "../../assets/projects/gotcha-movies/gotcha-movies-top.png";
import { forwardRef } from "react";


const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  const projects = [
    {title: "JobHive", screenshots: [JobHiveSS], 
      desc: "A full-stack web application for managing job applications, built with Node.js and PostgreSQL, that allows users to efficiently track hundreds of entries with comprehensive status updates. It features a mobile-first design and a statistics dashboard for visualizing application trends, ensuring seamless accessibility across devices.",
      showcases: [
        {type: "Live Demo", url: "https://jobhive-eta.vercel.app/"},
        {type: "Github", url: "https://github.com/haverh/jobhive"}
      ]},
    {title: "Fabflix", screenshots: [FabflixSS], 
      desc: "A scalable movie-selling platform built with Java, Apache, AJAX, JDBC, and jQuery, hosted on AWS EC2 and using MySQL. It features an ETL pipeline for parsing large XML files to enhance a database of thousands of movies, with website performance improved by 15% through connection pooling, replication, and load balancing.",
      showcases: [
        {type: "Video Demo", url: "https://www.youtube.com/watch?v=SvKjiEYw5qw"},
      ]},
    {title: "MangoReed", screenshots: [MangoReedSS], 
      desc: "A manga reader app designed with accessibility features and intuitive hand gesture controls, built using Angular and Bootstrap. It leverages the MangaDex API to seamlessly fetch and display manga and manhwa content, ensuring a responsive and user-friendly interface.",
      showcases: [
        {type: "Video Demo", url: "https://www.youtube.com/watch?v=d9sg_CgOvTw"},
        {type: "Github", url: "https://github.com/haverh/MangoReed"}
      ]},
    {title: "Sleep Tracker", screenshots: [SleepTrackerSS1, SleepTrackerSS2, SleepTrackerSS3], 
      desc: "A sleep tracker app built on the Ionic framework that allows users to monitor overnight sleep patterns and daytime sleepiness. The app backs up logged data to local storage using Capacitor Storage, providing a user-friendly interface for tracking and analyzing sleep habits.",
      showcases: [
        {type: "Video Demo", url: "https://www.youtube.com/watch?v=oOvWoSe5w-U"},
        {type: "Github", url: "https://github.com/haverh/sleeptracker"}
      ]},
    {title: "GotchaMovies", screenshots: [GotchaMoviesSS], 
      desc: "A responsive movie-selling e-commerce platform built with React, Node.js, and PostgreSQL, featuring secure user authentication and payment processing. It integrates the OMDB API to dynamically fetch and display real-time movie data, with an optimized checkout process using Stripe for secure transactions.",
      showcases: [
        {type: "Live Demo", url: "https://gotcha-movies-client.vercel.app/"},
        {type: "Github", url: "https://github.com/haverh/gotcha-movies"}
      ]},
  ]

  return (
    <div ref={ref} id="projects" className="projects-section p-4 z-10 bg-[#141414]">
      <h2 className="poppins-font">PROJECTS</h2>
      <div className="projects-content flex justify-center">
        <div className="projects-container grid w-full gap-[20px]">
          {projects.map(project => (
            <div key={project.title} className="project-card border-gradient">
              {project.screenshots.map((screenshot, index) => (
                <img key={index} src={screenshot} />
              ))}
              <div className="project-detail">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-btns">
                  {project.showcases.map(showcase => (
                    <button className="project-btn" onClick={() => window.open(showcase.url, "_blank")}>{showcase.type}</button>
                  ))}
                </div>
                <div className="project-desc">
                  <p>
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
});

export default Projects;