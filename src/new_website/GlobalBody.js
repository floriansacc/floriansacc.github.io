import { ButtonNavigation } from "./ButtonNavigation";
import React, { useState, useEffect, useContext } from "react";
import { LangButton } from "./LangButton";
import styles from "./styles_css/containerStyle.module.css";
import MainPresentation from "./MainPresentation";
import MediaQuery, { useMediaQuery } from "react-responsive";
import FooterInfo from "./FooterInfo";

export const QueryContext = React.createContext();

export default function GlobalBody() {
  const [lang, setLang] = useState("en");

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

  return (
    <QueryContext.Provider value={{ isBigScreen, isTablet, isPhone, lang }}>
      <LangButton getChange={handleLangChange} />

      <div className={styles.container}>
        <div className={styles.imgBack}></div>

        <MainPresentation />
        <FooterInfo />
      </div>
    </QueryContext.Provider>
  );
}
