import React from "react";
import Layout from "@/components/layout/Layout";
import PortfolioMain from "@/components/containers/PortfolioMain";
import AboutCta from "@/components/containers/home-two/AboutCta";
import AlbumCard from "@/components/containers/AlbumCard";
import AlbumText from "@/components/containers/AlbumText";
import AlbumOne from "/public/images/AlbumOne.png";
import AlbumTwo from "/public/images/AlbumTwo.png";
import JingleSonic from "@/components/containers/Jingle_Sonic";
import JingleSonicText from "@/components/containers/Jingle_Sonic_text";
import GDS from "@/components/containers/GDS";
import GDS_Tsxt from "@/components/containers/GDS_Tsxt";





const OurPortfolio = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <PortfolioMain />
       <AlbumText/>  
       <AlbumCard
        title="Neon Requiem – Sci-Fi, EDM, Gaming, and Cyberpunk Soundtracks"
        text="Step into a futuristic world with Neon Requiem, an album that combines cutting-edge electronic sounds, immersive gaming beats, and cyberpunk-inspired melodies. Perfect for sci-fi films, video games, and action-packed web series, Neon Requiem brings a bold energy and futuristic vibe to any project. Let the music transport your audience into a new dimension."
        updatedAt=""
        imageTop={AlbumOne}
      />
       <AlbumCard
        title="One Earth, One Home – World Music, Countryside, Pop, Focused on Environmental Awareness"
        text="One Earth, One Home is a celebration of our planet, blending world music, countryside influences, and pop rhythms. Designed to inspire change, this album is perfect for projects centered on environmental themes, nature documentaries, and campaigns advocating for a sustainable future. The powerful melodies speak to the urgency of protecting our planet while connecting deeply with your audience’s emotions."
        updatedAt=""
        imageTop={AlbumTwo}
      />
       <AlbumCard
        title="Neon Requiem – Sci-Fi, EDM, Gaming, and Cyberpunk Soundtracks"
        text="Step into a futuristic world with Neon Requiem, an album that combines cutting-edge electronic sounds, immersive gaming beats, and cyberpunk-inspired melodies. Perfect for sci-fi films, video games, and action-packed web series, Neon Requiem brings a bold energy and futuristic vibe to any project. Let the music transport your audience into a new dimension."
        updatedAt=""
        imageTop={AlbumOne}
      />
      <AlbumCard
        title="One Earth, One Home – World Music, Countryside, Pop, Focused on Environmental Awareness"
        text="One Earth, One Home is a celebration of our planet, blending world music, countryside influences, and pop rhythms. Designed to inspire change, this album is perfect for projects centered on environmental themes, nature documentaries, and campaigns advocating for a sustainable future. The powerful melodies speak to the urgency of protecting our planet while connecting deeply with your audience’s emotions."
        updatedAt=""
        imageTop={AlbumTwo}
      />
      <AboutCta />
      <JingleSonicText/>
      <JingleSonic/>
      <GDS_Tsxt/>
      <GDS
      imgSrc={"/images/GameThree.png"}
      heading="Unique Soundscapes – Immersive Game Soundtracks"
      text="Experience the futuristic world of Neon Requiem, our signature sci-fi soundtrack designed specifically for gaming and digital media. Blending EDM, cyberpunk, and sci-fi influences, this soundtrack brings high-energy beats and immersive electronic soundscapes to your game. Whether you’re developing an action-packed sci-fi game or an adventure-driven narrative, Neon Requiem delivers a dynamic, pulse-quickening audio experience that keeps players engaged."
    />

    </Layout>
  );
};

export default OurPortfolio;
