
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technology Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic CIO leadership to AI innovation, we provide comprehensive technology consulting 
              across diverse industries and business sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
                <CardHeader>
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <CardTitle className="text-xl text-slate-900">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4">
                View All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4"
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
