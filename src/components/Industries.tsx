
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, Building2, Home, Scale, Banknote, Settings } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Healthcare & Medical Practices",
      subtitle: "Dental practices, medical offices, clinics, and healthcare facilities",
      description: "Specialized IT solutions ensuring HIPAA compliance, patient data security, and seamless clinical workflows with proven results in healthcare technology.",
      icon: Hospital,
      color: "text-red-500",
      highlights: ["HIPAA Compliance & Audits", "EHR/EMR Optimization", "Telehealth Solutions", "Patient Data Security"],
      cta: "Learn about our 20+ years of healthcare IT experience"
    },
    {
      title: "Small to Mid-Sized Businesses",
      subtitle: "Growing companies that need enterprise-level IT strategy",
      description: "Scalable technology infrastructure and strategic IT planning to support business growth, digital transformation, and competitive advantage.",
      icon: Building2,
      color: "text-blue-500",
      highlights: ["Virtual CIO Leadership", "Cloud Migration Strategy", "Cybersecurity Programs", "Technology Roadmaps"],
      cta: "Discover how we align IT with business goals"
    },
    {
      title: "Small & Remote Offices",
      subtitle: "Including home offices and distributed teams",
      description: "Comprehensive remote work solutions with secure connectivity, collaboration tools, office setups, and ongoing support for distributed teams.",
      icon: Home,
      color: "text-orange-500",
      highlights: ["Office Setup & Relocation", "Secure Remote Access", "Collaboration Platforms", "Vendor Coordination"],
      cta: "Get your remote office technology right"
    },
    {
      title: "Professional Services",
      subtitle: "Law firms, accounting practices, consulting firms",
      description: "Technology solutions tailored for professional service firms, emphasizing security, compliance, client confidentiality, and productivity.",
      icon: Scale,
      color: "text-purple-500",
      highlights: ["Document Security", "Client Portal Solutions", "Compliance Management", "Productivity Tools"],
      cta: "Enhance your professional practice technology"
    },
    {
      title: "Financial Services",
      subtitle: "Banks, credit unions, financial advisors, and fintech",
      description: "Robust security frameworks and compliance solutions for financial organizations managing sensitive data and regulatory requirements.",
      icon: Banknote,
      color: "text-green-500",
      highlights: ["Regulatory Compliance", "Data Protection", "Secure Communications", "Risk Management"],
      cta: "Secure your financial services technology"
    },
    {
      title: "Technology Companies",
      subtitle: "Software vendors, MSPs, and solution providers",
      description: "Strategic consulting for go-to-market strategies, partner enablement, technical solution development, and scaling technology businesses.",
      icon: Settings,
      color: "text-gray-500",
      highlights: ["Partner Program Development", "Go-to-Market Strategy", "Technical Enablement", "Channel Strategy"],
      cta: "Accelerate your technology business growth"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
            Industries We Serve
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Deep expertise across diverse industries with tailored solutions that address specific challenges, 
            compliance requirements, and business outcomes in each sector.
          </p>
          
          {/* Industry Focus Callout */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6 max-w-4xl mx-auto border border-blue-200">
            <p className="text-blue-800 font-semibold">
              Industry-Specific Expertise • Regulatory Compliance • Tailored Solutions • Proven Results
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card
                key={index}
                className="feature-card group h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`${industry.color} mb-4 flex justify-center`}>
                    <IconComponent size={48} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 mb-3 font-semibold group-hover:text-green-500 transition-colors duration-300">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-green-600 font-semibold mb-4">
                    {industry.subtitle}
                  </CardDescription>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {industry.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    {industry.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center">
                        <span className="text-green-500 mr-3 font-bold">•</span>
                        <span className="text-sm font-semibold text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Industry CTA */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <a 
                      href="mailto:momentumedgeconsulting@gmail.com?subject=Industry-Specific Consultation Request&body=Hello, I would like to discuss technology solutions specific to my industry needs."
                      className="text-green-600 hover:text-green-500 font-semibold text-sm transition-colors duration-300 group-hover:underline"
                    >
                      {industry.cta} →
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industries CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't See Your Industry?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We work with businesses across many sectors. Our vendor-neutral approach and flexible engagement model 
              adapts to any industry's unique technology needs and compliance requirements.
            </p>
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Industry Consultation Request&body=Hello, I would like to discuss how your services can help my specific industry and business needs."
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Discuss Your Industry Needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
