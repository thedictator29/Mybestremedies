import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TabletIcon from '../../assets/icons/tablet.png';
import CapsuleIcon from '../../assets/icons/capsule.png';
import SyringeIcon from '../../assets/icons/injection.png';
import PowdersIcon from '../../assets/icons/powder.png';
import SachetsIcon from '../../assets/icons/sachets.png';
import OintmentsIcon from '../../assets/icons/ointment.png';
import DropsIcon from '../../assets/icons/dropper.png';
import CombipackIcon from '../../assets/icons/lotion.png';
import OthersIcon from '../../assets/icons/tonic.png';
import SyrupIcon from '../../assets/icons/syrup.png';

const ProductRangeSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    { name: 'Tablets', icon: TabletIcon, description: 'High-quality oral solid dosage forms' },
    { name: 'Capsules', icon: CapsuleIcon, description: 'Precision-filled pharmaceutical capsules' },
    { name: 'Syrups', icon: SyrupIcon, description: 'Liquid formulations for all age groups' },
    { name: 'Injections', icon: SyringeIcon, description: 'Sterile injectable solutions' },
    { name: 'Powders', icon: PowdersIcon, description: 'Pharmaceutical powder formulations' },
    { name: 'Sachets', icon: SachetsIcon, description: 'Convenient single-dose packaging' },
    { name: 'Ointments', icon: OintmentsIcon, description: 'Topical therapeutic applications' },
    { name: 'Drops', icon: DropsIcon, description: 'Precise liquid dosage delivery' },
    { name: 'Combipack', icon: CombipackIcon, description: 'Dermatological care solutions' },
    { name: 'Others', icon: OthersIcon, description: 'Health and wellness formulations' },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Comprehensive <span className="text-medical-red">Product Range</span>
          </h2>
          <div className="w-24 h-1 bg-medical-blue mx-auto" />
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            From tablets to tonics, our diverse pharmaceutical portfolio covers every therapeutic need
            with uncompromising quality and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, index) => {
            const isTablet = product.name === 'Tablets';
            const isCapsule = product.name === 'Capsules';
            const isDropper = product.name === 'Drops';
            const isInjection = product.name === 'Injections';
            const isOintment = product.name === 'Ointments';
            const isPowder = product.name === 'Powders';
            const isSachet = product.name === 'Sachets';
            const isSyrup = product.name === 'Syrups';
            const isCombipack = product.name === 'Combipack';
            const isOthers = product.name === 'Others';
            const isHovered = hoveredIndex === index;
            return (
              <Link
                to={`/products/${product.name.toLowerCase()}`}
                key={product.name}
                className="block"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="product-card text-center flex items-center justify-center h-52 bg-gradient-to-br from-medical-blue/20 to-medical-red/20 rounded-xl relative overflow-hidden transition-shadow"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    boxShadow: isHovered
                      ? "0 0 12px 2px rgba(59,130,246,0.18)" // lighter, smaller shadow on hover
                      : undefined,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={product.icon}
                    alt={product.name}
                    className={
                      isTablet
                        ? "max-w-full max-h-full p-0 scale-[2.15] object-contain"
                        : isCapsule
                          ? "max-w-full max-h-full p-0 scale-[1.75] object-contain"
                          : isDropper || isInjection
                            ? "max-w-full max-h-full p-0 scale-[2] object-contain"
                            : isOintment
                              ? "max-w-full max-h-full p-0 scale-[2] object-contain mt-6"
                              : isPowder
                                ? "max-w-full max-h-full p-0 scale-[2] object-contain"
                                : isSachet
                                  ? "max-w-full max-h-full p-0 scale-[2] object-contain ml-6 mt-4"
                                  : isSyrup
                                    ? "max-w-full max-h-full p-0 scale-[2] object-contain"
                                    : isCombipack
                                      ? "max-w-full max-h-full p-0 scale-[1.75] object-contain -mt-4"
                                    : isOthers
                                      ? "max-w-full max-h-full p-0 scale-[1.85] object-contain"
                              : "w-[98%] h-[98%] object-contain"
                    }
                  />
                  {isHovered && (
                    <div
                      className="absolute bottom-0 left-0 w-full px-3 py-2"
                      style={{
                        background: "rgba(248, 242, 255, 0.95)",
                        borderBottomLeftRadius: "1rem",
                        borderBottomRightRadius: "1rem",
                        borderTop: "1px solid #e0e0e0",
                        boxShadow: "0 2px 12px 0 rgba(59,130,246,0.08)",
                        fontFamily: "'Courier New', Courier, monospace",
                        fontWeight: 400,
                        fontSize: "1rem",
                        color: "#3b3b3b",
                        textAlign: "center",
                        pointerEvents: "none",
                      }}
                    >
                      {product.name}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16 section-fade-in">
          <p className="text-lg text-foreground/80 mb-8">
            Need a custom formulation? Our R&D team is ready to develop specialized solutions for your requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductRangeSection;