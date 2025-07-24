import Layout from '../components/layout/Layout';
import { 
  Factory, 
  CheckCircle, 
  Users, 
  Gear, 
  Shield, 
  Clock, 
  TrendUp, 
  Package 
} from '@phosphor-icons/react';
import gmpFacilityImage from '../assets/gmp-facility.jpg';

const Manufacturing = () => {
  const capabilities = [
    {
      icon: Factory,
      title: 'State-of-the-art Facility',
      description: 'Modern manufacturing plant with advanced equipment and automated systems'
    },
    {
      icon: CheckCircle,
      title: 'WHO-GMP Certified',
      description: 'Compliance with World Health Organization Good Manufacturing Practices'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Qualified professionals with extensive pharmaceutical manufacturing experience'
    },
    {
      icon: Gear,
      title: 'Custom Formulation',
      description: 'Tailored product development to meet your specific requirements'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control at every stage of production'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Efficient production schedules ensuring on-time product delivery'
    }
  ];

  const services = [
    {
      title: 'Contract Manufacturing',
      description: 'Complete manufacturing services for pharmaceutical companies',
      features: ['Full production capability', 'Regulatory compliance', 'Quality documentation', 'Scalable production']
    },
    {
      title: 'Private Labeling',
      description: 'Manufacturing products under your brand name with our expertise',
      features: ['Custom packaging design', 'Brand guidelines adherence', 'Marketing support', 'Distribution assistance']
    },
    {
      title: 'Product Development',
      description: 'R&D services for new product formulation and optimization',
      features: ['Formula development', 'Stability testing', 'Regulatory filing support', 'Process optimization']
    }
  ];

  const processSteps = [
    { step: '01', title: 'Initial Consultation', description: 'Understanding your requirements and objectives' },
    { step: '02', title: 'Product Development', description: 'Formulation and testing of your product specifications' },
    { step: '03', title: 'Regulatory Approval', description: 'Assistance with necessary certifications and approvals' },
    { step: '04', title: 'Production Planning', description: 'Optimized manufacturing schedule and resource allocation' },
    { step: '05', title: 'Quality Manufacturing', description: 'Production under strict GMP guidelines' },
    { step: '06', title: 'Quality Control', description: 'Comprehensive testing and quality assurance' },
    { step: '07', title: 'Packaging & Labeling', description: 'Professional packaging according to specifications' },
    { step: '08', title: 'Delivery & Support', description: 'Timely delivery with ongoing technical support' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-medical-blue/10 to-medical-red/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Third Party <span className="text-medical-red">Manufacturing</span>
            </h1>
            <div className="w-24 h-1 bg-medical-blue mx-auto" />
            <p className="text-xl text-foreground/80 leading-relaxed">
              Partner with our GMP-certified facility to bring your pharmaceutical products to market 
              with uncompromising quality and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-primary">
              Manufacturing <span className="text-medical-blue">Capabilities</span>
            </h2>
            <div className="w-24 h-1 bg-medical-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={capability.title} className="glass-card p-8 text-center space-y-6 hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                  <capability.icon size={40} className="text-medical-blue" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{capability.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Image */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-primary">
                World-Class <span className="text-medical-red">Facility</span>
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Our state-of-the-art manufacturing facility spans over 50,000 square feet and is 
                  equipped with the latest technology for pharmaceutical production. Every aspect 
                  of our facility is designed to meet and exceed international quality standards.
                </p>
                
                <p>
                  From raw material storage to finished product packaging, our facility maintains 
                  strict environmental controls, comprehensive documentation systems, and rigorous 
                  quality assurance protocols.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-red">50,000</div>
                  <div className="text-sm text-foreground/70">Sq. ft. Facility</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue">24/7</div>
                  <div className="text-sm text-foreground/70">Quality Monitoring</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-4">
                <img 
                  src={gmpFacilityImage} 
                  alt="GMP certified pharmaceutical manufacturing facility" 
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-primary">
              Our <span className="text-medical-blue">Services</span>
            </h2>
            <div className="w-24 h-1 bg-medical-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="glass-card p-8 space-y-6">
                <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-medical-blue flex-shrink-0" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-primary">
              Manufacturing <span className="text-medical-red">Process</span>
            </h2>
            <div className="w-24 h-1 bg-medical-blue mx-auto" />
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our systematic approach ensures quality, compliance, and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <div key={process.step} className="glass-card p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-medical-blue to-medical-red rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-primary">{process.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-blue text-medical-blue-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Start Manufacturing?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Contact our team to discuss your manufacturing requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-medical-blue font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
              Request Quote
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-medical-blue transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;