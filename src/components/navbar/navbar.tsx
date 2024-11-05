// import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/files/logo.png";
import { useEffect, useState } from "react";
import clsx from "clsx";

type NavBarProps = {
  onScrollToSection: (sectionName: string) => void;
  activeSection: string;
};

const NavBar: React.FC<NavBarProps> = ({onScrollToSection, activeSection}) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (activeSection === 'introSection') {
      setIsOpen(false);
    }
  }, [activeSection])
  
  const newTabTo = (site: string) => {
    window.open(site, "_blank");
  }

  const emailTo = (email: string) => {
    window.open(email, "_self");
  }

  return (
    <nav className="sticky top-0 z-10 relative flex items-center justify-between p-4 bg-black border text-white">

      <div className="flex-shrink-0">
        <button className="flex items-center">
          <img src={Logo} className="size-[25px]" />
          <h1 className="gradient text-xl font-bold">aver Ho</h1>
        </button>
      </div>

      <div className="desktop-menu">
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4 list-none">
          <li>
            <button className="px-3 py-2 bg-gray-900 rounded hover:bg-gray-700"
              onClick={() => newTabTo("https://github.com/haverh")}>
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </button>
          </li>
          <li>
            <button className="px-3 py-2 bg-gray-900 rounded hover:bg-blue-700"
              onClick={() => newTabTo("https://www.linkedin.com/in/haverho/")}>
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </button>
          </li>
          <li>
            <button className="px-3 py-2 bg-gray-900 rounded hover:bg-green-700"
              onClick={() => emailTo("mailto:haverho.2020@gmail.com")}>
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </button>
          </li>
        </ul>
        
        <ul className="nav-bar flex space-x-1 list-none m-0 p-0 flex h-10">
          <li>
            <button onClick={() => onScrollToSection("introSection")} 
              className={activeSection === 'introSection' ? 'active' : ''}>Home</button>
          </li>
          <li>
            <button onClick={() => onScrollToSection("resumeSection")} 
              className={activeSection === 'resumeSection' ? 'active' : ''}>Resume</button>
          </li>
          <li>
            <button onClick={() => onScrollToSection("aboutSection")} 
              className={activeSection === 'aboutSection' ? 'active' : ''}>About</button>
          </li>
          <li>
            <button onClick={() => onScrollToSection("projectsSection")} 
              className={activeSection === 'projectsSection' ? 'active' : ''}>Projects</button>
          </li>
          {/* <li>
            <button onClick={() => onScrollToSection("contactSection")} 
              className={activeSection === 'contactSection' ? 'active' : ''}>Contact</button>
          </li> */}
        </ul>
      </div>


      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      
      <div className={clsx(
        "mobile-items",
        {
          "open" : isOpen,
        })}>

        <ul className="flex justify-end space-x-4 list-none">
          <li>
            <button className="px-3 py-2 bg-gray-900 rounded hover:bg-gray-700"
              onClick={() => newTabTo("https://github.com/haverh")}>
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </button>
          </li>
          <li>
            <button className="px-3 py-2 bg-gray-900 rounded hover:bg-blue-700"
              onClick={() => newTabTo("https://www.linkedin.com/in/haverho/")}>
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </button>
          </li>
        </ul>

        <hr/>

        <ul className="nav-bar flex flex-col items-end relative space-y-2 list-none">
          <li>
            <button onClick={() => onScrollToSection("introSection")} 
              className={activeSection === 'introSection' ? 'active' : ''}>Home</button>
          </li>
          <li>
            <button onClick={() => onScrollToSection("resumeSection")} 
              className={activeSection === 'resumeSection' ? 'active' : ''}>Resume</button>
          </li>
          <li>
            <button onClick={() => onScrollToSection("aboutSection")} 
              className={activeSection === 'aboutSection' ? 'active' : ''}>About</button>
          </li>
          <li>
            <button onClick={() => onScrollToSection("projectsSection")} 
              className={activeSection === 'projectsSection' ? 'active' : ''}>Projects</button>
          </li>
          <li>
            <button onClick={() => onScrollToSection("contactSection")} 
              className={activeSection === 'contactSection' ? 'active' : ''}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;