
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, Building2, Users, Laptop, Factory, Briefcase } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Hospital,
      title: "Healthcare & Medical Practices",
      description: "Specialized HIPAA-compliant solutions for medical and dental practices",
      challenges: [
        "HIPAA compliance and patient data security",
        "EHR/EMR system optimization and integration",
        "Telehealth infrastructure and remote care solutions",
        "Practice management workflow automation",
        "Cybersecurity for sensitive patient information"
      ],
      solutions: [
        "Complete HIPAA compliance audits and implementation",
        "Secure cloud-based practice management systems",
        "Encrypted communication and file sharing solutions",
        "Backup and disaster recovery for patient data",
        "Staff training and security awareness programs"
      ],
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: Building2,
      title: "Small to Mid-Sized Businesses",
      description: "Scalable technology solutions that grow with your business",
      challenges: [
        "Limited IT resources and technical expertise",
        "Budget constraints for technology investments",
        "Scalability and growth planning challenges",
        "Cybersecurity threats and compliance requirements",
        "Remote work and collaboration needs"
      ],
      solutions: [
        "Virtual CIO services and strategic IT planning",
        "Cost-effective cloud migration and optimization",
        "Managed cybersecurity and compliance frameworks",
        "Remote work infrastructure and collaboration tools",
        "Vendor management and technology procurement"
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Users,
      title: "Professional Services Firms",
      description: "Technology solutions for law firms, accounting practices, and consultancies",
      challenges: [
        "Client data confidentiality and security",
        "Document management and workflow automation",
        "Billing and time tracking system integration",
        "Regulatory compliance requirements",
        "Client communication and collaboration tools"
      ],
      solutions: [
        "Secure client portal and document management systems",
        "Practice management software implementation",
        "Automated billing and time tracking solutions",
        "Compliance monitoring and reporting tools",
        "Encrypted communication and collaboration platforms"
      ],
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Laptop,
      title: "Remote & Distributed Teams",
      description: "Comprehensive remote work infrastructure and collaboration solutions",
      challenges: [
        "Secure remote access and VPN connectivity",
        "Collaboration and communication tool integration",
        "Device management and security policies",
        "Performance monitoring and productivity tools",
        "Cloud infrastructure and data synchronization"
      ],
      solutions: [
        "Zero-trust security architecture implementation",
        "Unified communication and collaboration platforms",
        "Mobile device management (MDM) solutions",
        "Cloud-based productivity and project management tools",
        "Automated backup and disaster recovery systems"
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      description: "Industrial IoT, automation, and operational technology solutions",
      challenges: [
        "Legacy system modernization and integration",
        "Industrial IoT and automation implementation",
        "Cybersecurity for operational technology (OT)",
        "Supply chain management and tracking",
        "Compliance with industry regulations"
      ],
      solutions: [
        "Industrial IoT platform implementation and integration",
        "OT/IT convergence and security frameworks",
        "Manufacturing execution system (MES) optimization",
        "Supply chain visibility and tracking solutions",
        "Regulatory compliance monitoring and reporting"
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Briefcase,
      title: "Technology Providers & MSPs",
      description: "Partner enablement and go-to-market strategy for technology companies",
      challenges: [
        "Partner program development and enablement",
        "Channel strategy and go-to-market planning",
        "Technical training and certification programs",
        "Sales enablement and marketing automation",
        "Customer success and support optimization"
      ],
      solutions: [
        "Comprehensive partner enablement frameworks",
        "Channel partner portal development and management",
        "Technical training curriculum and certification programs",
        "Sales and marketing automation platform implementation",
        "Customer success platform integration and optimization"
      ],
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  const successStories = [
    {
      industry: "Healthcare",
      challenge: "HIPAA compliance and EHR optimization",
      result: "100% compliance achievement with 40% reduction in administrative overhead",
      timeframe: "6 months"
    },
    {
      industry: "Professional Services",
      challenge: "Remote work infrastructure and security",
      result: "Seamless remote transition with zero security incidents",
      timeframe: "3 months"
    },
    {
      industry: "Small Business",
      challenge: "Technology modernization and cost optimization",
      result: "35% cost reduction with improved performance and reliability",
      timeframe: "4 months"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
              Industry-Specific Technology Solutions
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Deep industry expertise and specialized solutions tailored to the unique challenges 
              and compliance requirements of your business sector.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className={`feature-card group h-full ${industry.bgColor} ${industry.borderColor}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className={`${industry.color} mr-4`}>
                        <IconComponent size={48} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900 group-hover:text-green-500 transition-colors duration-300 font-semibold">
                          {industry.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 font-medium mt-1">
                          {industry.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Common Challenges</h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="flex items-start">
                              <span className="text-red-500 mr-2 mt-1 font-bold text-xs">•</span>
                              <span className="text-sm text-gray-700 leading-relaxed">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Our Solutions</h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1 font-bold text-xs">✓</span>
                              <span className="text-sm text-gray-700 leading-relaxed">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Success Stories */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Industry Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">{story.industry}</h4>
                  <p className="text-gray-600 text-sm mb-3 italic">"{story.challenge}"</p>
                  <p className="text-green-600 font-semibold text-sm mb-2">{story.result}</p>
                  <p className="text-gray-500 text-xs">Completed in {story.timeframe}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-slate-900 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Industry Operations?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get industry-specific recommendations and a customized technology roadmap 
                tailored to your sector's unique challenges and opportunities.
              </p>
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Industry-Specific Consultation Request&body=Hello, I would like to schedule a consultation to discuss technology solutions specific to my industry needs."
                className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Schedule Industry Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
