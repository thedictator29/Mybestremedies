import manufacturingImage from '../../assets/manufacturing-intro.jpg';

const IntroSection = () => {
  return (
    <section className="py-24" style={{ backgroundColor: '#d7d4d3' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 section-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Excellence in 
                <span className="text-medical-blue"> Pharmaceutical</span> Manufacturing
              </h2>
              <div className="w-24 h-1 bg-medical-red" />
            </div>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                MyBestRemedies stands as a beacon of trust in the pharmaceutical industry, 
                committed to delivering the highest quality wellness solutions through 
                state-of-the-art manufacturing processes and rigorous quality control.
              </p>
              
              <p>
                Our mission is rooted in ethical practices, transparency, and an unwavering 
                commitment to improving lives through innovative healthcare products. We 
                partner with healthcare professionals and businesses to expand access to 
                reliable, effective pharmaceutical solutions.
              </p>

              <p>
                With WHO-GMP certified facilities and comprehensive product ranges, we ensure 
                every product meets international quality standards while remaining accessible 
                to those who need them most.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-red">500+</div>
                <div className="text-sm text-foreground/70 mt-1">Product Formulations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-blue">15+</div>
                <div className="text-sm text-foreground/70 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative section-fade-in">
            <div className="glass-card p-2 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={manufacturingImage} 
                alt="Modern pharmaceutical manufacturing equipment" 
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 glass-card p-6 text-center">
              <div className="text-2xl font-bold text-medical-blue">GMP</div>
              <div className="text-sm text-foreground/70">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;