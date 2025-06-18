
const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      subtitle: "Dental, Medical Practices, Clinics",
      description: "Specialized IT solutions ensuring HIPAA compliance, patient data security, and seamless clinical workflows.",
      icon: "🏥",
      highlights: ["HIPAA Compliance", "EHR/EMR Systems", "Telehealth Setup", "Patient Data Security"]
    },
    {
      title: "Small to Mid-sized Businesses",
      subtitle: "Growing companies that need enterprise-level IT",
      description: "Scalable technology infrastructure and strategic IT planning to support business growth and digital transformation.",
      icon: "🏢",
      highlights: ["Cloud Migration", "Cybersecurity", "IT Strategy", "Digital Transformation"]
    },
    {
      title: "Small & Remote Offices",
      subtitle: "Including home office setups",
      description: "Comprehensive remote work solutions with secure connectivity, collaboration tools, and ongoing support.",
      icon: "🏠",
      highlights: ["Remote Setup", "Secure Connectivity", "Collaboration Tools", "24/7 Support"]
    },
    {
      title: "Enterprise Technology Providers",
      subtitle: "Technology companies and solution providers",
      description: "Strategic consulting for go-to-market strategies, partner enablement, and technical solution development.",
      icon: "⚙️",
      highlights: ["GTM Strategy", "Solution Engineering", "Partner Programs", "Technical Sales"]
    },
    {
      title: "MSPs and GSIs",
      subtitle: "Managed Service Providers & Global System Integrators",
      description: "Enhanced service offerings, partner enablement frameworks, and strategic alliance development.",
      icon: "🔗",
      highlights: ["Service Enhancement", "Partner Enablement", "Strategic Alliances", "Technical Training"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise across diverse industries, from healthcare and small businesses 
            to enterprise technology providers and managed service organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover-scale"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {industry.title}
              </h3>
              <p className="text-accent font-semibold mb-4">
                {industry.subtitle}
              </p>
              <p className="text-gray-600 mb-6">
                {industry.description}
              </p>
              <div className="space-y-2">
                {industry.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-sm font-medium text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
