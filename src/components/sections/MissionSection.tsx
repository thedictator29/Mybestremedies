import { 
  Shield, 
  Eye, 
  Heart, 
  Globe 
} from '@phosphor-icons/react';

const MissionSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every product undergoes rigorous testing to ensure the highest safety standards'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open communication and clear processes in everything we do'
    },
    {
      icon: Heart,
      title: 'Well-being',
      description: 'Committed to improving lives through quality healthcare solutions'
    },
    {
      icon: Globe,
      title: 'Ethical Practices',
      description: 'Maintaining integrity and responsibility in all our business operations'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-medical-blue/5 to-medical-red/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12 section-fade-in">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Our Mission: <span className="text-medical-blue">Ethical Medicine</span>,
              <span className="block text-medical-red">Exceptional Care</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-medical-blue to-medical-red mx-auto" />
          </div>

          <div className="text-xl text-foreground/80 leading-relaxed space-y-6">
            <p>
              At MyBestRemedies, we believe that healthcare is not just a business—it's a responsibility. 
              Our mission extends beyond manufacturing pharmaceuticals; we're dedicated to creating 
              a healthier world through ethical practices, innovative solutions, and unwavering quality.
            </p>
            
            <p>
              Every tablet, capsule, and formulation that leaves our facility carries with it our 
              commitment to excellence, safety, and the well-being of those who trust us with their health. 
              We partner with healthcare professionals to ensure accessible, effective treatments reach 
              every corner of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="glass-card p-6 text-center space-y-4 hover:-translate-y-2 transition-transform duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                  <value.icon size={32} className="text-medical-blue" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{value.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <blockquote className="text-2xl font-medium text-primary italic leading-relaxed">
              "Quality is not an act, it is a habit. We make it our daily commitment to 
              deliver pharmaceuticals that meet the highest standards of safety and efficacy."
            </blockquote>
            <cite className="block mt-4 text-medical-blue font-medium">
              — MyBestRemedies Quality Assurance Team
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;