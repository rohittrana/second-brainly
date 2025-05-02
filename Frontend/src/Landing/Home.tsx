import { Button } from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { BrainIcon } from "../Components/icons/BrainIcon";
import { Feature } from './Feature';
import { useEffect, useState } from "react";

export function Home() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Feature");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Feature", "HowItWorks", "Testimonials"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
       
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      
      <nav className="flex justify-between p-2 sticky top-0 bg-black/80 backdrop-blur-sm z-10">
        <div className="flex justify-normal text-white items-center">
          <BrainIcon />
          <h1 className="text-xl ml-2"> Second Brain</h1>
        </div>
  
        <div className="flex justify-between list-none gap-6 text-white items-center">
          <li className={`transition-all duration-300 relative ${activeSection === "Feature" ? "text-fuchsia-300" : "hover:text-fuchsia-300"}`}>
            <a 
              href="#Feature"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("Feature");
              }}
              className="relative"
            >
              Features
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-fuchsia-300 transition-transform duration-300 ${activeSection === "Feature" ? "scale-x-100" : "scale-x-0"} origin-left group-hover:scale-x-100`}></span>
            </a>
          </li>
          <li className={`transition-all duration-300 relative ${activeSection === "HowItWorks" ? "text-fuchsia-300" : "hover:text-fuchsia-300"}`}>
            <a 
              href="#HowItWorks"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("HowItWorks");
              }}
              className="relative"
            >
              How It Works
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-fuchsia-300 transition-transform duration-300 ${activeSection === "HowItWorks" ? "scale-x-100" : "scale-x-0"} origin-left group-hover:scale-x-100`}></span>
            </a>
          </li>
          <li className={`transition-all duration-300 relative ${activeSection === "Testimonials" ? "text-fuchsia-300" : "hover:text-fuchsia-300"}`}>
            <a 
              href="#Testimonials"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("Testimonials");
              }}
              className="relative"
            >
              Testimonials
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-fuchsia-300 transition-transform duration-300 ${activeSection === "Testimonials" ? "scale-x-100" : "scale-x-0"} origin-left group-hover:scale-x-100`}></span>
            </a>
          </li>
        </div>
        
        {/* Auth Buttons */}
        <div className="flex justify-between gap-2">
          <Button
            variant="primary"
            size="md"
            text="Signup"
            onClick={() => navigate("/signup")}
          />
          <Button
            variant="primary"
            size="md"
            text="Signin"
            onClick={() => navigate("/signin")}
          />
        </div>
      </nav>
      
      {/* Main Content */}
      <main>
        <Feature id="Feature" />
        {/* Add your HowItWorks and Testimonials components here */}
        {/* <HowItWorks id="HowItWorks" /> */}
        {/* <Testimonials id="Testimonials" /> */}
      </main>
    </>
  );
}