
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    { number: "25+", label: "Years of Technology Advisory" },
    { number: "1000's", label: "Successful IT Implementations" },
    { number: "Dental & Medical", label: "Practice Management Solutions" },
    { number: "Small to Medium", label: "Office Management Solutions" }
  ];

  const expertise = [
    "Technology Advisory & Strategic Planning",
    "Governance, Risk & Compliance (GRC) Programs",
    "Information Security & Cybersecurity Leadership",
    "Healthcare IT & HIPAA Compliance Solutions", 
    "AI Innovation & Responsible Governance",
    "Partner & Strategic Alliances",
    "Cloud Infrastructure & Digital Transformation"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
              About Momentum Edge
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Extensive professional background in technology advisory, governance, risk & compliance (GRC), information security, 
              healthcare IT solutions, AI innovation, partner enablement, and comprehensive IT management with proven results 
              that deliver solutions across industries and scale, taking into account the audience, value, and business benefits. 
              Guidance available as needed or proactively.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="feature-card text-center group">
                <CardContent className="p-8">
                  <div className="text-3xl lg:text-4xl font-bold text-green-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-semibold text-sm leading-tight">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 heading-enhanced">
                Proven Technology Advisory & Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                With over 25 years of experience in technology advisory and strategic consulting, 
                Momentum Edge Consulting brings deep expertise across governance, risk management, compliance (GRC), information security, 
                healthcare IT solutions, AI innovation, partner enablement, and comprehensive IT management that delivers measurable results.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                From architecting regulatory compliance programs (HIPAA, SOC 2, ISO 27001) to developing 
                comprehensive information security and AI governance frameworks, MEC has successfully guided 
                organizations through complex technology transformations while ensuring compliance, managing risk, 
                and driving sustainable growth. Guidance available as needed or proactively.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Professional Certifications</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center font-medium">
                    <span className="text-green-500 mr-2">•</span>
                    VMware Certified Professional
                  </li>
                  <li className="flex items-center font-medium">
                    <span className="text-green-500 mr-2">•</span>
                    AWS Certified
                  </li>
                  <li className="flex items-center font-medium">
                    <span className="text-green-500 mr-2">•</span>
                    Microsoft Certified
                  </li>
                  <li className="flex items-center font-medium">
                    <span className="text-green-500 mr-2">•</span>
                    CISSP / Security+ (In Progress)
                  </li>
                  <li className="flex items-center font-medium">
                    <span className="text-green-500 mr-2">•</span>
                    ISO 27001 Lead Implementer
                  </li>
                  <li className="flex items-center font-medium">
                    <span className="text-green-500 mr-2">•</span>
                    AI Ethics & Governance Certified
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-scale-in">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 heading-enhanced">
                Core Expertise Areas
              </h3>
              <div className="space-y-4">
                {expertise.map((area, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group"
                  >
                    <span className="text-green-500 mr-4 text-xl font-bold group-hover:scale-110 transition-transform duration-300">✓</span>
                    <span className="font-semibold text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-slate-900 text-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-white">Industry Recognition</h4>
                <p className="text-gray-200 leading-relaxed font-medium">
                  "MEC's strategic approach to technology implementation and partner enablement 
                  has consistently delivered measurable results across diverse industry verticals with exceptional client satisfaction."
                </p>
                <p className="text-green-400 font-semibold mt-3">
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
