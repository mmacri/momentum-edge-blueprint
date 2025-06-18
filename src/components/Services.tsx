
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: "vcio",
      title: "Virtual CIO & IT Leadership",
      description: "Strategic technology leadership and executive-level IT guidance for businesses that need CIO expertise without the full-time cost.",
      features: [
        "Technology strategy and multi-year roadmap development",
        "IT budget planning and investment optimization", 
        "Digital transformation and growth planning",
        "Vendor evaluation and negotiation support",
        "Executive reporting and board-level IT presentations"
      ],
      icon: "🎯"
    },
    {
      id: "vciso", 
      title: "Virtual CISO & Cybersecurity Leadership",
      description: "Strategic cybersecurity oversight and compliance guidance to protect your business and meet regulatory requirements.",
      features: [
        "Cybersecurity strategy and risk assessment",
        "Compliance frameworks (HIPAA, SOC 2, NIST, ISO 27001)",
        "Security policy development and implementation",
        "Incident response planning and management",
        "Security awareness training and governance"
      ],
      icon: "🛡️"
    },
    {
      id: "healthcare",
      title: "Healthcare IT Solutions",
      description: "Specialized technology management for dental practices, medical offices, and healthcare facilities with complete HIPAA compliance.",
      features: [
        "HIPAA compliance audits and implementation",
        "EHR/EMR system optimization and support",
        "Dental practice technology management",
        "Patient data security and privacy protection",
        "Telehealth infrastructure and secure communications"
      ],
      icon: "🏥"
    },
    {
      id: "ai",
      title: "AI Solutions & Governance",
      description: "Responsible AI implementation with custom applications, automation strategies, and governance frameworks for ethical AI adoption.",
      features: [
        "AI strategy development and opportunity assessment",
        "Custom AI application development and integration",
        "AI governance frameworks and ethical guidelines",
        "Compliance with emerging AI regulations (EU AI Act, etc.)",
        "AI automation and workflow optimization"
      ],
      icon: "🤖"
    },
    {
      id: "cloud",
      title: "Cloud & IT Infrastructure",
      description: "Complete cloud migrations, infrastructure optimization, and modern IT architecture design for scalable business growth.",
      features: [
        "Office 365/Microsoft 365 implementation and migration",
        "Cloud strategy and multi-cloud architecture design",
        "Server virtualization and infrastructure modernization",
        "Backup and disaster recovery solutions",
        "Network design and security implementation"
      ],
      icon: "☁️"
    },
    {
      id: "small-office",
      title: "Small Office & Remote IT Setup",
      description: "Complete IT solutions for small offices, remote teams, and business relocations with ongoing support and vendor coordination.",
      features: [
        "New office IT setup and technology deployment",
        "Office relocation and IT infrastructure moves",
        "Remote work solutions and secure connectivity",
        "Vendor coordination (ISP, telecom, hardware providers)",
        "Ongoing IT support and helpdesk services"
      ],
      icon: "🏢"
    },
    {
      id: "partner",
      title: "Partner Enablement & Channel Strategy",
      description: "Strategic alliance development and partner program creation for technology companies and solution providers seeking growth.",
      features: [
        "Partner program development and enablement frameworks",
        "Channel strategy and go-to-market planning",
        "Technical enablement and solution training programs",
        "Partner portal development and digital enablement",
        "Joint business planning and revenue acceleration"
      ],
      icon: "🤝"
    },
    {
      id: "projects",
      title: "IT Projects & Technology Assessments",
      description: "Comprehensive technology audits, strategic assessments, and project-based implementations with defined scope and timeline.",
      features: [
        "Complete IT environment audits and assessments",
        "Technology refresh and upgrade projects",
        "Compliance readiness assessments and gap analysis",
        "Vendor evaluation and procurement advisory",
        "Project management and implementation oversight"
      ],
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            From strategic CIO leadership to hands-on implementation, we provide end-to-end technology consulting 
            with flexible engagement models and 100% vendor-neutral guidance.
          </p>
          
          {/* Value Proposition Callout */}
          <div className="mt-8 bg-green-50 rounded-xl p-6 max-w-4xl mx-auto border border-green-200">
            <p className="text-green-800 font-semibold">
              ✓ No Long-Term Contracts &nbsp;•&nbsp; ✓ 100% Vendor Neutral &nbsp;•&nbsp; ✓ Enterprise Expertise &nbsp;•&nbsp; ✓ Flexible Engagements
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              id={service.id}
              className="feature-card group h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-slate-900 mb-3 font-semibold group-hover:text-green-500 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1 font-bold">✓</span>
                      <span className="text-sm font-medium text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-slate-900 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Technology Strategy?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get a complimentary technology assessment and strategic consultation to identify opportunities for growth and optimization.
            </p>
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Free Technology Assessment Request&body=Hello, I would like to schedule a complimentary technology assessment and strategic consultation to discuss my business needs."
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Schedule Your Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
