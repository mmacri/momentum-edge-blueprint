import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32 overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 animate-pulse"></div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30"></div>
      {/* Accent glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white">
                Strategic IT Solutions &{" "}
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-bold">AI Innovation</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed font-medium">
                Get Fortune 500-level technology leadership without the full-time cost. 
                Expert CIO advisory, IT across Industries, workplace IT Solutions, and AI to meet your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="mailto:momentumedgeconsulting@gmail.com?subject=Free Technology Assessment Request&body=Hello, I would like to schedule a complimentary technology assessment to discuss my business needs."
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center group"
                  style={{ boxShadow: '0 8px 24px rgba(20, 184, 166, 0.5)' }}
                >
                  Get Free Assessment
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <Link to="/services">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                  >
                    View Services
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center group">
                  <CheckCircle className="text-teal-400 mr-3 group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-medium text-white">No Long-Term Contracts</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="text-teal-400 mr-3 group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-medium text-white">100% Vendor Neutral</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="text-teal-400 mr-3 group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-medium text-white">20+ Years Experience</span>
                </div>
                <div className="flex items-center group">
                  <CheckCircle className="text-teal-400 mr-3 group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-medium text-white">Regulatory & InfoSec Compliance</span>
                </div>
              </div>
            </div>

            <div className="animate-scale-in lg:pl-8">
              <div className="relative">
                {/* Glow effect behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-teal-400/30"
                     style={{ boxShadow: '0 0 40px rgba(20, 184, 166, 0.2)' }}>
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Why Choose Momentum Edge?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start group/item">
                      <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full p-2 mr-4 mt-1 group-hover/item:scale-110 transition-transform">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">Strategic Leadership</h4>
                        <p className="text-gray-100 text-sm">CIO-level guidance without the executive salary</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full p-2 mr-4 mt-1 group-hover/item:scale-110 transition-transform">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">GRC & InfoSec Excellence</h4>
                        <p className="text-gray-100 text-sm">Comprehensive governance, risk management, and compliance solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full p-2 mr-4 mt-1 group-hover/item:scale-110 transition-transform">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">AI Innovation</h4>
                        <p className="text-gray-100 text-sm">Responsible AI implementation and governance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
