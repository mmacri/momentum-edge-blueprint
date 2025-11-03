
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent("Technology Assessment Request");
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Company: ${data.company || "Not provided"}\n` +
      `Phone: ${data.phone || "Not provided"}\n\n` +
      `Message:\n${data.message}`
    );
    
    window.location.href = `mailto:momentumedgeconsulting@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening your email client...",
      description: "Your message has been prepared. Please send the email to complete your request.",
    });
    
    reset();
  };

  const services = [
    "Technology Strategy & CIO Advisory",
    "GRC & Information Security Compliance", 
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
              Ready to accelerate your business with strategic IT solutions? Complete the form below for a complimentary 
              technology assessment and discover how we can help you achieve your goals.
            </p>
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Technology Assessment</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Schedule a complimentary consultation to discuss your technology challenges and discover 
                opportunities for growth and optimization.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-3" size={20} />
                  <span className="font-medium text-gray-700">30-minute strategic consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-3" size={20} />
                  <span className="font-medium text-gray-700">Technology roadmap recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-3" size={20} />
                  <span className="font-medium text-gray-700">Cost optimization opportunities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-3" size={20} />
                  <span className="font-medium text-gray-700">No obligation or pressure</span>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name"
                    {...register("name")}
                    placeholder="John Doe"
                    className="mt-1"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@company.com"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company"
                    {...register("company")}
                    placeholder="Your Company Name"
                    className="mt-1"
                  />
                  {errors.company && (
                    <p className="text-sm text-red-500 mt-1">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="(555) 123-4567"
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your technology needs and challenges..."
                    className="mt-1 min-h-[120px]"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Request Free Assessment
                </Button>
              </form>
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
