import { forwardRef } from "react";

import "./about-me.css"

import ProfilePic from "../../assets/profile/profile-32.png";

import ReactIcon from "../../assets/icons/react-icon.svg";
import NextIcon from "../../assets/icons/next-icon-light.svg";
import PostgresIcon from "../../assets/icons/postgresql-icon.svg";
import GitIcon from "../../assets/icons/git-icon.svg";
import NodeIcon from "../../assets/icons/nodejs-icon.svg";
import HTMLIcon from "../../assets/icons/html-icon.svg";
import TailwindIcon from "../../assets/icons/tailwind-icon.svg";
import JavaScriptIcon from "../../assets/icons/javascript-icon.svg";

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {

  const icons = [
    {title: "React.js", icon: ReactIcon, alt: ""},
    {title: "Next.js", icon: NextIcon, alt: ""},
    {title: "PostgreSQL", icon: PostgresIcon, alt: ""},
    {title: "Git", icon: GitIcon, alt: ""},
    {title: "Node.js", icon: NodeIcon, alt: ""},
    {title: "HTML", icon: HTMLIcon, alt: ""},
    {title: "Tailwind CSS", icon: TailwindIcon, alt: ""},
    {title: "JavaScript", icon: JavaScriptIcon, alt: ""},
  ]

  return (
    <div ref={ref} id="about-me" className="flex flex-col p-4 z-10 bg-[#141414] 2xl:flex-row 2x:h-screen">
    <div className="mb-8 2xl:w-1/2 2xl:mb-0">
      <h2 className=" poppins-font">ABOUT ME</h2>
      <div className="flex justify-center p-4">
        <div className="profile-container">
          <img className="object-fit object-center size-[300px] mx-auto border border-solid border-[#f5deb3] rounded-full"
            src={ProfilePic} alt="Profile Picture"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <p className="max-w-[550px] p-4 justify-center text-lg">
          I'm a recent Computer Science graduate and a full-stack developer 
          specializing in Node.js, PostgreSQL, Next.js, React.js, and Tailwind CSS. 
          I also have experience programming in Python, JavaScript, and sometimes 
          Java. I’m passionate about building intuitive, user-friendly applications 
          and enjoy crafting clean, efficient code. Currently, I’m looking for 
          opportunities where I can grow, contribute, and apply my skills to 
          real-world projects. If you're looking for a developer eager to 
          learn and make an impact, let's chat!
        </p>
      </div>
      
    </div>

    <div className="bg-black flex justify-center items-center 2xl:h-screen 2xl:w-1/2">
      <div className="tech-grid">

        <div className="tech-stack"><h3>TECH STACK</h3></div>
        {icons.map(item => (
          <div key={item.title} className="tech-card">
            <div className="tech-brand">
              <div className="icon-wrapper">
                <img className="icon" src={item.icon} alt={item.alt}/>
              </div>          
              <p className="icon-title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
});

export default AboutMe;