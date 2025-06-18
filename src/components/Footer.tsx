
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Outsourced CIO & IT Advisory", path: "/services#cio" },
    { name: "Healthcare IT Solutions", path: "/services#healthcare" },
    { name: "AI Solutions & Governance", path: "/services#ai" },
    { name: "Small Office & Remote IT", path: "/services#small-office" },
    { name: "Partner Enablement", path: "/services#partner" },
    { name: "Strategic Go-To-Market", path: "/services#gtm" }
  ];

  const industries = [
    { name: "Healthcare", path: "/industries" },
    { name: "Small to Mid-sized Businesses", path: "/industries" },
    { name: "Small & Remote Offices", path: "/industries" },
    { name: "Enterprise Technology Providers", path: "/industries" },
    { name: "MSPs and GSIs", path: "/industries" }
  ];

  return (
    <footer className="footer-bg py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="footer-heading">Momentum Edge Consulting</h3>
            <p className="text-gray-300 mb-6 leading-relaxed font-medium">
              Strategic IT solutions and AI innovation for businesses of every size.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="footer-link text-sm font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="footer-heading">Industries</h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link 
                    to={industry.path} 
                    className="footer-link text-sm font-medium"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-link font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="footer-link font-medium">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 font-medium">
              © {currentYear} Momentum Edge Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-green-400 transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-green-400 transition-colors font-medium">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
