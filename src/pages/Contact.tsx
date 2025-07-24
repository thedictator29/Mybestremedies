import Layout from '../components/layout/Layout';
import { 
  MapPin, 
  Phone, 
  Envelope, 
  Clock, 
  PaperPlaneTilt,
  User,
  Buildings
} from '@phosphor-icons/react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: [
        '123 Pharma Plaza, Industrial Area',
        'Healthcare City, HC 560001',
        'India'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 98765 43210',
        '+91 98765 43211',
        'Toll Free: 1800-123-4567'
      ]
    },
    {
      icon: Envelope,
      title: 'Email Addresses',
      details: [
        'info@mybestremedies.com',
        'sales@mybestremedies.com',
        'support@mybestremedies.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const departments = [
    {
      name: 'Sales & Marketing',
      phone: '+91 98765 43210',
      email: 'sales@mybestremedies.com',
      icon: PaperPlaneTilt
    },
    {
      name: 'Franchise Inquiries',
      phone: '+91 98765 43211',
      email: 'franchise@mybestremedies.com',
      icon: Buildings
    },
    {
      name: 'Manufacturing',
      phone: '+91 98765 43212',
      email: 'manufacturing@mybestremedies.com',
      icon: User
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-medical-blue/10 to-medical-red/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Contact <span className="text-medical-red">Us</span>
            </h1>
            <div className="w-24 h-1 bg-medical-blue mx-auto" />
            <p className="text-xl text-foreground/80 leading-relaxed">
              Get in touch with our team to explore partnership opportunities, 
              discuss your requirements, or learn more about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="glass-card p-8 text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                  <info.icon size={40} className="text-medical-blue" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-foreground/70 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Send Us a <span className="text-medical-blue">Message</span>
                </h2>
                <div className="w-24 h-1 bg-medical-red mx-auto lg:mx-0" />
              </div>

              <div className="glass-card p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent" required>
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="franchise">Franchise Opportunity</option>
                      <option value="manufacturing">Third Party Manufacturing</option>
                      <option value="products">Product Information</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      placeholder="Tell us about your requirements or questions..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-medical-red text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  <span className="text-medical-red">Direct</span> Contacts
                </h2>
                <div className="w-24 h-1 bg-medical-blue mx-auto lg:mx-0" />
                <p className="text-foreground/80 mt-4">
                  Reach out to the right department for faster assistance
                </p>
              </div>

              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <div key={dept.name} className="glass-card p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                        <dept.icon size={24} className="text-medical-blue" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary">{dept.name}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-medical-red" />
                        <span className="text-foreground/70">{dept.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Envelope size={16} className="text-medical-red" />
                        <span className="text-foreground/70">{dept.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="glass-card p-4">
                <div className="h-64 bg-gradient-to-br from-medical-blue/10 to-medical-red/10 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin size={40} className="text-medical-blue mx-auto" />
                    <p className="text-foreground/70">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-red text-medical-red-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Schedule a consultation to discuss your pharmaceutical needs and explore partnership opportunities.
          </p>
          <button className="bg-white text-medical-red font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;