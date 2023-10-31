import { useContext } from "react";
import styles from "./styles_css/buttonStyle.module.css";
import { useTheme } from "./useTheme";
import { useSpring, animated, easings } from "react-spring";
import { QueryContext } from "./GlobalBody";

export const LangButton = (props) => {
  const { isdarktheme, ontoggletheme } = props;

  const { isPhone, isTablet, isDesktop, lang } = useContext(QueryContext);

  const handleMouseEnter = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "Light" || e.target.innerHTML === "Dark") {
      return;
    } else if (e.target.className === styles.bLangActive) {
    } else {
      e.target.style.backgroundColor = "#c9c9c9";
      e.target.style.filter = "brightness(1.4)";
      e.target.style.transform = "scale(1.1)";
    }
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "Light" || e.target.innerHTML === "Dark") {
      return;
    } else {
      e.target.style.backgroundColor = "";
      e.target.style.filter = "";
      e.target.style.transform = "";
    }
  };

  const bgStyle = useSpring({
    loop: { reverse: true },
    from: { background: "red" },
    to: { background: "blue" },
    config: { duration: 1000 },
  });

  const testSpring = useSpring({
    backgroundColor: isdarktheme ? "#d4e6ed" : "#282828",
    width: isdarktheme ? "0%" : "100%",
    left: isdarktheme ? "25%" : "0%",
    color: isdarktheme ? "#282828" : "#2b81ff",
    config: {
      duration: 400,
      easing: easings.easeInCirc,
    },
  });

  const toStyleBandeau = {
    justifyContent: isTablet ? "space-around" : isPhone ? "space-between" : "",
    background: isPhone
      ? "linear-gradient(to right, rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0))"
      : "",
  };

  const toStyleThemeBox = {
    margin: isPhone ? "0 10px" : "",
  };

  return (
    <div style={toStyleBandeau} className={styles.bandeau}>
      <div style={toStyleThemeBox} className={styles.themeButton}>
        <animated.div
          style={{
            color: testSpring.color,
            width: testSpring.width,
            backgroundColor: testSpring.backgroundColor,
            alignItems: "center",
          }}
          key="themeSwitch"
          onMouseEnter={isDesktop ? handleMouseEnter : null}
          onMouseLeave={isDesktop ? handleMouseLeave : null}
          onClick={ontoggletheme}
          className={styles.bTheme}
        >
          {isdarktheme ? "Light" : "Dark"}
        </animated.div>
      </div>
      <div className={styles.bLangBox}>
        <button
          className={lang === "fr" ? styles.bLangActive : styles.bLang}
          onMouseEnter={isDesktop ? handleMouseEnter : null}
          onMouseLeave={isDesktop ? handleMouseLeave : null}
          name="fr"
          onClick={props.getChange}
        >
          Français
        </button>
        <button
          className={lang === "en" ? styles.bLangActive : styles.bLang}
          onMouseEnter={isDesktop ? handleMouseEnter : null}
          onMouseLeave={isDesktop ? handleMouseLeave : null}
          name="en"
          onClick={props.getChange}
        >
          Anglais
        </button>
        <button
          className={lang === "kr" ? styles.bLangActive : styles.bLang}
          onMouseEnter={isDesktop ? handleMouseEnter : null}
          onMouseLeave={isDesktop ? handleMouseLeave : null}
          name="kr"
          onClick={props.getChange}
        >
          한국어
        </button>
      </div>
    </div>
  );
};
