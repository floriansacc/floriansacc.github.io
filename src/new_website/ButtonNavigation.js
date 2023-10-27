import { useState, useEffect, useContext } from "react";
import styles from "./styles_css/buttonStyle.module.css";
import { titleListNavigation, listNavigation, presentation } from "./data";

import { QueryContext } from "./GlobalBody";

const toCheck =
  "https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs";

export const ButtonNavigation = (props) => {
  const { myref, updateref, scrollavailable } = props;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [ongletActif, setOngletActif] = useState("");
  const { isBigScreen, isPhone, isTablet, lang } = useContext(QueryContext);

  const toStyleNavigator = {
    display: isTablet ? "flex" : isPhone ? "none" : "flex",
    flexDirection: isTablet ? "row" : "",
    top: isTablet ? "2%" : "",
    left: isTablet ? "60%" : "",
    width: isTablet ? "150px" : "",
  };

  const toStyleNavButton = {
    margin: isTablet ? "5px 5px " : "",
  };

  const handleOnME = (e) => {
    e.target.style.backgroundColor = "#bb86fc";
    e.target.style.transform = "scale(1.05)";
    e.target.style.cursor = "pointer";
  };

  const handleOnML = (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
    e.target.style.transform = "";
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isTablet) {
      if (scrollPosition < 1068) {
        myref.current = 0;
      } else if (scrollPosition < 2142) {
        myref.current = 1;
      } else if (scrollPosition < 3216) {
        myref.current = 2;
      } else if (scrollPosition > 3216) {
        myref.current = 3;
      }
    }
  }, [scrollPosition]);

  return (
    <div style={toStyleNavigator} className={styles.navigator}>
      <h2
        style={{ display: isTablet ? "flex" : "none" }}
        className={styles.h2Nav}
      >
        {scrollPosition}
      </h2>
      {listNavigation[lang].map((x, i) => (
        <p
          style={myref.current === i ? {} : toStyleNavButton}
          onMouseEnter={handleOnME}
          onMouseLeave={handleOnML}
          onClick={scrollavailable ? updateref : null}
          className={myref.current === i ? styles.liNavActif : styles.liNav}
          key={`button${lang}${i}`}
          name={x}
        >
          {i}
        </p>
      ))}
    </div>
  );
};
