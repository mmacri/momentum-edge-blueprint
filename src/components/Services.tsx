
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: "cio",
      title: "Outsourced CIO & IT Advisory",
      description: "Strategic technology leadership and roadmap planning for businesses ready to scale their IT infrastructure.",
      features: [
        "Virtual CIO (vCIO) services",
        "Strategic technology roadmaps & budget planning",
        "IT infrastructure optimization (cloud & hybrid)",
        "Cybersecurity & risk management",
        "Technology evaluations & vendor negotiations"
      ],
      icon: "🎯"
    },
    {
      id: "healthcare",
      title: "Healthcare IT Solutions",
      description: "Specialized technology management for dental practices, medical offices, and healthcare facilities.",
      features: [
        "Dental practice technology management",
        "Small medical office IT setup & support",
        "HIPAA compliance & patient data security",
        "EHR/EMR optimization & implementation",
        "Telehealth infrastructure solutions"
      ],
      icon: "🏥"
    },
    {
      id: "ai",
      title: "AI Solutions, Applications & Governance",
      description: "Custom AI-driven solutions with responsible governance frameworks for sustainable business growth.",
      features: [
        "Custom AI-driven apps and productivity solutions",
        "AI automation and workflow enhancements",
        "Ethical AI frameworks and responsible governance",
        "Compliance (GDPR, EU AI Act, HIPAA, NIST)",
        "AI project assessments, audits, maturity models"
      ],
      icon: "🤖"
    },
    {
      id: "small-office",
      title: "Small Office & Remote Office IT",
      description: "Comprehensive IT solutions designed specifically for small and remote office environments.",
      features: [
        "Comprehensive remote IT setup & support",
        "Network and connectivity management",
        "Cloud productivity and collaboration tools",
        "Security assessments & remote office cyber defense",
        "Ongoing IT management and helpdesk support"
      ],
      icon: "🏢"
    },
    {
      id: "partner",
      title: "Partner Enablement & Strategic Alliances",
      description: "Accelerate partner success with structured enablement programs and strategic alliance frameworks.",
      features: [
        "Partner program development & enablement frameworks",
        "Certification & onboarding strategies",
        "Partner portal and digital enablement platforms",
        "Joint strategic planning and revenue acceleration",
        "Technical enablement playbooks & training content"
      ],
      icon: "🤝"
    },
    {
      id: "gtm",
      title: "Strategic Go-To-Market & Solution Consulting",
      description: "End-to-end GTM strategy development and execution for technology companies and solution providers.",
      features: [
        "GTM strategy creation & execution",
        "Technical presales & solution engineering",
        "Demo labs and customer enablement",
        "Pipeline growth and strategic business development",
        "Cross-functional solution alignment for enterprise accounts"
      ],
      icon: "🚀"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategic CIO leadership to AI innovation, we provide end-to-end technology consulting 
            services tailored to your industry and business size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              id={service.id}
              className="hover:shadow-xl transition-all duration-300 hover-scale bg-white border shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
