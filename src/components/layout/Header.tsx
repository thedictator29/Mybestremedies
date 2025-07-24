import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Envelope, 
  LinkedinLogo, 
  TwitterLogo, 
  FacebookLogo, 
  List, 
  X 
} from '@phosphor-icons/react';
import ProductRangeDropdown from '../ProductRangeDropdown';
import SmallLogo from '../../assets/logo-small.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Third Party Manufacturing', path: '/manufacturing' },
    { label: 'Franchise', path: '/franchise' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur shadow-medium' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                MyBest<span className="text-medical-red">Remedies</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) =>
                item.label === 'Products' ? (
                  <div
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => {
                      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                      setShowProductDropdown(true);
                    }}
                    onMouseLeave={() => {
                      dropdownTimeout.current = setTimeout(() => setShowProductDropdown(false), 200);
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium transition-colors duration-300 hover:text-medical-red ${
                        location.pathname === item.path 
                          ? 'text-medical-red' 
                          : 'text-foreground/80'
                      }`}
                      tabIndex={0}
                      onFocus={() => setShowProductDropdown(true)}
                      onBlur={() => setShowProductDropdown(false)}
                    >
                      {item.label}
                    </Link>
                    {showProductDropdown && (
                      <div className="absolute left-1/2 top-full pt-4 z-50 flex justify-center w-0 animate-fade-in" style={{transform: 'translateX(-50%)'}}
                        onMouseEnter={() => {
                          if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                          setShowProductDropdown(true);
                        }}
                        onMouseLeave={() => {
                          dropdownTimeout.current = setTimeout(() => setShowProductDropdown(false), 200);
                        }}
                      >
                        <ProductRangeDropdown />
                      </div>
                    )}
                  </div>
                ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-medical-red ${
                    location.pathname === item.path 
                      ? 'text-medical-red' 
                      : 'text-foreground/80'
                  }`}
                >
                  {item.label}
                </Link>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[104px] z-50">
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={toggleMenu}
            />
            <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-strong">
              <nav className="p-8 space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleMenu}
                    className={`block text-lg font-medium transition-colors duration-300 hover:text-medical-red ${
                      location.pathname === item.path 
                        ? 'text-medical-red' 
                        : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;