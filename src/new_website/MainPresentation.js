import styles from "./styles_css/mainStyle.module.css";
import PresentationPhoto from "./PresentationPhoto";
import PresentationSchool from "./PresentationSchool";
import PresentationWork from "./PresentationWork";
import PresentationProject from "./PresentationProject";
import animateScrollTo from "animated-scroll-to";
import { listNavigation } from "./data";
import { useEffect, useContext, useRef, useState } from "react";
import { QueryContext } from "./GlobalBody";
import { ButtonNavigation } from "./ButtonNavigation";

export default function MainPresentation(props) {
  const { isPhone, isTablet, isDesktop, lang } = useContext(QueryContext);
  const myRef = useRef(0);
  const [lastState, SetLastState] = useState(
    sessionStorage.getItem("lastValue")
  );
  const [scrollAvailable, setScrollAvailable] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });

  if (isTablet || isPhone) {
    document.body.style.overflowY = "auto";
  } else {
    document.body.style.overflowY = "";
  }

  const toStylePresentationBigBox = {
    padding: isTablet ? "0" : isPhone ? "0" : "",
    opacity: myRef.current === 0 ? "1" : !isDesktop ? "1" : "0",
    position: "relative",
    //left: myRef.current === 1 ? mousePos.x + "px" : "",
    //top: myRef.current === 1 ? mousePos.y + "px" : "",
    transition:
      myRef.current === 0
        ? "all 0.4s ease-out 0.7s, left 0ms, top 0ms"
        : "all 0.5s, left 0.5s",
    height: isPhone ? "1500px" : "",
  };

  const toStyleSchoolBigBox = {
    flexDirection: isTablet ? "column" : "",
    padding: isTablet ? "0" : "",
    opacity: myRef.current === 1 ? "1" : !isDesktop ? "1" : "0",
    position: "relative",
    //left: myRef.current === 1 ? mousePos.x + "px" : "",
    //top: myRef.current === 1 ? mousePos.y + "px" : "",
    transition:
      myRef.current === 1
        ? "all 0.4s ease-out 0.7s, left 0ms, top 0ms"
        : "all 0.5s, left 0.5s",
  };

  const toStyleWorklBigBox = {
    flexDirection: isTablet ? "column" : "",
    padding: isTablet ? "0" : "",
    opacity: myRef.current === 2 ? "1" : !isDesktop ? "1" : "0",
    position: "relative",
    left: myRef.current === 2 ? mousePos.x + "px" : "",
    top: myRef.current === 2 ? mousePos.y + "px" : "",
    transition:
      myRef.current === 2
        ? "all 0.4s ease-out 0.7s, left 0ms, top 0ms"
        : "all 0.5s, left 0.5s",
  };

  const toStyleProjectBigBox = {
    flexDirection: isTablet ? "column" : "",
    padding: isTablet ? "0" : "",
    opacity: myRef.current === 3 ? "1" : !isDesktop ? "1" : "0",
    position: "relative",
    left: myRef.current === 3 ? mousePos.x + "px" : "",
    top: myRef.current === 3 ? mousePos.y + "px" : "",
    transition:
      myRef.current === 3
        ? "all 0.4s ease-out 0.7s, left 0ms, top 0ms"
        : "all 0.5s",
  };

  const toStyleSchoolSmallBox = {
    flexWrap: isTablet ? "wrap" : "",
    paddingRight: isTablet ? "0.2rem" : "",
    flex: isTablet ? "none" : "",
  };

  const toStyleDivSchool = {
    width: isTablet ? "100%" : "",
    height: isTablet ? "50%" : "",
    flex: isTablet ? "none" : "",
  };

  const toStyleWorklSmallBox = {
    flexWrap: isTablet ? "wrap" : "",
    paddingRight: isTablet ? "0.2rem" : "",
  };

  const toStyleTitles = {
    whiteSpace: isTablet ? "nowrap" : "",
    marginTop: isTablet ? "0rem" : "",
  };

  const toStyleProjectTitle = {
    width: isTablet ? "120px" : "120px",
    marginTop: isTablet ? "0rem" : "",
  };

  const toggleScrollAvailable = (x) => {
    setScrollAvailable(x);
  };

  const handleScrollSection = async (e) => {
    if (e.deltaY < 0 && myRef.current !== 0 && scrollAvailable) {
      myRef.current -= 1;
    } else if (e.deltaY > 0 && myRef.current < 3 && scrollAvailable) {
      myRef.current += 1;
    } else if (
      (e.deltaY && myRef.current === 3) ||
      (e.deltaY && myRef.current === 0)
    ) {
      return;
    } else if (
      parseInt(e.target.innerHTML) >= 0 &&
      parseInt(e.target.innerHTML) <= 3 &&
      !e.deltaY
    ) {
      myRef.current = parseInt(e.target.innerHTML);
    } else {
      return;
    }
    window.console.log(myRef.current);
    if (scrollAvailable) {
      setScrollAvailable(false);
      let elementToGo = document.getElementById(`Section${myRef.current}`);
      //window.location.hash = `#Section${myRef.current}`;
      await animateScrollTo(elementToGo, {
        cancelOnUserAction: false,
        minDuration: 1000,
        verticalOffset: -5,
        easing: (x) =>
          x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
      });
      sessionStorage.setItem("lastValue", myRef.current);
    }
    try {
      setScrollAvailable(true);
    } catch (error) {
      window.console.log(error);
    }
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
    const refreshedPage = async () => {
      if (scrollAvailable) {
        myRef.current = !lastState ? 0 : parseInt(lastState);
        setScrollAvailable(false);
        await animateScrollTo(
          document.getElementById(`Section${myRef.current}`),
          {
            cancelOnUserAction: false,
            minDuration: 1000,
            verticalOffset: -5,
            easing: (x) =>
              x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
          }
        );
      }
      try {
        setScrollAvailable(true);
      } catch (error) {
        window.console.log(error);
      }
    };
    if (isDesktop) {
      refreshedPage();
    }
  }, []);

  useEffect(() => {
    const switchToDesktop = async () => {
      setScrollAvailable(false);
      await animateScrollTo(
        document.getElementById(`Section${myRef.current}`),
        {
          cancelOnUserAction: false,
          minDuration: 1000,
          verticalOffset: -5,
          easing: (x) =>
            x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
        }
      );
      try {
        setScrollAvailable(true);
      } catch (error) {
        window.console.log(error);
      }
    };
    switchToDesktop();
  }, [isDesktop]);

  useEffect(() => {
    const centerX = document.body.clientWidth / 2;
    const centerY = document.body.clientHeight / 2;
    setCenterPos({ x: centerX, y: centerY });
  }, [window.innerHeight, window.innerWidth]);

  return (
    <div
      onWheel={scrollAvailable && isDesktop ? handleScrollSection : null}
      onMouseMove={handleMousePos}
      className={styles.main}
      id="startId"
    >
      <ButtonNavigation
        scrollavailable={scrollAvailable}
        updateref={handleScrollSection}
        myref={myRef}
      />

      <div
        id="Section0"
        style={toStylePresentationBigBox}
        className={styles.presentationBigBox}
      >
        <PresentationPhoto lang={lang} />
      </div>
      <div
        id="Section1"
        style={toStyleSchoolBigBox}
        className={styles.schoolBigBox}
      >
        <div className={styles.titlesBox}>
          <h2
            style={toStyleTitles}
            id={listNavigation.entrySchool[lang]}
            className={styles.titles}
          >
            {listNavigation.entrySchool[lang]}
          </h2>
        </div>
        <div style={toStyleSchoolSmallBox} className={styles.schoolSmallBox}>
          <div style={toStyleDivSchool} className={styles.schoolPack2}>
            <PresentationSchool name="jbnu" lang={lang} />
            <PresentationSchool name="jbnuExchange" lang={lang} />
          </div>
          <div style={toStyleDivSchool} className={styles.schoolPack2}>
            <PresentationSchool name="utbm" lang={lang} />
            <PresentationSchool name="lyon" lang={lang} />
          </div>
        </div>
      </div>
      <div
        id="Section2"
        style={toStyleWorklBigBox}
        className={styles.workBigBox}
      >
        <h2
          style={toStyleTitles}
          id={listNavigation.entryWork[lang]}
          className={styles.titles}
        >
          {listNavigation.entryWork[lang]}
        </h2>
        <div style={toStyleWorklSmallBox} className={styles.workSmallBox}>
          <PresentationWork name="edf" lang={lang} />
          <PresentationWork name="enedis" lang={lang} />
          <PresentationWork name="suez" lang={lang} />
        </div>
      </div>
      <div
        id="Section3"
        style={toStyleProjectBigBox}
        className={styles.projectBigBox}
      >
        <h2
          style={toStyleProjectTitle}
          id={listNavigation.entryProject[lang]}
          className={styles.titles}
        >
          {listNavigation.entryProject[lang]}
        </h2>
        <PresentationProject
          name="proj1"
          lang={lang}
          updateref={handleScrollSection}
          togglescroll={toggleScrollAvailable}
        />
      </div>
    </div>
  );
}
