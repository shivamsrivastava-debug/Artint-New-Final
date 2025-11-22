import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";


const Home = () => {
  return (
    <Layout header={1} footer={1} video={true}>
      <HomeOneBanner />
      <Agency />
      <PortfolioText />
      <HomeTestimonial />
    </Layout>
  );
};

export default Home;
