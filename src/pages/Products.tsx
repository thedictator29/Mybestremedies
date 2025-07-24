import Layout from '../components/layout/Layout';
import { 
  Pill, 
  Circle, 
  Drop, 
  Syringe, 
  Flask, 
  Package, 
  FirstAid, 
  Eyedropper, 
  HandSoap, 
  Heart 
} from '@phosphor-icons/react';

const Products = () => {
  const productCategories = [
    {
      name: 'Tablets',
      icon: Pill,
      description: 'High-quality oral solid dosage forms for various therapeutic applications',
      products: ['Analgesics', 'Antibiotics', 'Vitamins', 'Antacids', 'Anti-hypertensives'],
      features: ['Precision coating', 'Controlled release', 'Film coated', 'Enteric coated']
    },
    {
      name: 'Capsules',
      icon: Circle,
      description: 'Precision-filled pharmaceutical capsules with consistent dosing',
      products: ['Probiotics', 'Supplements', 'Antibiotics', 'Pain relievers', 'Multivitamins'],
      features: ['Hard gelatin', 'Soft gelatin', 'Vegetarian options', 'Delayed release']
    },
    {
      name: 'Syrups',
      icon: Drop,
      description: 'Liquid formulations suitable for all age groups with pleasant taste',
      products: ['Cough syrups', 'Pediatric formulations', 'Tonics', 'Antacids', 'Vitamins'],
      features: ['Sugar-free options', 'Natural flavoring', 'Measured dosing', 'Long shelf life']
    },
    {
      name: 'Injections',
      icon: Syringe,
      description: 'Sterile injectable solutions manufactured under strict aseptic conditions',
      products: ['Antibiotics', 'Analgesics', 'Vitamins', 'Vaccines', 'Emergency medicines'],
      features: ['Sterile processing', 'Quality tested', 'Various volumes', 'Ready to use']
    },
    {
      name: 'Powders',
      icon: Flask,
      description: 'Pharmaceutical powder formulations for oral and topical applications',
      products: ['Oral rehydration', 'Protein supplements', 'Antibiotic powders', 'Antifungals'],
      features: ['Fine particle size', 'Easy mixing', 'Stable formulation', 'Measured sachets']
    },
    {
      name: 'Ointments',
      icon: FirstAid,
      description: 'Topical therapeutic applications for skin conditions and wound care',
      products: ['Antiseptic creams', 'Anti-inflammatory', 'Moisturizers', 'Antifungal creams'],
      features: ['Non-greasy formula', 'Quick absorption', 'Dermatologically tested', 'Suitable for sensitive skin']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-medical-blue/10 to-medical-red/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Product <span className="text-medical-red">Range</span>
            </h1>
            <div className="w-24 h-1 bg-medical-blue mx-auto" />
            <p className="text-xl text-foreground/80 leading-relaxed">
              Comprehensive pharmaceutical solutions covering every therapeutic need with 
              uncompromising quality and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <div key={category.name} className="glass-card p-8 space-y-6 hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                    <category.icon size={32} className="text-medical-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{category.name}</h2>
                </div>

                <p className="text-foreground/80 leading-relaxed">{category.description}</p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-medical-red">Available Products:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-medical-blue rounded-full" />
                        <span className="text-sm text-foreground/70">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-medical-blue">Key Features:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-medical-red rounded-full" />
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

      {/* Quality Assurance */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-primary">
              Quality <span className="text-medical-blue">Assurance</span>
            </h2>
            <div className="w-24 h-1 bg-medical-red mx-auto" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass-card p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                  <Flask size={32} className="text-medical-blue" />
                </div>
                <h3 className="text-lg font-semibold text-primary">Raw Material Testing</h3>
                <p className="text-sm text-foreground/70">Every ingredient is thoroughly tested before production</p>
              </div>

              <div className="glass-card p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                  <Syringe size={32} className="text-medical-blue" />
                </div>
                <h3 className="text-lg font-semibold text-primary">In-Process Monitoring</h3>
                <p className="text-sm text-foreground/70">Continuous quality checks during manufacturing</p>
              </div>

              <div className="glass-card p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-full flex items-center justify-center">
                  <Package size={32} className="text-medical-blue" />
                </div>
                <h3 className="text-lg font-semibold text-primary">Final Product Testing</h3>
                <p className="text-sm text-foreground/70">Comprehensive testing before product release</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-red text-medical-red-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Need Custom Product Development?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our R&D team specializes in developing custom formulations tailored to your specific requirements.
          </p>
          <button className="bg-white text-medical-red font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
            Request Custom Development
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;