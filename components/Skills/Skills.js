/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Image from "next/image";
import { MENULINKS, SKILLS } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Tooltip } from 'react-tooltip';

const Skills = () => {
  const targetSection = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection]);

  return (
    <section
      className="w-full relative select-none -mt-10 mb-20"
      id={MENULINKS[1].ref}
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
        <Tooltip id="my-skills" />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
              {SKILLS.id}
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              {SKILLS.title}
            </h1>
            <h2 className="text-[1.1rem] font-small font-mono leading-relaxed text-gray-light-3 md:max-w-lg w-full mt-0 seq">
              {SKILLS.description}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.languagesAndTools.map((skill) => (
                <Image
                  data-tooltip-id="my-skills" 
                  data-tooltip-html={`<b style="text-transform: capitalize;">${skill.replace('-', ' ')}</b>`}
                  title={skill}
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={45}
                  height={45}
                />
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <Image
                  data-tooltip-id="my-skills" 
                  data-tooltip-html={`<b style="text-transform: capitalize;">${skill.replace('-', ' ')}</b>`}
                  title={skill}
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={45}
                  height={45}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-8">
            <div className="mr-16 xs:mr-20">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
                DATABASES
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu seq">
                {SKILLS.databases.map((skill) => (
                  <Image
                    data-tooltip-id="my-skills" 
                    data-tooltip-html={`<b style="text-transform: capitalize;">${skill.replace('-', ' ')}</b>`}
                    title={skill}
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={45}
                    height={45}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-8">
            <div>
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
                DEVELOPMENT TOOLS
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu seq">
                {SKILLS.developmentTools.map((skill) => (
                  <Image
                    data-tooltip-id="my-skills" 
                    data-tooltip-html={`<b style="text-transform: capitalize;">${skill.replace('-', ' ')}</b>`}
                    title={skill}
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={45}
                    height={45}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-8">
            <div>
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
                GRAPHIC TECHNOLOGIES
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu seq">
                {SKILLS.graphicTechnologies.map((skill) => (
                  <Image
                    data-tooltip-id="my-skills" 
                    data-tooltip-html={`<b style="text-transform: capitalize;">${skill.replace('-', ' ')}</b>`}
                    title={skill}
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={45}
                    height={45}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
