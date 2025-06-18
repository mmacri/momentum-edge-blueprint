
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero-bg py-24 lg:py-36">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight hero-text">
            Accelerate Your Business with 
            <span className="text-green-400 block mt-4">Strategic IT Solutions & AI Innovation</span>
          </h1>
          
          <p className="text-lg lg:text-xl xl:text-2xl mb-12 hero-subtitle max-w-4xl mx-auto leading-relaxed">
            Robust, customized technology consulting services tailored to businesses of every size—from healthcare practices and small remote offices to enterprise clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="primary-cta text-lg px-10 py-5 hover-scale"
            >
              Book Your Free Strategy Session
            </Button>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="secondary-cta text-lg px-10 py-5 border-white text-white hover:bg-white/20"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>

          {/* Core Service Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "CIO & IT Advisory",
              "Healthcare IT",
              "AI Solutions & Governance",
              "Partner Enablement",
              "Small Office IT",
              "Strategic Go-To-Market"
            ].map((service, index) => (
              <div 
                key={index} 
                className="service-tile group bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <p className="font-semibold text-lg text-white group-hover:text-green-400 transition-colors duration-300">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
