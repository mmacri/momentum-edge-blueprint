
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary to-primary/90 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Accelerate Your Business with 
            <span className="text-accent block mt-2">Strategic IT Solutions & AI Innovation</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Robust, customized technology consulting services tailored to businesses of every size—from healthcare practices and small remote offices to enterprise clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 text-lg hover-scale"
            >
              Book Your Free Strategy Session
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Core Service Pillars */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover-scale"
              >
                <p className="font-semibold text-sm lg:text-base">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
