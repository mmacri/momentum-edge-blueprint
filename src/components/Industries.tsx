
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      subtitle: "Dental, Medical Practices, Clinics",
      description: "Specialized IT solutions ensuring HIPAA compliance, patient data security, and seamless clinical workflows with proven results.",
      icon: "🏥",
      highlights: ["HIPAA Compliance", "EHR/EMR Systems", "Telehealth Setup", "Patient Data Security"]
    },
    {
      title: "Small to Mid-sized Businesses",
      subtitle: "Growing companies that need enterprise-level IT",
      description: "Scalable technology infrastructure and strategic IT planning to support business growth and digital transformation initiatives.",
      icon: "🏢",
      highlights: ["Cloud Migration", "Cybersecurity", "IT Strategy", "Digital Transformation"]
    },
    {
      title: "Small & Remote Offices",
      subtitle: "Including home office setups",
      description: "Comprehensive remote work solutions with secure connectivity, collaboration tools, and ongoing support for distributed teams.",
      icon: "🏠",
      highlights: ["Remote Setup", "Secure Connectivity", "Collaboration Tools", "24/7 Support"]
    },
    {
      title: "Enterprise Technology Providers",
      subtitle: "Technology companies and solution providers",
      description: "Strategic consulting for go-to-market strategies, partner enablement, and technical solution development that drives revenue growth.",
      icon: "⚙️",
      highlights: ["GTM Strategy", "Solution Engineering", "Partner Programs", "Technical Sales"]
    },
    {
      title: "MSPs and GSIs",
      subtitle: "Managed Service Providers & Global System Integrators",
      description: "Enhanced service offerings, partner enablement frameworks, and strategic alliance development for sustainable growth.",
      icon: "🔗",
      highlights: ["Service Enhancement", "Partner Enablement", "Strategic Alliances", "Technical Training"]
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
            Deep expertise across diverse industries, from healthcare and small businesses 
            to enterprise technology providers and managed service organizations with measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="feature-card group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
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
              <CardContent>
                <div className="space-y-3">
                  {industry.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center">
                      <span className="text-green-500 mr-3 font-bold">•</span>
                      <span className="text-sm font-semibold text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
