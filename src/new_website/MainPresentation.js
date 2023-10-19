import styles from "./styles_css/mainStyle.module.css";
import PresentationPhoto from "./PresentationPhoto";
import PresentationSchool from "./PresentationSchool";
import PresentationWork from "./PresentationWork";
import PresentationProject from "./PresentationProject";
import animateScrollTo from "animated-scroll-to";
import { listNavigation } from "./data";
import { useEffect, useContext, useRef, useState } from "react";
import { QueryContext } from "./GlobalBody";
import { ReactLogo } from "./ReactLogo";
import { ButtonNavigation } from "./ButtonNavigation";

export default function MainPresentation(props) {
  const { isPhone, isTablet, lang } = useContext(QueryContext);
  const myRef = useRef(0);
  const [scrollAvailable, setScrollAvailable] = useState(true);

  const handleScrollSection = async (e) => {
    if (e.deltaY < 0 && myRef.current !== 0 && scrollAvailable) {
      myRef.current -= 1;
    } else if (e.deltaY > 0 && myRef.current < 3 && scrollAvailable) {
      myRef.current += 1;
    } else if (myRef.current === 3 || myRef.current === 0) {
      return;
    }
    window.console.log(myRef.current);
    if (scrollAvailable) {
      setScrollAvailable(false);
      let elementToGo = document.querySelectorAll("h6")[myRef.current];
      await animateScrollTo(elementToGo, {
        cancelOnUserAction: false,
        minDuration: 2000,
        verticalOffset: -40,
        easing: (x) =>
          x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
      });
    }
    try {
      setScrollAvailable(true);
    } catch (error) {
      window.console.log(error);
    }
  };

  return (
    <div
      onWheel={scrollAvailable ? handleScrollSection : null}
      className={styles.main}
      id="startId"
    >
      <ReactLogo />
      <h6></h6>
      <PresentationPhoto lang={lang} />

      <div className={styles.schoolContentBigBox}>
        <h6></h6>
        <div className={styles.titleAndNavigator}>
          <h2 id={listNavigation.entrySchool[lang]} className={styles.titles}>
            {listNavigation.entrySchool[lang]}
          </h2>
          <ButtonNavigation myref={myRef} />
        </div>
        <div className={styles.schoolContentSmallBox}>
          <PresentationSchool name="jbnu" lang={lang} />
          <PresentationSchool name="jbnuExchange" lang={lang} />
          <PresentationSchool name="utbm" lang={lang} />
          <PresentationSchool name="lyon" lang={lang} />
        </div>
      </div>
      <h6></h6>
      <h1 id={listNavigation.entryWork[lang]} className={styles.titles}>
        {listNavigation.entryWork[lang]}
      </h1>
      <PresentationWork name="edf" lang={lang} />
      <PresentationWork name="enedis" lang={lang} />
      <PresentationWork name="suez" lang={lang} />
      <h6></h6>
      <h1 id={listNavigation.entryProject[lang]} className={styles.titles}>
        {listNavigation.entryProject[lang]}
      </h1>
      <PresentationProject name="proj1" lang={lang} />
    </div>
  );
}
