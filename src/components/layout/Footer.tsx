import { Link } from 'react-router-dom';
import { 
  Phone, 
  Envelope, 
  MapPin, 
  LinkedinLogo, 
  TwitterLogo, 
  FacebookLogo 
} from '@phosphor-icons/react';
import SmallLogo from '../../assets/logo-small.jpg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <img src={SmallLogo} alt="Logo" className="h-24 w-auto mb-4" />
            <div className="text-2xl font-bold">
              MyBest<span className="text-medical-red">Remedies</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Delivering trust through quality wellness solutions. Your trusted partner 
              in pharmaceutical excellence and healthcare innovation.
            </p>
            <div className="flex space-x-4">
              <LinkedinLogo size={24} className="cursor-pointer hover:text-medical-red transition-colors" />
              <TwitterLogo size={24} className="cursor-pointer hover:text-medical-red transition-colors" />
              <FacebookLogo size={24} className="cursor-pointer hover:text-medical-red transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              <Link to="/about" className="block text-primary-foreground/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/products" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Product Range
              </Link>
              <Link to="/manufacturing" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Third Party Manufacturing
              </Link>
              <Link to="/franchise" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Franchise Opportunities
              </Link>
              <Link to="/certifications" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Certifications
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-medical-red mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  123 Pharma Plaza, Industrial Area,<br />
                  Healthcare City, HC 560001
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-medical-red flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Envelope size={20} className="text-medical-red flex-shrink-0" />
                <span className="text-primary-foreground/80">info@mybestremedies.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 MyBestRemedies. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;