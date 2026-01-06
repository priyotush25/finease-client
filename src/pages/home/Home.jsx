import React, { use } from "react";
import Hero from "../../components/home/Hero";

import Overview from "../../components/home/Overview";
import { AuthContext } from "../../provider/AuthProvider";

import FeaturesSection from "../../components/home/FeaturesSection";
import HowItWorksSection from "../../components/home/HowItWorksSection";
import TestimonialSection from "../../components/home/TestimonialSection";
import Newsletter from "../../components/home/Newsletter";
import FAQSection from "../../components/home/FAQSection";
import CTASection from "../../components/home/TASection";
import Planning from "../../components/home/Planning";


const Home = () => {
  const { user } = use(AuthContext);
  return (
    <>
      <title>Home | FinEase</title>
      <Hero />
      {user && <Overview />}
   
      <Planning />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialSection />
      <Newsletter />
      <FAQSection />
     
    </>
  );
};

export default Home;
