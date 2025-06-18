
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Inquiry",
      description: "Send us your questions and detailed requirements for personalized solutions. We respond same business day or next business day.",
      action: "Send Email"
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const interest = formData.get('interest');
    const message = formData.get('message');
    
    const subject = `Inquiry from ${name} - ${company}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPrimary Interest: ${interest}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:momentumedgeconsulting@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-8 heading-enhanced">
              Ready to Accelerate Your Business?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
              Let's discuss how strategic IT solutions and AI innovation can transform your business operations. 
              Email us your questions and we'll respond same business day or next business day with actionable strategies.
            </p>
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Free Strategy Session Request&body=Hello, I would like to schedule a free strategy session to discuss my business technology needs."
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Email Us for Your Free Strategy Session
            </a>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-16 max-w-md mx-auto">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="feature-card group text-center"
              >
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg text-primary font-semibold group-hover:text-green-500 transition-colors duration-300">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm font-medium leading-relaxed">
                    {method.description}
                  </p>
                  <a 
                    href="mailto:momentumedgeconsulting@gmail.com?subject=Business Inquiry"
                    className="w-full secondary-cta inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    {method.action}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Contact Form */}
          <Card className="max-w-2xl mx-auto feature-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary heading-enhanced">
                Quick Inquiry Form
              </CardTitle>
              <p className="text-gray-600 font-medium">
                Tell us about your technology challenges and strategic goals. We'll respond same business day or next business day.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 font-medium"
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 font-medium"
                  />
                </div>
                <input 
                  type="text" 
                  name="company"
                  placeholder="Company Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 font-medium"
                />
                <select 
                  name="interest"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-gray-700 font-medium"
                >
                  <option value="">Select Primary Interest</option>
                  <option value="cio">Outsourced CIO & IT Advisory</option>
                  <option value="healthcare">Healthcare IT Solutions</option>
                  <option value="ai">AI Solutions & Governance</option>
                  <option value="remote">Small Office & Remote IT</option>
                  <option value="partner">Partner Enablement</option>
                  <option value="gtm">Strategic Go-To-Market</option>
                </select>
                <textarea 
                  name="message"
                  placeholder="Describe your technology challenges or strategic goals..." 
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 resize-none font-medium"
                ></textarea>
                <Button 
                  type="submit"
                  className="w-full primary-cta"
                >
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
