import { useEffect } from 'react';
import Hero from '../sections/Hero.jsx';
import TrustBar from '../sections/TrustBar.jsx';
import FeaturedProperties from '../sections/FeaturedProperties.jsx';
import WhyUs from '../sections/WhyUs.jsx';
import HowItWorks from '../sections/HowItWorks.jsx';
import LocalitySection from '../sections/LocalitySection.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import EMICalculator from '../sections/EMICalculator.jsx';
import DeveloperPartners from '../sections/DeveloperPartners.jsx';
import BlogPreview from '../sections/BlogPreview.jsx';
import LeadCapture from '../sections/LeadCapture.jsx';

export default function Home() {
  useEffect(() => {
    document.title = 'NestVault Realty — Find Your Perfect Home in Pune';
  }, []);

  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProperties />
      <WhyUs />
      <HowItWorks />
      <LocalitySection />
      <Testimonials />
      <EMICalculator />
      <DeveloperPartners />
      <BlogPreview />
      <LeadCapture />
    </>
  );
}
