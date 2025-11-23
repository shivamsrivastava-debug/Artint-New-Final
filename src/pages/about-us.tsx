import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamMembers from "@/components/containers/TeamMembers";
import AboutCta from "@/components/containers/home-two/AboutCta";
import Info from "@/components/containers/home-four/Info";

const AboutUs = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner/>
      <Info />
      <TeamMembers />
      <AboutCta />
    </Layout>
  );
};

export default AboutUs;
