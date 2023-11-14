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
            <ul class={styles.timeline}>
              <li class={styles.timelineEvent}>
                <label class={styles.timelineEventIcon}></label>
                <div class={styles.timelineEventCopy}>
                  <p class={styles.timelineEventThumbnail}>
                    April 2011 - heute
                  </p>
                  <h3>Geil,Danke! GmbH</h3>
                  <h4>Geschäftsführerin eines Web-Studios</h4>
                  <p>
                    <strong>Schwerpunkt: Frontend-Entwicklung</strong>
                    <br />
                    Entwickeln von anspruchsvollen, animierten, responsive und
                    adaptive Webseiten mit HTML5, SCSS, jQuery; für alle
                    Browser, optimiert für Desktop, Notebook, Smartphones und
                    Tablets (iOS, Android, Windows).
                  </p>
                  <p>
                    <strong>Projektmanagement mit Scrum</strong>
                    <br />
                    Ständiges Verbessern des agilen Entwicklungsprozesses
                    beispielsweise durch Grunt, Yeoman, GIT, JIRA und
                    BrowserStack.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
