import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Shield, Cloud, Cog, Users, BarChart3, Brain, HeartHandshake } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Target,
      title: "Strategic Technology Leadership",
      description: "CIO-level strategic planning and technology roadmap development",
      skills: [
        "Technology strategy and multi-year roadmap planning",
        "IT budget optimization and investment planning",
        "Digital transformation and modernization strategies",
        "Executive reporting and board-level presentations",
        "Vendor evaluation and procurement advisory"
      ],
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Enterprise-grade security and regulatory compliance expertise",
      skills: [
        "HIPAA, SOC 2, NIST, and ISO 27001 compliance",
        "Risk assessment and security framework development",
        "Incident response planning and management",
        "Security awareness training and governance",
        "Vulnerability assessment and penetration testing coordination"
      ],
      color: "text-red-500"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Modern cloud architecture and infrastructure optimization",
      skills: [
        "Multi-cloud strategy and architecture design",
        "Office 365/Microsoft 365 implementation and optimization",
        "AWS, Azure, and Google Cloud platform expertise",
        "Hybrid cloud and on-premises integration",
        "Backup, disaster recovery, and business continuity"
      ],
      color: "text-cyan-500"
    },
    {
      icon: Brain,
      title: "AI & Emerging Technologies",
      description: "Responsible AI implementation and governance frameworks",
      skills: [
        "AI strategy development and opportunity assessment",
        "Custom AI application development and integration",
        "AI governance frameworks and ethical guidelines",
        "Compliance with emerging AI regulations (EU AI Act)",
        "Automation and workflow optimization strategies"
      ],
      color: "text-purple-500"
    },
    {
      icon: Cog,
      title: "Healthcare IT Specialization",
      description: "Deep expertise in medical and dental practice technology",
      skills: [
        "HIPAA compliance audits and implementation",
        "EHR/EMR system optimization and integration",
        "Dental practice management solutions",
        "Patient data security and privacy protection",
        "Telehealth infrastructure and secure communications"
      ],
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Partner Enablement & GTM",
      description: "Strategic partnership development and go-to-market expertise",
      skills: [
        "Partner program development and enablement frameworks",
        "Channel strategy and go-to-market planning",
        "Technical enablement and solution training programs",
        "Partner portal development and digital enablement",
        "Joint business planning and revenue acceleration"
      ],
      color: "text-orange-500"
    },
    {
      icon: BarChart3,
      title: "IT Operations & Management",
      description: "Comprehensive IT operations and service management",
      skills: [
        "IT service management (ITSM) framework implementation",
        "Help desk and support organization design",
        "IT asset management and lifecycle planning",
        "Performance monitoring and optimization",
        "Change management and process improvement"
      ],
      color: "text-indigo-500"
    },
    {
      icon: HeartHandshake,
      title: "Small Business IT Solutions",
      description: "Tailored technology solutions for growing businesses",
      skills: [
        "Office setup and technology deployment",
        "Remote work solutions and secure connectivity",
        "Small office network design and implementation",
        "Vendor coordination and relationship management",
        "Growth-oriented IT planning and scalability"
      ],
      color: "text-pink-500"
    }
  ];

  const certifications = [
    "VMware Certified Professional (VCP)",
    "AWS Certified Solutions Architect",
    "Microsoft Certified: Azure Solutions Architect Expert",
    "Google Cloud Professional Cloud Architect",
    "CISSP - Certified Information Systems Security Professional",
    "AI Ethics & Governance Certified"
  ];

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
              Deep Technical Expertise Across Technology Domains
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              25+ years of hands-on experience delivering strategic technology solutions across healthcare, 
              small business, and enterprise environments with proven results and measurable outcomes.
            </p>
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="feature-card group h-full">
                  <CardHeader className="text-center pb-4">
                    <div className={`${area.color} mb-4 flex justify-center`}>
                      <IconComponent size={48} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl text-slate-900 mb-3 font-semibold group-hover:text-green-500 transition-colors duration-300">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-medium leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {area.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1 font-bold text-xs">✓</span>
                          <span className="text-sm font-medium text-gray-700 leading-relaxed">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Certifications & Recognition */}
          <div className="bg-slate-900 rounded-xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Professional Certifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3 font-bold">✓</span>
                      <span className="font-medium text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-6">Industry Recognition</h3>
                <div className="bg-green-500/20 rounded-lg p-6 border border-green-500/30">
                  <p className="text-gray-200 italic mb-4 leading-relaxed">
                    "Mike's strategic approach to technology implementation and comprehensive understanding 
                    of healthcare compliance requirements has consistently delivered exceptional results 
                    across diverse industry verticals."
                  </p>
                  <p className="text-green-400 font-semibold">
                    - Technology Leadership Excellence Award 2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Leverage This Expertise?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get a complimentary technology assessment and discover how our deep expertise 
                can accelerate your business growth and optimize your technology investments.
              </p>
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Expertise Consultation Request&body=Hello, I would like to schedule a consultation to discuss how your expertise can help with my specific technology challenges."
                className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Schedule Expert Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
