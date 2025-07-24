import { Link } from 'react-router-dom';
// import heroImage from '../../assets/hero-pharma-facility.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#d7d4d3' }}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* Replace the src below with your actual video file or link */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlays removed for a clean, colored background */}
      </div>
    </section>
  );
};

export default HeroSection;