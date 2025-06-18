
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
      description: "Strategic technology roadmaps and IT infrastructure optimization",
      icon: "🎯"
    },
    {
      title: "Healthcare IT Specialists",
      description: "HIPAA-compliant solutions for dental and medical practices",
      icon: "🏥"
    },
    {
      title: "AI Innovation & Governance",
      description: "Custom AI solutions with responsible governance frameworks",
      icon: "🤖"
    },
    {
      title: "Partner Enablement",
      description: "Strategic alliance development and revenue acceleration",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
              Technology Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From strategic CIO leadership to AI innovation, we provide comprehensive technology consulting 
              across diverse industries and business sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-md hover:-translate-y-2 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{highlight.icon}</div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-green-500 transition-colors duration-300">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg rounded-md transition-all duration-300 hover-scale">
                View All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold px-8 py-4 text-lg rounded-md transition-all duration-300"
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
