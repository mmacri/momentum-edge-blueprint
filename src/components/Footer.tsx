const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Outsourced CIO & IT Advisory",
    "Healthcare IT Solutions",
    "AI Solutions & Governance",
    "Small Office & Remote IT",
    "Partner Enablement",
    "Strategic Go-To-Market"
  ];

  const industries = [
    "Healthcare",
    "Small to Mid-sized Businesses",
    "Small & Remote Offices",
    "Enterprise Technology Providers",
    "MSPs and GSIs"
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Momentum Edge Consulting</h3>
            <p className="text-white/80 mb-6">
              Strategic IT solutions and AI innovation for businesses of every size.
            </p>
            <div className="space-y-2 text-white/80">
              <p>📞 (555) 123-4567</p>
              <p>📧 mike@momentumedgeconsulting.com</p>
              <p>💼 linkedin.com/in/mikemacri</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={`/services#service-${index}`} 
                    className="text-white/80 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xl font-bold mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a 
                    href="/industries" 
                    className="text-white/80 hover:text-blue-400 transition-colors text-sm"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/80 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/80 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/industries" className="text-white/80 hover:text-blue-400 transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Momentum Edge Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/60 hover:text-white transition-colors">
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
