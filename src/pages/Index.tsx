
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const highlights = [
    {
      title: "Virtual CIO Leadership",
      description: "Strategic technology roadmaps and executive-level IT guidance without the full-time cost",
      icon: "🎯"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Virtual CISO services and compliance frameworks with proven expertise in regulated industries",
      icon: "🛡️"
    },
    {
      title: "Healthcare IT Specialists", 
      description: "HIPAA-compliant solutions for dental and medical practices with 20+ years of healthcare experience",
      icon: "🏥"
    },
    {
      title: "AI Innovation & Governance",
      description: "Responsible AI implementation with custom applications and governance frameworks for emerging regulations",
      icon: "🤖"
    }
  ];

  const testimonials = [
    {
      quote: "Momentum Edge transformed our technology strategy. Their vendor-neutral approach saved us significant costs while improving our security posture.",
      author: "Healthcare Practice Administrator",
      industry: "Healthcare"
    },
    {
      quote: "Finally, a technology partner that understands business strategy, not just technical implementation. Their Virtual CIO service has been game-changing.",
      author: "Small Business Owner", 
      industry: "Professional Services"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Value Proposition Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="feature-card group cursor-pointer h-full">
                <CardHeader className="pb-4 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
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
            ))}
          </div>

          {/* Social Proof Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center">
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
};

export default Index;
