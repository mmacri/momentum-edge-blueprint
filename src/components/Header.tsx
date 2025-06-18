
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: "Outsourced CIO & IT Advisory", path: "/services#cio" },
    { name: "Healthcare IT Solutions", path: "/services#healthcare" }, 
    { name: "AI Solutions & Governance", path: "/services#ai" },
    { name: "Small Office & Remote IT", path: "/services#small-office" },
    { name: "Partner Enablement", path: "/services#partner" },
    { name: "Strategic Go-To-Market", path: "/services#gtm" }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
              Momentum Edge Consulting
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <Link to="/services" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.path}
                      className="block py-2 px-3 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/industries" className="text-gray-700 hover:text-primary transition-colors">
              Industries
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            
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
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </Link>
              <div>
                <Link to="/services" className="text-gray-900 font-semibold mb-2 block">Services</Link>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.path}
                    className="block py-1 pl-4 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <Link to="/industries" className="text-gray-700 hover:text-primary transition-colors">
                Industries
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </Link>
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
