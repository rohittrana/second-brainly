import { Button } from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { BrainIcon } from "../Components/icons/BrainIcon";
import { Feature } from "./Feature";
import { Working } from "./Working";
import { Testimonials } from "./Testimoinal";

export function Home() {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <div className="relative h-full w-full bg-white"><div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <nav className="flex justify-between p-3 bg-[#000921] bg-opacity-95 border-b border-[#ffffff20] sticky top-0 z-10 shadow-md backdrop-filter backdrop-blur-sm">
        <div className="flex items-center justify-normal text-white">
          <BrainIcon />
          <h1 className="text-xl font-bold ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400"> Second Brain</h1>
        </div>
        
        <div className="flex justify-between list-none gap-8 text-white items-center">
          <li className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
            <button onClick={() => scrollToSection("Feature")} className="font-medium">Features</button>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-400 transition-colors duration-300">
            <button onClick={() => scrollToSection("Working")} className="font-medium">How It Works</button>
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
            <button onClick={() => scrollToSection("Testimonials")} className="font-medium">Testimonials</button>
          </li>
        </div>
        
        <div className="flex justify-between gap-3">
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
      
      <Feature id="Feature" />
      <Working id="Working" />
      <Testimonials id="Testimonials" />
      </div>
    </>
    
  );
}