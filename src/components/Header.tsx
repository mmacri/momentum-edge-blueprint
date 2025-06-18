
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    "Outsourced CIO & IT Advisory",
    "Healthcare IT Solutions", 
    "AI Solutions & Governance",
    "Small Office & Remote IT",
    "Partner Enablement",
    "Strategic Go-To-Market"
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Momentum Edge Consulting
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#service-${index}`}
                      className="block py-2 px-3 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#industries" className="text-gray-700 hover:text-primary transition-colors">
              Industries
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
            
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold">
              Free Strategy Session
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </a>
              <div>
                <p className="text-gray-900 font-semibold mb-2">Services</p>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={`#service-${index}`}
                    className="block py-1 pl-4 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                ))}
              </div>
              <a href="#industries" className="text-gray-700 hover:text-primary transition-colors">
                Industries
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </a>
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold w-full">
                Free Strategy Session
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
