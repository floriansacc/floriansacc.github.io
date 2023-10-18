import styles from "./styles_css/mainStyle.module.css";
import PresentationPhoto from "./PresentationPhoto";
import PresentationSchool from "./PresentationSchool";
import PresentationWork from "./PresentationWork";
import PresentationProject from "./PresentationProject";
import { listNavigation } from "./data";
import { useContext } from "react";
import { QueryContext } from "./GlobalBody";
import { ReactLogo } from "./ReactLogo";

export default function MainPresentation(props) {
  const { isPhone, isTablet, lang } = useContext(QueryContext);

  return (
    <div
      style={{ padding: isTablet ? "0" : isPhone ? "0" : "" }}
      className={styles.main}
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
