import styles from "./styles_css/mainStyle.module.css";
import "./styles_css/fontStyle.css";
import { schoolDetails } from "./data";
import { useContext } from "react";
import { QueryContext } from "./GlobalBody";

export default function PresentationSchool(props) {
  const { isPhone, isTablet, lang } = useContext(QueryContext);

  const toStyleContent2 = {
    margin: isTablet ? "0.2rem" : isPhone ? "0.5rem 0" : "",
    padding: isTablet || isPhone ? "0.2rem 0.5rem" : "",
    height: isTablet ? "95%" : "",
    maxWidth: isPhone ? "unset" : "",
    width: isPhone ? "100%" : "",
  };

  const toStyleImgContainer = {
    height: isTablet ? "fit-content" : isPhone ? "fit-content" : "",
  };

  const toStyleImg = {
    width: isTablet ? "auto" : "",
  };

  const toStylePLsy = {
    alignSelf: isPhone ? "unset" : "",
  };

  const toStyleTitle = {
    height: isTablet || isPhone ? "fit-content" : "",
    padding: isPhone ? "5px 2px" : "",
  };

  const toStyleMajor = {
    height: isTablet || isPhone ? "fit-content" : "",
    marginBottom: isTablet ? "0.5rem" : "",
    fontSize: isPhone ? "1rem" : "",
  };

  const toStyleLi = {
    lineHeight: isTablet ? "1.2rem" : isPhone ? "normal" : "",
    padding: isTablet ? "0.4rem 0 " : isPhone ? "0.2rem 0" : "",
    fontSize: isPhone ? "1rem" : "",
  };

  const toStyleProf = {
    paddingTop: isTablet ? "0.2rem" : "",
    fontSize: isPhone ? "1rem" : "",
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
        <p style={toStylePLsy} className={styles.pLsy}>
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
