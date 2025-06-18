
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    { number: "15+", label: "Years of Technology Leadership" },
    { number: "100+", label: "Successful IT Implementations" },
    { number: "50+", label: "Healthcare Practices Supported" },
    { number: "25+", label: "AI Projects Delivered" }
  ];

  const expertise = [
    "Technology Leadership & Strategic Planning",
    "Healthcare IT & HIPAA Compliance",
    "AI Innovation & Responsible Governance", 
    "Partner Enablement & Strategic Alliances",
    "Cybersecurity & Risk Management",
    "Cloud Infrastructure & Digital Transformation"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              About Momentum Edge & Mike Macri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive professional background in technology leadership, healthcare IT, 
              AI innovation, compliance, partner enablement, and comprehensive IT management.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center bg-gray-50 border-0 shadow-lg hover-scale">
                <CardContent className="p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Proven Technology Leadership
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in technology leadership and strategic consulting, 
                Mike Macri brings deep expertise across healthcare IT, AI innovation, partner enablement, 
                and comprehensive IT management solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From architecting HIPAA-compliant healthcare solutions to developing AI governance 
                frameworks, Mike has successfully guided organizations through complex technology 
                transformations while ensuring compliance and driving sustainable growth.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg border">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Education & Credentials</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Master's in Information Technology Management</li>
                  <li>• Certified Information Systems Security Professional (CISSP)</li>
                  <li>• AWS Certified Solutions Architect</li>
                  <li>• Healthcare IT Compliance Certification</li>
                  <li>• AI Ethics & Governance Specialization</li>
                </ul>
              </div>
            </div>

            <div className="animate-scale-in">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Core Expertise Areas
              </h3>
              <div className="space-y-4">
                {expertise.map((area, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border"
                  >
                    <span className="text-blue-600 mr-4 text-xl">✓</span>
                    <span className="font-medium text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-slate-900 text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Industry Recognition</h4>
                <p className="text-white/90">
                  "Mike's strategic approach to technology implementation and partner enablement 
                  has consistently delivered measurable results across diverse industry verticals."
                </p>
                <p className="text-blue-400 font-semibold mt-2">
                  - Technology Leadership Awards 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
