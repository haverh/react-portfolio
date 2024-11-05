import { forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import ResumePDF from "../../assets/files/resume-10-24-2024.pdf";

import "./resume.css";

const Resume = forwardRef<HTMLDivElement>((_, ref) => {

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={ref} className="p-4 pt-20 z-10 bg-[#141414] flex flex-col items-center">
      <button className="my-2 p-2 border w-full max-w-[850px] rounded-2xl"
        onClick={handleDownloadResume}>
        <FontAwesomeIcon icon={faDownload} size="2x" />
        <span className="ml-2 text-2xl">Download Resume</span>
      </button>
      <div className="grow flex justify-center">
        <div className="resume-container w-[850px] border p-4">
          <div className="resume-heading text-center">
            {/* <h2>Haver Ho</h2> */}
            <p><span>Los Angeles, CA</span> | <span>U.S. Citzen </span> | <span>323-899-6778 </span></p>
            <p>
              <span>
                <a href="mailto:haverho.2020@gmail.com">haverho.2020@gmail.com</a>
              </span> | <span>
                <a href="https://www.linkedin.com/in/haverho/" target="_blank">linkedin.com/in/haverho/</a>
              </span> | <span>
                <a href="https://github.com/haverh" target="_blank">github.com/haverh</a>
              </span>
            </p>
          </div>
          <div className="resume-section">
            <h3 className="resume-section-heading">EDUCATION</h3>
            <hr className="bg-[linear-gradient(rgb(131, 37, 238), rgb(228, 214, 138))]"/>
            <div className="resume-section-content">
              <p className="flex justify-between">
                <span>University of California, Irvine</span>
                <span>Irvine, CA</span>
              </p>
              <p className="flex justify-between">
                <span>Computer Science, B.S. | GPA: 3.7</span>
                <span>Aug 2020 &ndash; Mar 2024</span>
              </p>
            </div>
            
          </div>
          <div className="resume-section">
            <h3 className="resume-section-heading">TECHNICAL SKILLS</h3>
            <hr/>
            <div className="resume-section-content">
              <p><span className="font-semibold">Languages:</span> <span>Java, Python, C++, JavaScript, TypeScript, SQL, NoSQL, HTML, CSS</span></p>
              <p><span className="font-semibold">Technologies:</span> <span>React.js, Angular, Node.js, Express.js, Git/Github, AWS, scikit-learn, JUnit, RESTful APIs</span></p>
              <p><span className="font-semibold">Operating Systems:</span> <span>Windows, Linux</span></p>
            </div>
          </div>
          <div className="resume-section">
            <h3 className="resume-section-heading">PROJECTS</h3>
            <hr/>
            <div className="resume-section-content">
              <div className="project-details">
                <p className="flex justify-between">
                  <span>JobHive | <span className="italic">Next.js, Node.js, PostgreSQL</span></span>
                  <span>Mar 2024 &ndash; Present</span>
                </p>
                <div>
                  <ul className="resume-project-desc">
                    <li>Architected a full-stack web application for managing job applications, integrating Supabase for scalable, real-time
                    data handling with PostgreSQL.</li>
                    <li>Developed robust CRUD functionality, empowering users to efficiently manage hundreds of job entries with
                    comprehensive status tracking, resulting in enhanced organizational workflows.</li>
                    <li>Designed a mobile-first, user-focused interface, incorporating a statistics dashboard to dynamically visualized
                    application trends, ensuring seamless cross-device accessiblity and navigation.</li>
                  </ul>
                </div>
              </div>
              <div className="project-details">
                <p className="flex justify-between">
                  <span>GotchaMovies | <span className="italic">React.js, Node.js, PostgreSQL</span></span>
                  <span>Jun 2023 &ndash; Mar 2024</span>
                </p>
                <div>
                  <ul className="resume-project-desc">
                    <li>Developed a responsive movie selling e-commerce platform, integrating secure user authentication and payment
                    processing.</li>
                    <li>Integrated the OMDB API to dynamically fetch and display real-time movie data.</li>
                    <li>Optimized the checkout process by implementing Stripe for secure transactions.</li>
                  </ul>
                </div>
              </div>
              <div className="project-details">
                <p className="flex justify-between">
                  <span>Fabflix | <span className="italic">Java, Apache, JDBC, jQuery, MySQL</span></span>
                  <span>Mar 2023 &ndash; Jun 2023</span>
                </p>
                <div>
                  <ul className="resume-project-desc">
                    <li>Engineered scalable movie-selling platform using AWS EC2, MySQL, Tomcat.</li>
                    <li>Developed ETL pipeline to parse large XML files to augment a database with 1000s of movies.</li>
                    <li>Improved website performance by 15% with connection pooling, replication, and load balancing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-section">
            <h3 className="resume-section-heading">ACTIVITIES</h3>
            <hr/>
            <p className="flex justify-between">
              <span>HackUCI | <span className="italic">JavaScript, Google API, DOM</span></span>
              <span>Feb 2022 | Irvine, CA</span>
            </p>
            <div>
              <ul className="resume-project-desc">
                <li>Developed a location-based web app using JavaScript and Google Maps API to recommend drink shops, displaying
                results on an interactive, embedded map.</li>
                <li>Integrated Google Places API for dynamic search, map rendering, and real-time pinning of nearby shops based on
                user’s geographic location.</li>
                <li>Collaborated with a team to design and develop the app during a 48-hour hackathon, enhancing user experience for
                discovering local shops.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Resume;