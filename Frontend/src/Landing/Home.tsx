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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
        {/* Radial dot background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

        {/* Content Layer */}
        <div className="relative z-10">
          {/* Navbar */}
          <nav className="flex justify-between items-center p-3 bg-[#000921] bg-opacity-95 border-b border-[#ffffff20] sticky top-0 z-20 shadow-md backdrop-filter backdrop-blur-sm">
            {/* Brand */}
            <div className="flex items-center text-white">
              <BrainIcon className="w-7 h-7 text-white transition-transform duration-300 hover:rotate-3" />
              <h1 className="text-xl font-bold ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400">
                Second Brain
              </h1>
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-8 text-white items-center list-none">
              <li className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
                <button onClick={() => scrollToSection("Feature")} className="font-medium">
                  Features
                </button>
              </li>
              <li className="cursor-pointer hover:text-fuchsia-400 transition-colors duration-300">
                <button onClick={() => scrollToSection("Working")} className="font-medium">
                  How It Works
                </button>
              </li>
              <li className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
                <button onClick={() => scrollToSection("Testimonials")} className="font-medium">
                  Testimonials
                </button>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="flex gap-3">
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

          {/* Page Sections */}
          <Feature id="Feature" />
          <Working id="Working" />
          <Testimonials id="Testimonials" />
        </div>
      </div>
    </>
  );
}
