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
  const { isPhone, isTablet } = useContext(QueryContext);

  return (
    <div
      style={{ padding: isTablet ? "0" : isPhone ? "0" : "" }}
      className={styles.main}
    >
      <ReactLogo />
      <PresentationPhoto lang={props.lang} />
      <h1 id={listNavigation.entrySchool[props.lang]} className={styles.titles}>
        {listNavigation.entrySchool[props.lang]}
      </h1>
      <PresentationSchool name="jbnu" lang={props.lang} />
      <PresentationSchool name="jbnuExchange" lang={props.lang} />
      <PresentationSchool name="utbm" lang={props.lang} />
      <PresentationSchool name="lyon" lang={props.lang} />

      <h1 id={listNavigation.entryWork[props.lang]} className={styles.titles}>
        {listNavigation.entryWork[props.lang]}
      </h1>
      <PresentationWork name="edf" lang={props.lang} />
      <PresentationWork name="enedis" lang={props.lang} />
      <PresentationWork name="suez" lang={props.lang} />

      <h1
        id={listNavigation.entryProject[props.lang]}
        className={styles.titles}
      >
        {listNavigation.entryProject[props.lang]}
      </h1>
      <PresentationProject name="proj1" lang={props.lang} />
    </div>
  );
}
