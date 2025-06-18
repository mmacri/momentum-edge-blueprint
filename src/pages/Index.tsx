
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Shield, Hospital, Bot, CheckCircle, Star } from "lucide-react";

const Index = () => {
  console.log("Index component starting to render...");
  console.log("Current location:", window.location.href);
  
  try {
    const highlights = [
      {
        title: "Virtual CIO Strategy",
        description: "Strategic technology roadmaps and executive-level IT guidance without the full-time cost",
        icon: Target,
        color: "text-blue-500"
      },
      {
        title: "Cybersecurity & Compliance",
        description: "Virtual CISO services and compliance frameworks with proven expertise in regulated industries",
        icon: Shield,
        color: "text-yellow-500"
      },
      {
        title: "Healthcare IT Specialists", 
        description: "HIPAA-compliant solutions for dental and medical practices with 20+ years of healthcare experience",
        icon: Hospital,
        color: "text-red-500"
      },
      {
        title: "AI Solutions & Guidance",
        description: "Responsible AI implementation with custom applications and governance frameworks for emerging regulations",
        icon: Bot,
        color: "text-purple-500"
      }
    ];

    const testimonials = [
      {
        quote: "Momentum Edge transformed our technology strategy. Their vendor-neutral approach saved us significant costs while improving our security posture.",
        author: "Healthcare Practice Administrator",
        industry: "Healthcare",
        rating: 5
      },
      {
        quote: "Finally, a technology partner that understands business strategy, not just technical implementation. Their Virtual CIO service has been game-changing.",
        author: "Small Business Owner", 
        industry: "Professional Services",
        rating: 5
      }
    ];

    const keyStats = [
      { number: "20+", label: "Years Healthcare IT Experience" },
      { number: "100%", label: "Vendor Neutral Approach" }
    ];

    console.log("Index data initialized successfully");
    console.log("Highlights count:", highlights.length);
    console.log("Stats count:", keyStats.length);

    return (
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
                Enterprise Expertise. Startup Agility. No Long-Term Contracts.
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Get Fortune 500-level technology leadership and strategic guidance with the flexibility your business needs. 
                100% vendor-neutral advice. Project-based or ongoing engagements. Results that drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {keyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card key={index} className="feature-card group cursor-pointer h-full">
                    <CardHeader className="pb-4 text-center">
                      <div className={`${highlight.color} mb-4 flex justify-center`}>
                        <IconComponent size={48} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <CardTitle className="text-xl text-slate-900 group-hover:text-green-500 transition-colors duration-300 font-semibold">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-1">
                      <CardDescription className="text-gray-600 leading-relaxed font-medium">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-16">
              <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">What Our Clients Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-4xl text-green-500 mb-4">"</div>
                    <p className="text-gray-600 italic mb-4 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-green-600">{testimonial.industry}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <Link to="/services">
                <Button size="lg" className="primary-cta hover-scale">
                  View All Services
                </Button>
              </Link>
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Free Technology Assessment Request&body=Hello, I would like to schedule a complimentary technology assessment to discuss my business needs."
                className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-500 hover:border-green-600 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Get Free Technology Assessment
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error in Index component:", error);
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="text-gray-600">Please refresh the page</p>
        </div>
      </div>
    );
  }
};

export default Index;
