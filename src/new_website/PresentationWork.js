import styles from "./styles_css/mainStyle.module.css";
import "./styles_css/fontStyle.css";

import { workDetails } from "./data";
import { useContext } from "react";
import { QueryContext } from "./GlobalBody";

export default function PresentationWork(props) {
  const { isPhone, isTablet, lang } = useContext(QueryContext);

  const toStyleContent3 = {};

  const toStyleLsy = {};

  const toStyleDivImg = {};

  const toStyleImg = {};

  const toStyleTitle = {};

  const toStyleLi = {};

  return (
    <div style={toStyleContent3} className={styles.content3}>
      <div style={toStyleDivImg} className={styles.imgContainer}>
        <img
          alt={workDetails[`${props.name}image`]}
          style={toStyleImg}
          src={workDetails[`${props.name}image`]}
          className={styles.pLsyImg}
        />
        <p style={toStyleLsy} className={styles.pLsy}>
          {workDetails[`${lang}${props.name}`][0]}
        </p>
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
