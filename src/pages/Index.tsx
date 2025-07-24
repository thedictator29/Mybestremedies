import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import ProductRangeSection from '../components/sections/ProductRangeSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ManufacturingFranchiseSection from '../components/sections/ManufacturingFranchiseSection';
import MissionSection from '../components/sections/MissionSection';
import CtaBanner from '../components/sections/CtaBanner';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <ProductRangeSection />
      <CertificationsSection />
      <ManufacturingFranchiseSection />
      <MissionSection />
      <CtaBanner />
    </Layout>
  );
};

export default Index;
