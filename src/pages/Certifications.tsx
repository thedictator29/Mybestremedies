import Layout from '../components/layout/Layout';
import { 
  Certificate, 
  Globe, 
  Shield, 
  Leaf, 
  CheckCircle,
  Trophy,
  Star
} from '@phosphor-icons/react';

const Certifications = () => {
  const certifications = [
    {
      name: 'GMP',
      fullName: 'Good Manufacturing Practice',
      icon: Certificate,
      description: 'Ensuring consistent quality in pharmaceutical manufacturing processes and systems',
      issuedBy: 'Regulatory Authority',
      validUntil: '2025',
      features: [
        'Quality management systems',
        'Personnel training standards',
        'Production facility requirements',
        'Documentation protocols'
      ]
    },
    {
      name: 'ISO 9001:2015',
      fullName: 'Quality Management System',
      icon: Globe,
      description: 'International standard for quality management systems ensuring consistent service delivery',
      issuedBy: 'ISO Certification Body',
      validUntil: '2025',
      features: [
        'Customer satisfaction focus',
        'Process improvement',
        'Risk-based thinking',
        'Continuous improvement'
      ]
    },
    {
      name: 'WHO-GMP',
      fullName: 'World Health Organization GMP',
      icon: Shield,
      description: 'WHO guidelines for pharmaceutical product quality, safety, and efficacy',
      issuedBy: 'World Health Organization',
      validUntil: '2026',
      features: [
        'International quality standards',
        'Global market access',
        'Product safety assurance',
        'Export compliance'
      ]
    },
    {
      name: 'FSSAI',
      fullName: 'Food Safety and Standards Authority',
      icon: Leaf,
      description: 'Compliance with food safety and quality regulations for nutraceutical products',
      issuedBy: 'FSSAI India',
      validUntil: '2025',
      features: [
        'Food safety compliance',
        'Quality standards adherence',
        'Consumer protection',
        'Regulatory compliance'
      ]
    }
  ];

  const qualityStandards = [
    {
      title: 'Raw Material Testing',
      description: 'Every ingredient undergoes rigorous testing for identity, purity, and potency',
      icon: CheckCircle
    },
    {
      title: 'In-Process Controls',
      description: 'Continuous monitoring and testing during all manufacturing stages',
      icon: Trophy
    },
    {
      title: 'Finished Product Testing',
      description: 'Comprehensive final testing before product release and distribution',
      icon: Star
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-medical-blue/10 to-medical-red/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              <span className="text-medical-red">Certifications</span> & Compliance
            </h1>
            <div className="w-24 h-1 bg-medical-blue mx-auto" />
            <p className="text-xl text-foreground/80 leading-relaxed">
              Our commitment to excellence is validated through rigorous certifications from 
              leading regulatory bodies, ensuring the highest standards of quality and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="glass-card p-8 space-y-8 hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <cert.icon size={40} className="text-medical-blue" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-2">{cert.name}</h2>
                    <h3 className="text-lg text-medical-blue font-medium">{cert.fullName}</h3>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed">{cert.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">Issued By:</span>
                    <div className="text-foreground/70">{cert.issuedBy}</div>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Valid Until:</span>
                    <div className="text-foreground/70">{cert.validUntil}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {cert.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-medical-red rounded-full flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-primary">
              Quality <span className="text-medical-blue">Standards</span>
            </h2>
            <div className="w-24 h-1 bg-medical-red mx-auto" />
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our quality assurance process ensures every product meets the highest international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={standard.title} className="glass-card p-8 text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                  <standard.icon size={40} className="text-medical-blue" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{standard.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-primary">
              Regulatory <span className="text-medical-red">Compliance</span>
            </h2>
            <div className="w-24 h-1 bg-medical-blue mx-auto" />
            
            <div className="glass-card p-12 space-y-6">
              <p className="text-xl text-foreground/80 leading-relaxed">
                At MyBestRemedies, regulatory compliance is not just a requirement—it's our commitment 
                to ensuring the safety, efficacy, and quality of every product we manufacture. Our 
                comprehensive compliance program covers all aspects of pharmaceutical manufacturing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="text-left space-y-4">
                  <h3 className="text-xl font-semibold text-medical-blue">Documentation & Records</h3>
                  <p className="text-foreground/70">
                    Complete traceability from raw materials to finished products with comprehensive 
                    batch records and quality documentation.
                  </p>
                </div>
                
                <div className="text-left space-y-4">
                  <h3 className="text-xl font-semibold text-medical-blue">Regular Audits</h3>
                  <p className="text-foreground/70">
                    Internal and external audits ensure continuous compliance with regulatory 
                    requirements and international standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-blue text-medical-blue-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Trust in Our Quality Standards
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Partner with a manufacturer that prioritizes quality, compliance, and regulatory excellence.
          </p>
          <button className="bg-white text-medical-blue font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
            Download Certificates
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;