import styles from "./styles_css/mainStyle.module.css";
import "./styles_css/fontStyle.css";

import { workDetails } from "./data";
import { useContext } from "react";
import { QueryContext } from "./GlobalBody";

export default function PresentationWork(props) {
  const { isPhone, isTablet, lang } = useContext(QueryContext);

  const toStyleContent3 = {
    width: isTablet ? "95%" : isPhone ? "95%" : "",
    gridTemplateColumns: isPhone ? "100%" : "",
    justifycontent: isPhone ? "stretch" : "",
    gridAutoRows: isPhone ? "maxContent" : "",
  };

  const toStyleLsy = {
    width: isPhone ? "50px" : "",
    padding: isPhone ? "0.5rem" : "",
  };

  const toStyleDivImg = {
    flexFlow: isTablet ? "" : isPhone ? "row wrap" : "",
    justifyContent: isTablet ? "" : isPhone ? "space-between" : "",
  };

  const toStyleImg = {
    width: isTablet ? "100px" : isPhone ? "100px" : "",
    left: isTablet ? "" : isPhone ? "1%" : "",
  };

  const toStyleTitle = {
    margin: isPhone ? "0" : "",
    padding: isPhone ? "0.75rem 0 0 1rem" : "",
    borderLeft: isPhone ? "none" : "",
  };

  const toStyleLi = {
    width: isTablet ? "100%" : isPhone ? "100%" : "",
  };

  return (
    <div style={toStyleContent3} className={styles.content3}>
      <div style={toStyleDivImg} className={styles.testDiv}>
        <p style={toStyleLsy} className={styles.pLsy}>
          {workDetails[`${lang}${props.name}`][0]}
        </p>
        <img
          alt={workDetails[`${props.name}image`]}
          style={toStyleImg}
          src={workDetails[`${props.name}image`]}
          className={styles.pLsyImg}
        />
      </div>
      <ul className={styles.ulSchoolWork}>
        {workDetails[`${lang}${props.name}`]
          .filter((x) => !x.includes("20"))
          .map((y, i) => (
            <li
              style={i === 0 ? toStyleTitle : i === 1 ? {} : toStyleLi}
              className={
                i === 0
                  ? styles.liTitleWork
                  : i === 1
                  ? styles.liDuree
                  : styles.liSchool
              }
              key={`${props.name}${i}`}
            >
              {y}
            </li>
          ))}
      </ul>
    </div>
  );
}
