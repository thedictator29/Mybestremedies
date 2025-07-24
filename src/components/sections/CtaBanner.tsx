import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

const CtaBanner = () => {
  return (
    <section className="py-20 bg-medical-red text-medical-red-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Partner With a Trusted
            <span className="block">Pharma Brand</span>
          </h2>
          
          <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of successful healthcare professionals who have chosen MyBestRemedies 
            as their trusted pharmaceutical partner. Experience the difference quality makes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Link 
              to="/contact" 
              className="group bg-white text-medical-red font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-lg flex items-center gap-3"
            >
              <span>Get in Touch</span>
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </Link>

            <Link 
              to="/franchise" 
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-medical-red hover:scale-105"
            >
              Explore Franchise
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="space-y-2">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80">Products Manufactured</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm opacity-80">Active Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;