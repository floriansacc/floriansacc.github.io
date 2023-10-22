import styles from "./styles_css/mainStyle.module.css";
import "./styles_css/fontStyle.css";

import { workDetails } from "./data";
import { useContext } from "react";
import { QueryContext } from "./GlobalBody";

export default function PresentationWork(props) {
  const { isPhone, isTablet, lang } = useContext(QueryContext);

  const toStyleContent3 = {
    margin: isTablet ? "0.2rem" : "",
    padding: isTablet ? "0.2rem 0.5rem" : "",
    height: isTablet ? "50%" : "",
    maxWidth: isTablet ? "90%" : "",
    minWidth: isTablet ? "40%" : "",
  };

  const toStyleImgContainer = {
    height: isTablet ? "55px" : "",
  };

  const toStyleImg = {
    height: isTablet ? "70%" : "",
    width: isTablet ? "auto" : "",
  };

  const toStyleTitle = { height: isTablet ? "fit-content" : "" };

  const toStyleLiDuree = {
    height: isTablet ? "fit-content" : "",
    marginBottom: isTablet ? "0.5rem" : "",
  };

  const toStyleLi = {
    lineHeight: isTablet ? "1.1rem" : "",
    padding: isTablet ? "0.4rem 0 " : "",
  };

  return (
    <div style={toStyleContent3} className={styles.content3}>
      <div style={toStyleImgContainer} className={styles.imgContainer}>
        <img
          alt={workDetails[`${props.name}image`]}
          style={toStyleImg}
          src={workDetails[`${props.name}image`]}
          className={styles.pLsyImg}
        />
        <p className={styles.pLsy}>{workDetails[`${lang}${props.name}`][0]}</p>
      </div>
      <ul className={styles.ulSchoolWork}>
        {workDetails[`${lang}${props.name}`]
          .filter((x) => !x.includes("20"))
          .map((y, i) => (
            <li
              style={
                i === 0 ? toStyleTitle : i === 1 ? toStyleLiDuree : toStyleLi
              }
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
