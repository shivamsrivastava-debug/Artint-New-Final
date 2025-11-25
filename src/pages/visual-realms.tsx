import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/vision/CmnBanner";
import ClientFeedbackMain from "@/components/visualRealms/ClientFeedbackMain";

const ClientFeedback = () => {
  return (
    <Layout header={2}>
      <CmnBanner title={"Vision Artint Studio"} />
      <ClientFeedbackMain />
    </Layout>
  );
};

export default ClientFeedback;
