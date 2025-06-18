
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero-bg py-24 lg:py-36">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white">
            Accelerate Your Business with 
            <span className="text-green-400 block mt-4">Strategic IT Solutions & AI Innovation</span>
          </h1>
          
          <p className="text-lg lg:text-xl xl:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
            Robust, customized technology consulting services tailored to businesses of every size—from healthcare practices and small remote offices to enterprise clients.
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

          {/* Core Service Pillars with Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "CIO & IT Advisory",
                description: "Strategic technology leadership for businesses ready to scale"
              },
              {
                title: "Healthcare IT",
                description: "HIPAA-compliant solutions for medical and dental practices"
              },
              {
                title: "AI Solutions & Governance",
                description: "Custom AI applications with responsible implementation frameworks"
              },
              {
                title: "Partner Enablement",
                description: "Revenue acceleration programs for technology partnerships"
              },
              {
                title: "Small Office IT",
                description: "Complete IT solutions for small and remote offices"
              },
              {
                title: "Strategic Go-To-Market",
                description: "End-to-end GTM strategy for technology companies"
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

          {/* Quick Navigation Hints */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg mb-4">
              Ready to transform your business technology?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <Link to="/services" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                View Detailed Services →
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
