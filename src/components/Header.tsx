
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
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
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-300">
              <img 
                src="/lovable-uploads/ca0223ac-21cf-453e-aabf-f56e6ca95a25.png" 
                alt="Momentum Edge Consulting" 
                className="h-20 w-auto lg:h-24"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <Link to="/services" className="flex items-center nav-link">
                Services
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200">
                <div className="p-4">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.path}
                      className="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-green-500 hover:bg-green-50 rounded-md transition-all duration-300"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/industries" className="nav-link">
              Industries
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover-scale shadow-lg">
              Free Strategy Session
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium py-2">
                Home
              </Link>
              <div>
                <Link to="/services" className="text-gray-900 font-semibold mb-3 block hover:text-green-500 transition-colors py-2">
                  Services
                </Link>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.path}
                    className="block py-2 pl-4 text-sm font-medium text-gray-600 hover:text-green-500 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <Link to="/industries" className="text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium py-2">
                Industries
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium py-2">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium py-2">
                Contact
              </Link>
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold w-full py-3 rounded-lg transition-all duration-300 shadow-lg mt-4">
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
