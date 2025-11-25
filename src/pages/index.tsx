import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/experience/HomeOneBanner";
import Agency from "@/components/experience/Agency";
import PortfolioText from "@/components/experience/PortfolioText";
import HomeTestimonial from "@/components/experience/HomeTestimonial";
import AboutCta from "@/components/collection/AboutCta";


const Home = () => {
  return (
    <Layout header={1}>
      <HomeOneBanner />
      <Agency />
      <PortfolioText />
      <AboutCta />
      <HomeTestimonial />
    </Layout>
  );
};

export default Home;
