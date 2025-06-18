
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero-bg py-24 lg:py-36">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white">
            Your Strategic Technology Partner
            <span className="text-green-400 block mt-4">From Virtual CIO Leadership to AI Innovation</span>
          </h1>
          
          <p className="text-lg lg:text-xl xl:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
            Comprehensive technology consulting and strategic IT leadership for businesses of every size. 
            No long-term contracts. 100% vendor-neutral advice. Enterprise expertise with startup agility.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Free Strategy Session Request&body=Hello, I would like to schedule a free strategy session to discuss my business technology needs."
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Book Your Free Strategy Session
            </a>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-green-400 bg-green-500 text-white hover:bg-green-600 hover:border-green-500 font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>

          {/* Enhanced Core Service Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Virtual CIO & IT Leadership",
                description: "Strategic technology roadmaps and executive-level IT guidance without the full-time cost"
              },
              {
                title: "Healthcare IT Solutions",
                description: "HIPAA-compliant technology management for medical and dental practices"
              },
              {
                title: "Cybersecurity & Compliance",
                description: "Virtual CISO services and compliance frameworks (HIPAA, SOC 2, NIST)"
              },
              {
                title: "AI Solutions & Governance",
                description: "Responsible AI implementation with custom applications and governance frameworks"
              },
              {
                title: "Cloud & Infrastructure",
                description: "Complete cloud migrations, Office 365 implementations, and IT infrastructure optimization"
              },
              {
                title: "Small Office IT Setup",
                description: "New office setups, relocations, and complete IT solutions for small and remote offices"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 group cursor-pointer"
              >
                <h3 className="font-semibold text-lg text-slate-900 group-hover:text-green-600 transition-colors duration-300 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Competitive Differentiators */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Momentum Edge?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "100% Vendor Neutral",
                  description: "Objective advice with no product sales bias"
                },
                {
                  title: "Flexible Engagements", 
                  description: "Project-based or ongoing - no long-term contracts"
                },
                {
                  title: "Enterprise Expertise",
                  description: "Fortune 500 experience for businesses of all sizes"
                },
                {
                  title: "AI & Innovation Ready",
                  description: "Leading-edge technology guidance and governance"
                }
              ].map((differentiator, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold text-green-400 mb-2">{differentiator.title}</h4>
                  <p className="text-sm text-gray-200">{differentiator.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg mb-4">
              Ready to accelerate your business with strategic technology leadership?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <Link to="/services" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                View Complete Service Portfolio →
              </Link>
              <Link to="/industries" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                See Industries We Serve →
              </Link>
              <Link to="/contact" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                Schedule Free Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
