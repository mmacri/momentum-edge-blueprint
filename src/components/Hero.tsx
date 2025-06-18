
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
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Your Free Strategy Session
            </Button>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300"
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
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 group cursor-pointer"
              >
                <p className="font-semibold text-lg text-slate-900 group-hover:text-green-600 transition-colors duration-300">
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
