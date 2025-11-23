import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import one from "public/images/teams/one.png";

gsap.registerPlugin(ScrollTrigger);
const TeamDetailsMain = () => {
  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");

    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: "0%",
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      }
    });
  }, []);

  return (
    <section className="section pb-5 team-det fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="team-det__info fade-top">
              <h4 className="fs-2">Film & Media Scores – Cinematic Soundtracks That Bring Stories to Life</h4>
              <div className="group">
                <h5 className="fs-3">
                  Featured Albums
                </h5>
                <p className="fs-4">
                  Neon Requiem – Sci-Fi, EDM, Gaming, and Cyberpunk Soundtracks
                </p>
                <p>
                  Step into a futuristic world with Neon Requiem, an album that combines cutting-edge electronic sounds, immersive gaming beats, and cyberpunk-inspired melodies. Perfect for sci-fi films, video games, and action-packed web series, Neon Requiem brings a bold energy and futuristic vibe to any project. Let the music transport your audience into a new dimension.
                </p>

              </div>
              <div className="group">
                <h5 className="fs-3">
                  One Earth, One Home – World Music, Countryside, Pop, Focused on Environmental Awareness
                </h5>
                <p>
                  Awareness One Earth, One Home is a celebration of our planet, blending world music, countryside influences, and pop rhythms. Designed to inspire change, this album is perfect for projects centered on environmental themes, nature documentaries, and campaigns advocating for a sustainable future. The powerful melodies speak to the urgency of protecting our planet while connecting deeply with your audience’s emotions.
                </p>
              </div>
              <div className="group">
                <h5 className="fs-3">
                  Get in Touch – Elevate Your Project with Artint Studio’s Music
                </h5>
                <p>
                Looking to enhance your web series, film, or media project with unforgettable music? Artint Studio’s original compositions are available for licensing and integration into all types of media. Our music is crafted to elevate the narrative, add emotional depth, and create an unforgettable sound experience. Let’s Collaborate: Reach out today to explore how Artint Studio’s soundtracks can bring your vision to life. We’re ready to create the perfect soundtrack for your next big project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsMain;
