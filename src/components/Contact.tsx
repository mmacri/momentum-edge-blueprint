
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: "momentumedgeconsulting@gmail.com",
      action: "mailto:momentumedgeconsulting@gmail.com?subject=Business Inquiry&body=Hello, I would like to discuss my technology needs.",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      details: "Free 30-minute consultation",
      action: "mailto:momentumedgeconsulting@gmail.com?subject=Schedule Call Request&body=Hello, I would like to schedule a free consultation call to discuss my business needs.",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: "Remote & On-site Nationwide",
      action: "#",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      action: "#",
      color: "text-orange-500"
    }
  ];

  const services = [
    "Technology Strategy & CIO Advisory",
    "Healthcare IT & HIPAA Compliance", 
    "AI Solutions & Governance",
    "Cybersecurity & Risk Management",
    "Cloud Infrastructure & Migration",
    "Partner Enablement & Strategic Alliances"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
              Let's Transform Your Technology Strategy
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Ready to accelerate your business with strategic IT solutions? Get in touch for a complimentary 
              technology assessment and discover how we can help you achieve your goals.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="feature-card group text-center h-full">
                  <CardHeader className="pb-4">
                    <div className={`${method.color} mb-4 flex justify-center`}>
                      <IconComponent size={48} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-green-500 transition-colors duration-300">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-gray-600 mb-4 font-medium">{method.details}</p>
                    {method.action !== "#" && (
                      <a 
                        href={method.action}
                        className="text-green-500 hover:text-green-600 font-semibold transition-colors"
                      >
                        Contact Now
                      </a>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Alternative */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Technology Assessment</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Schedule a complimentary consultation to discuss your technology challenges and discover 
                opportunities for growth and optimization.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="font-medium text-gray-700">30-minute strategic consultation</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="font-medium text-gray-700">Technology roadmap recommendations</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="font-medium text-gray-700">Cost optimization opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="font-medium text-gray-700">No obligation or pressure</span>
                </div>
              </div>

              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Free Technology Assessment Request&body=Hello,%0D%0A%0D%0AI would like to schedule a complimentary technology assessment to discuss:%0D%0A%0D%0A- My current technology challenges%0D%0A- Growth and scalability needs%0D%0A- Compliance requirements%0D%0A- Budget and timeline considerations%0D%0A%0D%0APlease let me know your availability for a 30-minute consultation.%0D%0A%0D%0AThank you!"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center w-full"
              >
                Schedule Free Assessment
              </a>
            </div>

            {/* Services Overview */}
            <div className="bg-slate-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">How We Can Help</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 25 years of technology leadership experience, we provide strategic guidance 
                and hands-on implementation across all areas of business technology.
              </p>
              
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-400 mr-3 font-bold">✓</span>
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                <h4 className="font-bold text-green-400 mb-2">Flexible Engagement Models</h4>
                <p className="text-gray-300 text-sm">
                  Project-based consulting, ongoing strategic advisory, or comprehensive managed services - 
                  we adapt to your needs and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
