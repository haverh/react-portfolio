import { forwardRef } from "react";
import MyParticles from "./particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import "./intro.css";


type IntroProps = {
  onScrollToSection: (sectionName: string) => void;
};

const Intro = forwardRef<HTMLDivElement, IntroProps>(({ onScrollToSection }, ref) => {

  return (
    <div ref={ref} id="home" className="relative h-screen flex justify-center items-center p-4">
      <MyParticles />
      <div className="relative text-4xl font-medium poppins-font z-10">
        <p className="my-8">Hello, I'm <span className="gradient font-black">Haver</span></p>
        <p className="my-8">An aspiring Full Stack Developer.</p>
      </div>

      <button className="absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full hover:bg-gray-600 p-2" onClick={() => onScrollToSection("resumeSection")}>
        <FontAwesomeIcon icon={faCircleDown} size="2x" />
      </button>

    </div>
  )
});

export default Intro;