import './App.css'
import { useEffect, useRef, useState } from 'react'

import Intro from './components/introduction/intro'
import NavBar from './components/navbar/navbar'
import Resume from './components/resume/resume'
import AboutMe from './components/about-me/about-me'
import Projects from './components/projects/projects'
// import ContactMe from './components/contact-me/contact-me'
import BackToTop from './components/back-to-top/back-to-top'

function App() {

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    introSection: useRef<HTMLDivElement>(null),
    resumeSection: useRef<HTMLDivElement>(null),
    aboutSection: useRef<HTMLDivElement>(null),
    projectsSection: useRef<HTMLDivElement>(null),
    contactSection: useRef<HTMLDivElement>(null),
  };

  const [activeSection, setActiveSection] = useState<string>('introSection');

  const scrollToSection = (sectionName: string) => {
    sectionRefs[sectionName]?.current?.scrollIntoView({ behavior: 'smooth',  });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold to decide when a section is active
    );

    Object.entries(sectionRefs).forEach(([sectionName, ref]) => {
      if (ref.current) {
        ref.current.id = sectionName; // Set each section's ID
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return (
    <div className='h-full'>
      <Intro onScrollToSection={scrollToSection} ref={sectionRefs.introSection} />
      <NavBar onScrollToSection={scrollToSection} activeSection={activeSection} />
      <Resume ref={sectionRefs.resumeSection} />
      <AboutMe ref={sectionRefs.aboutSection} />
      <Projects ref={sectionRefs.projectsSection} />
      {/* <ContactMe ref={sectionRefs.contactSection} /> */}

      <BackToTop onScrollToSection={scrollToSection} />
    </div>
  )
}

export default App;
