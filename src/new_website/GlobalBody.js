import React, { useState, useEffect, useContext } from "react";
import { LangButton } from "./LangButton";
import styles from "./styles_css/containerStyle.module.css";
import MainPresentation from "./MainPresentation";
import MediaQuery, { useMediaQuery } from "react-responsive";

export const QueryContext = React.createContext();

export default function GlobalBody() {
  const [lang, setLang] = useState("en");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });

  const isBigScreen = useMediaQuery({
    query: "(min-width: 1600px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 600px) and (max-width: 1300px)",
  });

  const isPhone = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const handleLangChange = (e) => {
    setLang(e.target.name);
  };

  const toStyleBackground = {
    //left: mousePos.x + "px",
    //top: mousePos.y + "px",
  };

  const handleMousePos = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    if (!isTablet) {
      setMousePos({
        x: (-mouseX + centerPos.x) * 0.02,
        y: (-mouseY + centerPos.y) * 0.02,
      });
    } else
      setMousePos({
        x: 0,
        y: 0,
      });
  };

  useEffect(() => {
    const centerX = document.body.clientWidth / 2;
    const centerY = document.body.clientHeight / 2;
    setCenterPos({ x: centerX, y: centerY });
  }, [window.innerHeight, window.innerWidth]);

  return (
    <QueryContext.Provider value={{ isBigScreen, isTablet, isPhone, lang }}>
      <LangButton getChange={handleLangChange} />

      <div onMouseMove={handleMousePos} className={styles.container}>
        <div style={toStyleBackground} className={styles.imgBack}></div>

        <MainPresentation />
      </div>
    </QueryContext.Provider>
  );
}
