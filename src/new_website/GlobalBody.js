import React, { useState, useEffect, useContext } from "react";
import { LangButton } from "./LangButton";
import styles from "./styles_css/containerStyle.module.css";
import MainPresentation from "./MainPresentation";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { useTheme } from "./useTheme";
import { useSpring, useSpringRef, animated } from "react-spring";
import Lottie from "react-lottie";

import * as screenAnimation from "./styles_css/lottieAnimation.json";

export const QueryContext = React.createContext();

export default function GlobalBody() {
  const [lang, setLang] = useState("en");
  const { isDarkTheme, onToggleTheme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [lastTheme, setLastTheme] = useState(
    sessionStorage.getItem("lastTheme")
  );
  const apiLoading = useSpringRef();

  const isBigScreen = useMediaQuery({
    query: "(min-width: 1600px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 1250px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 600px) and (max-width: 1250px)",
  });

  const isPhone = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const isSmallPhone = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const springLoading = useSpring({
    ref: apiLoading,
  });

  const [props, api] = useSpring(
    () => ({
      from: {
        scale: 1,
        opacity: 1,
        filter: "brightness(1)",
      },
      to: {
        scale: 15,
        opacity: lastTheme === "1" ? 0.5 : 0,
        filter: lastTheme === "1" ? "brightness(0)" : "brightness(1)",
      },
      delay: 1500,
      config: {
        duration: 2000,
        easing: (x) => (x === 0 ? 0 : Math.pow(2, 10 * x - 10)),
      },
    }),
    []
  );

  const handleLangChange = (e) => {
    setLang(e.target.name);
  };

  const toStyleBackground = {
    left: mousePos.x + "px",
    top: mousePos.y + "px",
  };

  const handleMousePos = (e) => {
    if (isDesktop) {
      setMousePos({
        x: -e.clientX * 0.04,
        y: -e.clientY * 0.04,
      });
    } else
      setMousePos({
        x: 0,
        y: 0,
      });
  };

  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: screenAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      try {
        setData(json);
        setloading(true);
      } catch (e) {
        window.console.log(e);
      }
    }, 3500);
  }, []);

  useEffect(() => {
    apiLoading.start({
      from: { opacity: "0" },
      to: { opacity: "1" },
      delay: 3500,
      config: { duration: 400, easing: (x) => x * x * x * x * x },
    });
  }, []);

  useEffect(() => {
    window.console.log(lastTheme);
    if (lastTheme === "1") {
      onToggleTheme();
      window.console.log("switch to dark mode");
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("lastTheme", isDarkTheme ? 1 : 0);
  }, [isDarkTheme]);

  return (
    <QueryContext.Provider
      value={{
        isBigScreen,
        isDesktop,
        isTablet,
        isPhone,
        isSmallPhone,
        lang,
        isDarkTheme,
      }}
    >
      <>
        {!loading ? (
          <>
            <animated.div className={styles.divLottie} style={props}>
              <Lottie options={defaultOption} isClickToPauseDisabled={true} i />
            </animated.div>
          </>
        ) : (
          <animated.div style={{ ...springLoading }}>
            <LangButton
              getChange={handleLangChange}
              ontoggletheme={onToggleTheme}
            />

            <div onMouseMove={handleMousePos} className={styles.container}>
              <div style={toStyleBackground} className={styles.imgBack}></div>

              <MainPresentation ontoggletheme={onToggleTheme} />
            </div>
          </animated.div>
        )}
      </>
    </QueryContext.Provider>
  );
}
