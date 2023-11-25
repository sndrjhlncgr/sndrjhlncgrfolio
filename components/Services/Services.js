import { useEffect, useRef } from "react";
import { MENULINKS, SERVICES } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Services.module.scss";

const Services = ({isDesktop}) => {
  const targetSection = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".work-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection]);

  return (
    <section
      className="w-full relative select-none mt-10 mb-20"
      id={MENULINKS[4].ref}
      ref={targetSection}
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col work-wrapper">
              <p className="uppercase tracking-widest text-gray-light-1 seq">
                {SERVICES.id}
              </p>
              <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
                {SERVICES.title}
              </h1>
              <h2 className="text-[1.1rem] font-small font-mono leading-relaxed text-gray-light-3 md:max-w-lg w-full mt-0 seq">
                {SERVICES.description}
              </h2>
            </div>
            <div>
              {SERVICES.lists.map((service, index) => (
                  <p>{service.title}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

