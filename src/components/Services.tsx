
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: "cio",
      title: "Outsourced CIO & IT Advisory",
      description: "Strategic technology leadership and roadmap planning for businesses ready to scale their IT infrastructure.",
      features: [
        "Virtual CIO (vCIO) services and strategic planning",
        "Technology roadmaps & comprehensive budget planning",
        "IT infrastructure optimization (cloud & hybrid solutions)",
        "Cybersecurity strategy & comprehensive risk management",
        "Technology evaluations & vendor negotiations"
      ],
      icon: "🎯"
    },
    {
      id: "healthcare",
      title: "Healthcare IT Solutions",
      description: "Specialized technology management for dental practices, medical offices, and healthcare facilities with HIPAA compliance.",
      features: [
        "Dental practice technology management & optimization",
        "Small medical office IT setup & ongoing support",
        "HIPAA compliance & patient data security protocols",
        "EHR/EMR optimization & implementation services",
        "Telehealth infrastructure solutions & support"
      ],
      icon: "🏥"
    },
    {
      id: "ai",
      title: "AI Solutions, Applications & Governance",
      description: "Custom AI-driven solutions with responsible governance frameworks for sustainable business growth and innovation.",
      features: [
        "Custom AI-driven apps and productivity solutions",
        "AI automation and workflow enhancement strategies",
        "Ethical AI frameworks and responsible governance policies",
        "Compliance management (GDPR, EU AI Act, HIPAA, NIST)",
        "AI project assessments, audits, and maturity models"
      ],
      icon: "🤖"
    },
    {
      id: "small-office",
      title: "Small Office & Remote Office IT",
      description: "Comprehensive IT solutions designed specifically for small and remote office environments with 24/7 support.",
      features: [
        "Comprehensive remote IT setup & ongoing support",
        "Network and connectivity management solutions",
        "Cloud productivity and collaboration tools integration",
        "Security assessments & remote office cyber defense",
        "Ongoing IT management and dedicated helpdesk support"
      ],
      icon: "🏢"
    },
    {
      id: "partner",
      title: "Partner Enablement & Strategic Alliances",
      description: "Accelerate partner success with structured enablement programs and strategic alliance frameworks that drive revenue.",
      features: [
        "Partner program development & enablement frameworks",
        "Certification programs & strategic onboarding strategies",
        "Partner portal and digital enablement platforms",
        "Joint strategic planning and revenue acceleration programs",
        "Technical enablement playbooks & training content development"
      ],
      icon: "🤝"
    },
    {
      id: "gtm",
      title: "Strategic Go-To-Market & Solution Consulting",
      description: "End-to-end GTM strategy development and execution for technology companies and solution providers seeking growth.",
      features: [
        "GTM strategy creation & comprehensive execution planning",
        "Technical presales & solution engineering support",
        "Demo labs and customer enablement programs",
        "Pipeline growth and strategic business development",
        "Cross-functional solution alignment for enterprise accounts"
      ],
      icon: "🚀"
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
            From strategic CIO leadership to AI innovation, we provide end-to-end technology consulting 
            services tailored to your industry and business size with proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              id={service.id}
              className="feature-card group"
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
              <CardContent>
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
      </div>
    </section>
  );
};

export default Services;
