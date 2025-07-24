import { Link } from 'react-router-dom';
import { 
  Factory, 
  CheckCircle, 
  Handshake, 
  TrendUp, 
  Users, 
  Gear 
} from '@phosphor-icons/react';
import gmpFacilityImage from '../../assets/gmp-facility.jpg';

const ManufacturingFranchiseSection = () => {
  const manufacturingFeatures = [
    { icon: Factory, text: 'State-of-the-art GMP facility' },
    { icon: CheckCircle, text: 'WHO-GMP compliance' },
    { icon: Gear, text: 'Custom formulation services' },
    { icon: Users, text: 'Expert quality control team' },
  ];

  const franchiseFeatures = [
    { icon: Handshake, text: 'Comprehensive marketing support' },
    { icon: TrendUp, text: 'Proven business model' },
    { icon: CheckCircle, text: 'Easy onboarding process' },
    { icon: Users, text: 'Dedicated account management' },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Partner with <span className="text-medical-red">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-medical-blue mx-auto" />
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Expand your business through our manufacturing partnerships or franchise opportunities. 
            Join a network of successful healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Manufacturing Card */}
          <div className="glass-card p-8 space-y-8 section-fade-in">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-blue/30 rounded-full flex items-center justify-center mb-6">
                <Factory size={40} className="text-medical-blue" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Third Party Manufacturing
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Leverage our GMP-certified manufacturing capabilities to bring your pharmaceutical 
                products to market with uncompromising quality and regulatory compliance.
              </p>
            </div>

            <div className="relative">
              <img 
                src={gmpFacilityImage} 
                alt="GMP certified manufacturing facility" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4">
              {manufacturingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon size={20} className="text-medical-blue flex-shrink-0" />
                  <span className="text-foreground/80">{feature.text}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/manufacturing" 
              className="block w-full text-center btn-medical-blue"
            >
              Explore Manufacturing
            </Link>
          </div>

          {/* Franchise Card */}
          <div className="glass-card p-8 space-y-8 section-fade-in">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-medical-red/20 to-medical-red/30 rounded-full flex items-center justify-center mb-6">
                <Handshake size={40} className="text-medical-red" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Franchise Opportunities
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Join our growing network of franchise partners and build a successful pharmaceutical 
                business with our proven systems, training, and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-medical-red">200+</div>
                <div className="text-sm text-foreground/70">Active Partners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-medical-red">95%</div>
                <div className="text-sm text-foreground/70">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-medical-red">₹5L</div>
                <div className="text-sm text-foreground/70">Min Investment</div>
              </div>
            </div>

            <div className="space-y-4">
              {franchiseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon size={20} className="text-medical-red flex-shrink-0" />
                  <span className="text-foreground/80">{feature.text}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/franchise" 
              className="block w-full text-center btn-medical-red"
            >
              Start Your Franchise
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingFranchiseSection;