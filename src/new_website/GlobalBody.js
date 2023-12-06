import React, { useState, useEffect, useContext } from "react";
import { LangButton } from "./LangButton";
import styles from "./styles_css/containerStyle.module.css";
import MainPresentation from "./MainPresentation";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { useTheme } from "./useTheme";
import { Helmet } from "react-helmet";
import { useSpring, useSpringRef, animated } from "react-spring";
import ogPhoto from "./styles_css/KakaoTalk_20231206_214115178.jpg";
import Lottie from "react-lottie";

import * as screenAnimation from "./styles_css/lottieAnimation.json";

export const QueryContext = React.createContext();

export default function GlobalBody() {
  const [lang, setLang] = useState("en");
  const { isDarkTheme, onToggleTheme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });
  const apiLoading = useSpringRef();
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);

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
    }, 2000);
  }, []);

  useEffect(() => {
    apiLoading.start({
      from: { opacity: "0" },
      to: { opacity: "1" },
      delay: 2200,
      config: { duration: 200, easing: (x) => x * x * x * x * x },
    });
  }, []);

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
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="My name is Florian SACCHETTI, I am a 26 years-old French people born in Lyon, France
Currently working in Korea in the climate and environment field"
        />
        <meta
          name="keywords"
          content="JavaScript, React, Florian Sacchetti, Florian, Sacchetti"
        />
        <meta property="og:title" content="Florian Sacchetti - Portfolio" />
        <meta
          property="og:description"
          content="My name is Florian SACCHETTI, I am a 26 years-old French people born in Lyon, France
Currently working in Korea in the climate and environment field"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogPhoto} />
        <title>Florian Sacchetti - Portfolio</title>
      </Helmet>
      <>
        {!loading ? (
          <Lottie
            options={defaultOption}
            style={{ background: "transparent" }}
          />
        ) : (
          <animated.div style={{ ...springLoading }}>
            <LangButton
              getChange={handleLangChange}
              ontoggletheme={onToggleTheme}
            />

            <div onMouseMove={handleMousePos} className={styles.container}>
              <div style={toStyleBackground} className={styles.imgBack}></div>

              <MainPresentation />
            </div>
          </animated.div>
        )}
      </>
    </QueryContext.Provider>
  );
}
