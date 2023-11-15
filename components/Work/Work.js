import { useState, useEffect, useRef } from "react";
import { MENULINKS, WORK } from "../../constants";
import styles from "./Work.module.scss";

const Work = ({ clientWidth }) => {
  const targetSection = useRef(null);

  return (
    <section
      className="w-full relative select-none xs:mt-40 sm:mt-72 lg:mt-30 mb-20"
      id={MENULINKS[3].ref}
      ref={targetSection}
    >
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
              {WORK.id}
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              {WORK.title}
            </h1>
            <h2 className="text-[1.1rem] font-small font-mono leading-relaxed text-gray-light-3 md:max-w-lg w-full mt-0 seq">
              {WORK.description}
            </h2>
          </div>
          <div>
            <ul className={styles.timeline}>
              {WORK.lists.map((work) => (
                <li className={styles.timelineEvent}>
                  <label className={styles.timelineEventIcon}></label>
                  <div className={styles.timelineEventCopy}>
                    <p className={styles.timelineEventThumbnail}>{work.range}</p>
                    <h3>{work.title}</h3>
                    <h5 className="-mt-1 text-[1rem]">{work.company}</h5>
                    <ul class="pt-5 w-full list-disc">
                      {work.responsibilities.map((responsibilities) => (
                        <li className="text-[0.8rem] font-small font-mono leading-relaxed text-gray-light-3">
                          {responsibilities}
                          </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
