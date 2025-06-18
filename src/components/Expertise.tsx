
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Cloud Migrations",
      description: "Whether you need immediate or gradual migration to the cloud, we guide you through this complex process with strategic planning and seamless execution.",
      features: [
        "Azure, AWS, and Google Cloud migrations",
        "Hybrid cloud architecture design",
        "Legacy system modernization",
        "Zero-downtime migration strategies"
      ],
      category: "Cloud Solutions",
      icon: "☁️"
    },
    {
      title: "End-User Support",
      description: "Keeping people working more productively is what we do best. We partner with you to develop the right support strategy for your workforce needs.",
      features: [
        "24/7 helpdesk and technical support",
        "User training and onboarding",
        "Remote and on-site assistance",
        "Productivity optimization consulting"
      ],
      category: "Support Services",
      icon: "👥"
    },
    {
      title: "Cloud & IT Strategies",
      description: "We'll match the right cloud strategy and technology to meet your immediate needs and long-term business goals with executive-level guidance.",
      features: [
        "Multi-cloud strategy development",
        "Digital transformation roadmaps",
        "Technology investment planning",
        "Vendor evaluation and selection"
      ],
      category: "Strategic Planning",
      icon: "🎯"
    },
    {
      title: "Infrastructure Upgrades",
      description: "Your IT infrastructure is the foundation of your operation. It should be robust, reliable, and secure with modern architecture principles.",
      features: [
        "Server modernization and virtualization",
        "Network infrastructure design",
        "Performance optimization",
        "Scalability planning and implementation"
      ],
      category: "Infrastructure",
      icon: "🏗️"
    },
    {
      title: "Maintenance & Support",
      description: "Our powerful tools and talented professionals maintain your servers and desktops to keep your business operating 24×7 with proactive monitoring.",
      features: [
        "Proactive system monitoring",
        "Preventive maintenance schedules",
        "Performance tuning and optimization",
        "Asset lifecycle management"
      ],
      category: "Support Services",
      icon: "🔧"
    },
    {
      title: "Security & Compliance",
      description: "Our certified security professionals help ensure your business is protected and meeting all appropriate compliance standards including HIPAA, SOC 2, and more.",
      features: [
        "Cybersecurity risk assessments",
        "Compliance framework implementation",
        "Security policy development",
        "Incident response planning"
      ],
      category: "Security",
      icon: "🛡️"
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Protecting your data is our top priority. In case of emergency or disaster, we help keep you up and running with comprehensive business continuity planning.",
      features: [
        "Automated backup solutions",
        "Disaster recovery planning",
        "Business continuity strategies",
        "Recovery testing and validation"
      ],
      category: "Data Protection",
      icon: "💾"
    },
    {
      title: "Network Security Monitoring",
      description: "The IT security landscape is always changing. We are proactive and tenacious about keeping your network secure with advanced threat detection.",
      features: [
        "24/7 security operations center (SOC)",
        "Threat intelligence and analysis",
        "Vulnerability management",
        "Security incident response"
      ],
      category: "Security",
      icon: "🔍"
    },
    {
      title: "IT & Business Alignment",
      description: "To thrive, all your departments must work together. We help align your IT mission with your corporate goals and values through strategic consultation.",
      features: [
        "Technology governance frameworks",
        "Business process optimization",
        "Digital transformation strategies",
        "ROI measurement and reporting"
      ],
      category: "Strategic Planning",
      icon: "🤝"
    },
    {
      title: "Mergers & Acquisitions",
      description: "We have the skills and experience to successfully merge and integrate your complex infrastructure and business systems during critical transitions.",
      features: [
        "IT due diligence and assessments",
        "System integration planning",
        "Data migration and consolidation",
        "Change management support"
      ],
      category: "Strategic Planning",
      icon: "🔄"
    },
    {
      title: "Monitoring & Automation",
      description: "We use advanced tools and technology to efficiently monitor your systems so we can respond before an issue becomes disruptive to your business.",
      features: [
        "Automated monitoring and alerting",
        "Predictive analytics for maintenance",
        "Workflow automation implementation",
        "Performance optimization tools"
      ],
      category: "Infrastructure",
      icon: "📊"
    },
    {
      title: "Application Integration",
      description: "We securely integrate your cloud and on-site applications using sophisticated software including SaaS integration tools and modern APIs.",
      features: [
        "API development and integration",
        "SaaS application connectivity",
        "Data synchronization solutions",
        "Custom middleware development"
      ],
      category: "Development",
      icon: "🔌"
    },
    {
      title: "Virtual Desktop Infrastructure",
      description: "Virtual Desktop Infrastructure (VDI) can help you better manage your desktop environment without sacrificing performance or user experience.",
      features: [
        "VDI architecture design and deployment",
        "Remote work enablement",
        "Desktop as a Service (DaaS) solutions",
        "User experience optimization"
      ],
      category: "Cloud Solutions",
      icon: "💻"
    },
    {
      title: "Inventory Tracking",
      description: "We use automated inventory tools to ensure your assets are correctly inventoried, patched, protected, and tracked throughout their lifecycle.",
      features: [
        "Automated asset discovery",
        "License management and compliance",
        "Hardware lifecycle tracking",
        "Software deployment management"
      ],
      category: "Infrastructure",
      icon: "📋"
    },
    {
      title: "Analytics & Business Intelligence",
      description: "Our cloud-based analytics and business intelligence solutions give you the information you need to grow and thrive in competitive markets.",
      features: [
        "Data warehouse design and implementation",
        "Custom dashboard development",
        "Predictive analytics solutions",
        "Real-time reporting systems"
      ],
      category: "Development",
      icon: "📈"
    },
    {
      title: "SQL Server Migrations",
      description: "Data and analytics make businesses tick. We help you use the best technology to get the most from your database investments and performance.",
      features: [
        "Database migration planning",
        "Performance tuning and optimization",
        "High availability configuration",
        "Backup and recovery strategies"
      ],
      category: "Data Management",
      icon: "🗄️"
    },
    {
      title: "Application Maintenance",
      description: "We can help you deploy, upgrade, maintain, and support your line of business and productivity applications in the cloud and on-site.",
      features: [
        "Application lifecycle management",
        "Version control and deployment",
        "Performance monitoring",
        "User support and training"
      ],
      category: "Support Services",
      icon: "⚙️"
    },
    {
      title: "Custom Development",
      description: "We provide SQL, SharePoint, CRM, custom application, web and other development services tailored to your specific business requirements.",
      features: [
        "Custom application development",
        "SharePoint and CRM solutions",
        "Web application design",
        "Database development and optimization"
      ],
      category: "Development",
      icon: "💡"
    }
  ];

  const categories = Array.from(new Set(expertiseAreas.map(area => area.category)));

  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
            Areas of Expertise
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Comprehensive technology solutions backed by deep expertise across every aspect of modern IT infrastructure, 
            security, and strategic business transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="px-4 py-2 text-sm font-medium">
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="feature-card group h-full">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <div className="mb-3">
                  <Badge variant="secondary" className="mb-3">{area.category}</Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-3 font-semibold group-hover:text-green-500 transition-colors duration-300">
                  {area.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {area.features.map((feature, featureIndex) => (
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

        {/* Preventive Approach Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Our Preventive Approach to IT Services
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                When unexpected network issues or outages occur, you must have a game plan ready. How you immediately 
                address IT problems can make a difference in your company's reputation and bottom line. Momentum Edge 
                will get your systems up and running again quickly while creating strategies to deal with changing needs 
                brought by market changes, rapid fluctuations in your business, and other factors.
              </p>
              
              <p className="text-gray-700 leading-relaxed font-medium">
                But our approach to IT services goes well beyond reactive fixes and real-time monitoring. Along with 
                addressing immediate issues, we also help reduce costly network downtime, boost data protection, and 
                ensure you're getting the most from your technology investment.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-lg font-semibold text-green-800 mb-4">Our Proactive Benefits:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-sm font-medium text-green-700">Reduced network downtime and outages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-sm font-medium text-green-700">Enhanced data protection and security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-sm font-medium text-green-700">Maximized technology ROI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-sm font-medium text-green-700">Strategic planning for future growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-slate-900 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Leverage Our Expertise?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get a comprehensive assessment of your current IT infrastructure and discover how our expertise 
              can drive your business forward with strategic technology solutions.
            </p>
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Expertise Consultation Request&body=Hello, I would like to discuss how your expertise can help solve our technology challenges and drive business growth."
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Schedule an Expertise Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
