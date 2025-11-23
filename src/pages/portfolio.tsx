import React from "react";
import Layout from "@/components/layout/Layout";
import PortfolioMain from "@/components/containers/PortfolioMain";
import TeamDetailsMain from "@/components/containers/TeamDetailsMain";
import AboutCta from "@/components/containers/home-two/AboutCta";

const OurPortfolio = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <PortfolioMain />
      <AboutCta />
    </Layout>
  );
};

export default OurPortfolio;
