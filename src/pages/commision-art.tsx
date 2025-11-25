import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/vision/CmnBanner";
import ContactMain from "@/components/commisionArt/ContactMain";

const ContactUs = () => {
  return (
    <Layout header={2}>
      <CmnBanner title={"Get In Touch"} />
      <ContactMain />
    </Layout>
  );
};

export default ContactUs;
