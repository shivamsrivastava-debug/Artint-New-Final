import React from "react";
import Layout from "@/components/layout/Layout";
import PortfolioMain from "@/components/collection/PortfolioMain";
import AboutCta from "@/components/collection/AboutCta";
import AlbumCard from "@/components/collection/AlbumCard";
import AlbumText from "@/components/collection/AlbumText";
import AlbumOne from "/public/images/AlbumOne.png";
import AlbumTwo from "/public/images/AlbumTwo.png";
import JingleSonic from "@/components/collection/Jingle_Sonic";
import JingleSonicText from "@/components/collection/Jingle_Sonic_text";
import GDS from "@/components/collection/GDS";
import GDS_Tsxt from "@/components/collection/GDS_Tsxt";

const Collection = () => {
  return (
    <Layout header={2}>
      <PortfolioMain />
      <AlbumText />
      <AlbumCard
        items={[
          {
            title: "Neon Requiem",
            text: "Sci-Fi soundtrack...",
            updatedAt: "2025",
            imageTop: AlbumOne,
          },
          {
            title: "One Earth, One Home",
            text: "Peaceful melody...",
            updatedAt: "2024",
            imageTop: AlbumTwo,
          },
        ]}
      />
      <AboutCta />
      <JingleSonicText />
      <JingleSonic />
      <GDS_Tsxt />
      <GDS
        imgSrc={"/images/GameThree.png"}
        heading="Unique Soundscapes – Immersive Game Soundtracks"
        text="Experience the futuristic world of Neon Requiem, our signature sci-fi soundtrack designed specifically for gaming and digital media. Blending EDM, cyberpunk, and sci-fi influences, this soundtrack brings high-energy beats and immersive electronic soundscapes to your game. Whether you’re developing an action-packed sci-fi game or an adventure-driven narrative, Neon Requiem delivers a dynamic, pulse-quickening audio experience that keeps players engaged."
      />
    </Layout>
  );
};

export default Collection;
