import styles from "./styles_css/mainStyle.module.css";
import "./styles_css/fontStyle.css";
import { workDetails } from "./data";
import { useContext } from "react";
import { QueryContext } from "./GlobalBody";
import { useSpring, animated } from "react-spring";

export default function PresentationWork(props) {
  const { isPhone, isTablet, isDesktop, lang, isDarkTheme } =
    useContext(QueryContext);
  const { myref, direction } = props;

  const springUp = useSpring({
    top: myref.current === 2 ? "0" : "1000px",
    delay: 800,
    config: { duration: 800, easing: (x) => 1 - Math.pow(1 - x, 4) },
  });

  const springDown = useSpring({
    bottom: myref.current === 2 ? "0" : "1000px",
    display: myref.current === 2 ? "" : "none",
    delay: 800,
    config: { duration: 800, easing: (x) => 1 - Math.pow(1 - x, 4) },
  });

  const toStyleContent3 = {
    display: isDesktop ? springDown.display : "",
    bottom: direction === "down" && isDesktop ? springDown.bottom : "unset",
    top: direction === "up" && isDesktop ? springUp.top : "unset",
    margin: isTablet ? "0.5rem" : isPhone ? "1rem 0" : "",
    padding: isTablet || isPhone ? "0.2rem 0.5rem" : "",
    height: isTablet ? "50%" : "",
    maxWidth: isTablet ? "90%" : isPhone ? "unset" : "",
    minWidth: isTablet ? "40%" : "",
    width: isPhone ? "100%" : "",
    borderRadius: isPhone ? "25px" : "",
  };

  const toStyleImgContainer = {
    height: isTablet ? "55px" : isPhone ? "fit-content" : "",
  };

  const toStyleImg = {
    width: isTablet ? "auto" : "",
    filter: isDarkTheme ? "brightness(1.5)" : "",
  };

  const toStyleTitle = {
    height: isTablet || isPhone ? "fit-content" : "",
    padding: isPhone ? "5px 2px" : "",
  };

  const toStyleLiDuree = {
    height: isTablet || isPhone ? "fit-content" : "",
    marginBottom: isTablet ? "0.5rem" : "",
    fontSize: isPhone ? "1rem" : "",
  };

  const toStyleLi = {
    lineHeight: isTablet ? "normal" : isPhone ? "normal" : "",
    padding: isTablet ? "0.4rem 0 " : isPhone ? "0.2rem 0" : "",
    fontSize: isPhone ? "1rem" : "",
  };

  return (
    <animated.div style={toStyleContent3} className={styles.content3}>
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
    </animated.div>
  );
}
