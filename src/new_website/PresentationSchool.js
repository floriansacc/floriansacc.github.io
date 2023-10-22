import styles from "./styles_css/mainStyle.module.css";
import "./styles_css/fontStyle.css";
import { schoolDetails } from "./data";
import { useContext } from "react";
import { QueryContext } from "./GlobalBody";

export default function PresentationSchool(props) {
  const { isPhone, isTablet, lang } = useContext(QueryContext);

  const toStyleContent2 = {
    margin: isTablet ? "0.2rem" : "",
    padding: isTablet ? "0.2rem 0.5rem" : "",
    height: isTablet ? "95%" : "",
  };

  const toStyleImgContainer = {
    height: isTablet ? "40px" : "",
  };

  const toStyleImg = {
    height: isTablet ? "70%" : "",
    width: isTablet ? "auto" : "",
  };

  const toStyleTitle = {
    height: isTablet ? "fit-content" : "",
  };

  const toStyleMajor = {
    height: isTablet ? "fit-content" : "",
    marginBottom: isTablet ? "0.5rem" : "",
  };

  const toStyleLi = {
    lineHeight: isTablet ? "1.1rem" : "",
    padding: isTablet ? "0.4rem 0 " : "",
  };

  const toStyleProf = {
    paddingTop: isTablet ? "0.2rem" : "",
  };

  return (
    <div style={toStyleContent2} className={styles.content2}>
      <div style={toStyleImgContainer} className={styles.imgContainer}>
        <img
          style={toStyleImg}
          alt={schoolDetails[`${props.name}img`]}
          src={schoolDetails[`${props.name}img`]}
          className={styles.pLsyImg}
        />
        <p className={styles.pLsy}>
          {schoolDetails[`${lang}${props.name}`][0]}
        </p>
      </div>

      <ul className={styles.ulSchoolWork}>
        {schoolDetails[`${lang}${props.name}`]
          .filter((x) => !x.includes("20"))
          .map((y, i) => (
            <li
              style={
                i === 0
                  ? toStyleTitle
                  : i === 1
                  ? toStyleMajor
                  : i === 6
                  ? toStyleProf
                  : toStyleLi
              }
              className={
                i === 0
                  ? styles.liTitleSchool
                  : i === 1
                  ? styles.liMajorSchool
                  : i === 6
                  ? styles.liProf
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
