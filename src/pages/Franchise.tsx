import Layout from '../components/layout/Layout';
import { 
  Handshake, 
  TrendUp, 
  Users, 
  CheckCircle, 
  Star, 
  CurrencyDollar, 
  MapPin, 
  Trophy 
} from '@phosphor-icons/react';

const Franchise = () => {
  const benefits = [
    {
      icon: Handshake,
      title: 'Comprehensive Support',
      description: 'Complete training, marketing materials, and ongoing business guidance'
    },
    {
      icon: TrendUp,
      title: 'Proven Business Model',
      description: 'Established systems and processes with a track record of success'
    },
    {
      icon: Users,
      title: 'Marketing Assistance',
      description: 'Professional marketing campaigns and promotional materials'
    },
    {
      icon: CheckCircle,
      title: 'Quality Products',
      description: 'Access to our complete range of GMP-certified pharmaceutical products'
    },
    {
      icon: Star,
      title: 'Brand Recognition',
      description: 'Leverage the trusted MyBestRemedies brand in your market'
    },
    {
      icon: CurrencyDollar,
      title: 'Competitive Pricing',
      description: 'Attractive pricing structure with good profit margins'
    }
  ];

  const requirements = [
    { criteria: 'Initial Investment', value: '₹5 - 15 Lakhs' },
    { criteria: 'Business Experience', value: 'Pharma/Healthcare preferred' },
    { criteria: 'Territory Coverage', value: 'Dedicated area rights' },
    { criteria: 'Infrastructure', value: 'Office/warehouse space' },
    { criteria: 'Team Size', value: '2-5 sales professionals' },
    { criteria: 'Commitment', value: 'Full-time dedication' }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Application',
      description: 'Submit your franchise application with required documents'
    },
    {
      step: '2',
      title: 'Evaluation',
      description: 'Our team reviews your profile and business plan'
    },
    {
      step: '3',
      title: 'Meeting',
      description: 'Personal meeting to discuss terms and expectations'
    },
    {
      step: '4',
      title: 'Agreement',
      description: 'Finalize franchise agreement and investment'
    },
    {
      step: '5',
      title: 'Training',
      description: 'Comprehensive training on products and business operations'
    },
    {
      step: '6',
      title: 'Launch',
      description: 'Grand opening with full marketing support'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      quote: 'Partnering with MyBestRemedies has been a game-changer for my business. Their support and product quality are exceptional.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi, NCR',
      quote: 'The training and ongoing support provided by MyBestRemedies team helped me establish a successful pharmaceutical business.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      location: 'Ahmedabad, Gujarat',
      quote: 'Excellent product range and competitive pricing. My customers trust the MyBestRemedies brand completely.',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-medical-blue/10 to-medical-red/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Franchise <span className="text-medical-red">Opportunities</span>
            </h1>
            <div className="w-24 h-1 bg-medical-blue mx-auto" />
            <p className="text-xl text-foreground/80 leading-relaxed">
              Join our successful network of franchise partners and build a thriving pharmaceutical 
              business with comprehensive support and proven systems.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-primary">
              Franchise <span className="text-medical-blue">Benefits</span>
            </h2>
            <div className="w-24 h-1 bg-medical-red mx-auto" />
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Experience the advantages of partnering with a trusted pharmaceutical brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="glass-card p-8 text-center space-y-6 hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                  <benefit.icon size={40} className="text-medical-blue" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold text-primary">
                Franchise <span className="text-medical-red">Requirements</span>
              </h2>
              <div className="w-24 h-1 bg-medical-blue mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {requirements.map((req, index) => (
                <div key={req.criteria} className="glass-card p-6 flex justify-between items-center">
                  <span className="font-medium text-primary">{req.criteria}</span>
                  <span className="text-medical-blue font-semibold">{req.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 glass-card p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                Investment Returns
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-medical-red">25-35%</div>
                  <div className="text-sm text-foreground/70">Expected ROI</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-medical-blue">12-18</div>
                  <div className="text-sm text-foreground/70">Months Payback</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-medical-red">95%</div>
                  <div className="text-sm text-foreground/70">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-primary">
              Franchise <span className="text-medical-blue">Process</span>
            </h2>
            <div className="w-24 h-1 bg-medical-red mx-auto" />
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Simple and transparent process to become our franchise partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((process, index) => (
              <div key={process.step} className="glass-card p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-medical-blue to-medical-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-primary">{process.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-primary">
              Partner <span className="text-medical-red">Success Stories</span>
            </h2>
            <div className="w-24 h-1 bg-medical-blue mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="glass-card p-8 space-y-6">
                <div className="flex gap-1 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-foreground/80 italic leading-relaxed text-center">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="text-center space-y-1">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-foreground/70 flex items-center justify-center gap-1">
                    <MapPin size={14} />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-red text-medical-red-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Start Your Franchise Journey?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join our network of successful franchise partners and build a profitable pharmaceutical business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-medical-red font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
              Apply for Franchise
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-medical-red transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Franchise;