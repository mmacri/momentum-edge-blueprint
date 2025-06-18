
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: "📞",
      title: "Phone Consultation",
      description: "Schedule a direct call to discuss your technology needs",
      action: "Call Now",
      contact: "(555) 123-4567"
    },
    {
      icon: "📧",
      title: "Email Inquiry",
      description: "Send us your questions and requirements",
      action: "Send Email",
      contact: "mike@momentumedgeconsulting.com"
    },
    {
      icon: "💼",
      title: "LinkedIn Connect",
      description: "Connect for professional networking and insights",
      action: "Connect on LinkedIn",
      contact: "linkedin.com/in/mikemacri"
    },
    {
      icon: "📅",
      title: "Calendly Booking",
      description: "Book a strategic consultation session",
      action: "Schedule Meeting",
      contact: "calendly.com/momentum-edge"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Ready to Accelerate Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Let's discuss how strategic IT solutions and AI innovation can transform your business. 
              Schedule your free consultation today.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-bold px-12 py-6 text-xl hover-scale"
            >
              Book Your Free Strategy Session
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover-scale bg-white border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <CardTitle className="text-lg text-primary">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm">
                    {method.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    {method.action}
                  </Button>
                  <p className="text-xs text-gray-500 mt-2 font-mono">
                    {method.contact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Contact Form */}
          <Card className="max-w-2xl mx-auto bg-gray-50 border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">
                Quick Inquiry Form
              </CardTitle>
              <p className="text-gray-600">
                Tell us about your technology challenges and goals
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none"
                />
              </div>
              <input 
                type="text" 
                placeholder="Company Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none text-gray-700">
                <option value="">Select Primary Interest</option>
                <option value="cio">Outsourced CIO & IT Advisory</option>
                <option value="healthcare">Healthcare IT Solutions</option>
                <option value="ai">AI Solutions & Governance</option>
                <option value="remote">Small Office & Remote IT</option>
                <option value="partner">Partner Enablement</option>
                <option value="gtm">Strategic Go-To-Market</option>
              </select>
              <textarea 
                placeholder="Describe your technology challenges or goals..." 
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-accent focus:outline-none resize-none"
              ></textarea>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg"
              >
                Send Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
