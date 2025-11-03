
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: "All Services", path: "/services" },
    { name: "Areas of Expertise", path: "/expertise" },
    { name: "Outsourced CIO & IT Advisory", path: "/services#cio" },
    { name: "Healthcare IT Solutions", path: "/services#healthcare" }, 
    { name: "AI Solutions & Governance", path: "/services#ai" },
    { name: "Small Office & Remote IT", path: "/services#small-office" },
    { name: "Partner Enablement", path: "/services#partner" },
    { name: "Strategic Go-To-Market", path: "/services#gtm" }
  ];

  // Use the MEC logo
  const logoPath = "/mec-logo.png";

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 hover:scale-105">
              <img 
                src={logoPath}
                alt="Momentum Edge Consulting - MEC" 
                className="h-16 w-auto md:h-20 lg:h-24 object-contain"
                onError={(e) => {
                  console.error("Logo failed to load:", logoPath);
                  // Fallback to text if image fails
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.innerHTML = '<h1 class="text-2xl font-bold text-green-600">Momentum Edge Consulting</h1>';
                  e.currentTarget.parentNode?.appendChild(fallback);
                }}
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
                      className="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-all duration-300"
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
            
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Free Strategy Session Request&body=Hello, I would like to schedule a free strategy session to discuss my business technology needs."
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover-scale shadow-lg inline-flex items-center justify-center"
              style={{ boxShadow: '0 4px 14px rgba(20, 184, 166, 0.4)' }}
            >
              Free Strategy Session
            </a>
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
                    className="block py-2 pl-4 text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors duration-300"
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
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Free Strategy Session Request&body=Hello, I would like to schedule a free strategy session to discuss my business technology needs."
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold w-full py-3 rounded-lg transition-all duration-300 shadow-lg mt-4 text-center inline-block"
              >
                Free Strategy Session
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
