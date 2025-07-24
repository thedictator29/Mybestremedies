import Layout from '../components/layout/Layout';
import { 
  Users, 
  Target, 
  Trophy,
  TrendUp, 
  Clock, 
  Globe 
} from '@phosphor-icons/react';
import teamImage from '../assets/about-team.jpg';

const About = () => {
  const milestones = [
    { year: '2009', event: 'Company founded with vision for quality healthcare' },
    { year: '2012', event: 'Achieved GMP certification' },
    { year: '2015', event: 'Expanded to 100+ product formulations' },
    { year: '2018', event: 'WHO-GMP certification obtained' },
    { year: '2020', event: 'Launched franchise program' },
    { year: '2024', event: '500+ products, 200+ partners nationwide' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to pharmaceutical quality standards'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Putting healthcare professionals and patients at the center of everything'
    },
    {
      icon: Trophy,
      title: 'Innovation',
      description: 'Continuous improvement in formulations and manufacturing processes'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making quality healthcare solutions accessible to all communities'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-medical-blue/10 to-medical-red/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              About <span className="text-medical-red">MyBestRemedies</span>
            </h1>
            <div className="w-24 h-1 bg-medical-blue mx-auto" />
            <p className="text-xl text-foreground/80 leading-relaxed">
              Pioneering pharmaceutical excellence since 2009, we've built a legacy of trust, 
              quality, and innovation in healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-primary">
                Our <span className="text-medical-blue">Journey</span>
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Founded with a vision to make quality healthcare accessible to all, MyBestRemedies 
                  has grown from a small pharmaceutical startup to a trusted name in the industry. 
                  Our journey began with a simple belief: every individual deserves access to safe, 
                  effective, and affordable medicines.
                </p>
                
                <p>
                  Over the years, we've invested heavily in state-of-the-art manufacturing facilities, 
                  quality control systems, and regulatory compliance. Our commitment to excellence 
                  has earned us certifications from leading regulatory bodies and the trust of 
                  healthcare professionals nationwide.
                </p>

                <p>
                  Today, we continue to innovate and expand our reach, partnering with distributors, 
                  franchisees, and healthcare providers to ensure our quality products reach every 
                  corner of the country.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-4">
                <img 
                  src={teamImage} 
                  alt="MyBestRemedies professional team" 
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-primary">
              Our <span className="text-medical-red">Milestones</span>
            </h2>
            <div className="w-24 h-1 bg-medical-blue mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-center gap-8 glass-card p-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-medical-blue to-medical-red rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-foreground/80">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-primary">
              Our <span className="text-medical-blue">Values</span>
            </h2>
            <div className="w-24 h-1 bg-medical-red mx-auto" />
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              These core values guide every decision we make and every product we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="glass-card p-8 text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                  <value.icon size={40} className="text-medical-blue" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-r from-medical-blue to-medical-red text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm opacity-90">Product Formulations</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">200+</div>
              <div className="text-sm opacity-90">Franchise Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm opacity-90">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;