/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";
import { gsap, Linear } from "gsap";
import { Howl } from "howler";
import Button from "../Button/Button";
import FooterBg from "./FooterBg/FooterBg";
import Profiles from "../Profiles/Profiles";
import { MENULINKS, METADATA} from "../../constants";

const Footer = () => {
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const targetSection = useRef(null);

  const heartClickSound = new Howl({
    src: ["/sounds/glug-a.mp3"],
    rate: playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate((rate) => rate + 0.1);
    heartClickSound.play();
  };

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );
  }, [targetSection]);

  return (
    <footer
      className="w-full relative select-none bg-cover"
      ref={targetSection}
    >
      {/* <FooterBg /> */}
      <Fade bottom distance={"4rem"}>
        <div className="w-full h-full pt-20">
          <div className="section-container flex flex-col h-full justify-end z-10 items-center py-12">
            <h1 className="font-medium text-3xl md:text-4xl text-center seq">
              Feel free to connect
            </h1>
            <div className="text-center seq">
              <Profiles />
            </div>
            <div className="seq pt-4 text-center">
              <Button
                href={`#${MENULINKS[5].ref}`}
                classes="link"
                type="secondary"
              >
                Let&apos;s Talk
              </Button>
            </div>
            <p className="text-center text-white text-sm sm:text-base font-medium tracking-wide mt-8">
             © Copyright
              <span className="text-white ml-1">
                {METADATA.author}
              </span>
              . All Rights Reserved
            </p>
          </div>
        </div>
      </Fade>
      <img
        src="/footer-curve.svg"
        className="w-full rotate-180"
        alt=""
        loading="eager"
        height={180}
      />
      <style jsx global>{`
        footer {
          background-image: linear-gradient(270deg, #9f55ff, #7000ff, #8b31ff);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
