
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const highlights = [
    {
      title: "Expert CIO Leadership",
      description: "Strategic technology roadmaps and IT infrastructure optimization for sustainable growth",
      icon: "🎯"
    },
    {
      title: "Healthcare IT Specialists",
      description: "HIPAA-compliant solutions for dental and medical practices with proven results",
      icon: "🏥"
    },
    {
      title: "AI Innovation & Governance",
      description: "Custom AI solutions with responsible governance frameworks and compliance expertise",
      icon: "🤖"
    },
    {
      title: "Partner Enablement",
      description: "Strategic alliance development and revenue acceleration programs that deliver results",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
              Technology Solutions That Drive Results
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              From strategic CIO leadership to AI innovation, we provide comprehensive technology consulting 
              across diverse industries and business sizes with measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="feature-card group cursor-pointer">
                <CardHeader className="pb-4 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-green-500 transition-colors duration-300 font-semibold">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed font-medium">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Link to="/services">
              <Button size="lg" className="primary-cta hover-scale">
                View All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="secondary-cta"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
