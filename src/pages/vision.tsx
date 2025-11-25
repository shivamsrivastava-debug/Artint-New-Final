import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/vision/CmnBanner";
import TeamMembers from "@/components/vision/TeamMembers";
import AboutCta from "@/components/collection/AboutCta";
import Info from "@/components/vision/Info";

const vision = () => {
  return (
    <Layout header={2}>
      <CmnBanner title={"Vision Artint Studio"}/>
      <Info />
      <TeamMembers />
      <AboutCta />
    </Layout>
  );
};

export default vision;
