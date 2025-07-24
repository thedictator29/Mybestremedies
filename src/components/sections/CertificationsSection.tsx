import { 
  Certificate, 
  Globe, 
  Shield, 
  Leaf 
} from '@phosphor-icons/react';

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'GMP',
      fullName: 'Good Manufacturing Practice',
      icon: Certificate,
      description: 'Ensuring consistent quality in pharmaceutical manufacturing'
    },
    {
      name: 'ISO',
      fullName: 'International Organization for Standardization',
      icon: Globe,
      description: 'Meeting international quality management standards'
    },
    {
      name: 'WHO-GMP',
      fullName: 'World Health Organization GMP',
      icon: Shield,
      description: 'WHO guidelines for pharmaceutical product quality'
    },
    {
      name: 'FSSAI',
      fullName: 'Food Safety and Standards Authority',
      icon: Leaf,
      description: 'Compliance with food safety and quality regulations'
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Trust Through <span className="text-medical-blue">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-medical-red mx-auto" />
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is validated through rigorous certifications from 
            leading regulatory bodies worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.name}
              className="cert-badge"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center mb-6">
                <cert.icon size={40} className="text-medical-blue" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-2">{cert.name}</h3>
              <h4 className="text-sm font-medium text-medical-blue mb-3">{cert.fullName}</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 text-center section-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Regulatory Compliance at Every Step
          </h3>
          <p className="text-lg text-foreground/80 mb-6 max-w-4xl mx-auto">
            Our manufacturing processes undergo continuous monitoring and validation to ensure 
            compliance with international pharmaceutical standards. Every product batch is 
            thoroughly tested and documented before release.
          </p>
          <button className="btn-medical-red">
            View All Certifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;