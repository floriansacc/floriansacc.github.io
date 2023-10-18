import styles from "./styles_css/mainStyle.module.css";
import PresentationPhoto from "./PresentationPhoto";
import PresentationSchool from "./PresentationSchool";
import PresentationWork from "./PresentationWork";
import PresentationProject from "./PresentationProject";
import { listNavigation } from "./data";
import { useEffect, useContext, useRef, useState } from "react";
import { QueryContext } from "./GlobalBody";
import { ReactLogo } from "./ReactLogo";

export default function MainPresentation(props) {
  const { isPhone, isTablet, lang } = useContext(QueryContext);
  const myRef = useRef(0);
  const scrollingRef = useRef(false);

  const handleScrollSection = (e) => {
    let elementToGo = document.querySelectorAll("h1")[myRef.current];
    document.addEventListener("scrollend", () => {
      scrollingRef.current = false;
    });
    if (e.deltaY < 0 && myRef.current !== 0 && scrollingRef.current === false) {
      myRef.current -= 1;
      window.console.log(myRef.current);
      elementToGo = document.querySelectorAll("h1")[myRef.current];
      scrollingRef.current = true;
      elementToGo.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else if (
      e.deltaY > 0 &&
      myRef.current < 3 &&
      scrollingRef.current === false
    ) {
      myRef.current += 1;
      window.console.log(myRef.current);
      elementToGo = document.querySelectorAll("h1")[myRef.current];
      scrollingRef.current = true;
      elementToGo.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div
      onWheel={handleScrollSection}
      style={{ padding: isTablet ? "0" : isPhone ? "0" : "" }}
      className={styles.main}
      id="startId"
    >
      <ReactLogo />
      <PresentationPhoto lang={lang} />
      <h1 id={listNavigation.entrySchool[lang]} className={styles.titles}>
        {listNavigation.entrySchool[lang]}
      </h1>
      <PresentationSchool name="jbnu" lang={lang} />
      <PresentationSchool name="jbnuExchange" lang={lang} />
      <PresentationSchool name="utbm" lang={lang} />
      <PresentationSchool name="lyon" lang={lang} />

      <h1 id={listNavigation.entryWork[lang]} className={styles.titles}>
        {listNavigation.entryWork[lang]}
      </h1>
      <PresentationWork name="edf" lang={lang} />
      <PresentationWork name="enedis" lang={lang} />
      <PresentationWork name="suez" lang={lang} />

      <h1 id={listNavigation.entryProject[lang]} className={styles.titles}>
        {listNavigation.entryProject[lang]}
      </h1>
      <PresentationProject name="proj1" lang={lang} />
    </div>
  );
}
