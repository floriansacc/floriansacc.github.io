import { useContext } from "react";
import styles from "./styles_css/buttonStyle.module.css";
import { useTheme } from "./useTheme";
import { useSpring, animated, easings } from "react-spring";
import { QueryContext } from "./GlobalBody";

export const LangButton = (props) => {
  const { isDarkTheme, onToggleTheme } = useTheme();

  const { isPhone, isTablet, lang } = useContext(QueryContext);

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

  const testSpring = useSpring({
    backgroundColor: isDarkTheme ? "#d4e6ed" : "#282828",
    width: isDarkTheme ? "0%" : "100%",
    left: isDarkTheme ? "25%" : "0%",
    color: isDarkTheme ? "#282828" : "#2b81ff",
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

  return (
    <div style={toStyleBandeau} className={styles.bandeau}>
      <div className={styles.themeButton}>
        <animated.div
          style={{
            color: testSpring.color,
            width: testSpring.width,
            backgroundColor: testSpring.backgroundColor,
            alignItems: "center",
          }}
          key="themeSwitch"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onToggleTheme}
          className={styles.bTheme}
        >
          {isDarkTheme ? "Light" : "Dark"}
        </animated.div>
      </div>
      <div className={styles.bLangBox}>
        <button
          className={lang === "fr" ? styles.bLangActive : styles.bLang}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          name="fr"
          onClick={props.getChange}
        >
          Français
        </button>
        <button
          className={lang === "en" ? styles.bLangActive : styles.bLang}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          name="en"
          onClick={props.getChange}
        >
          Anglais
        </button>
        <button
          className={lang === "kr" ? styles.bLangActive : styles.bLang}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          name="kr"
          onClick={props.getChange}
        >
          한국어
        </button>
      </div>
    </div>
  );
};
