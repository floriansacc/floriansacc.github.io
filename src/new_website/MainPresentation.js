import styles from "./styles_css/mainStyle.module.css";
import PresentationPhoto from "./PresentationPhoto";
import PresentationSchool from "./PresentationSchool";
import PresentationWork from "./PresentationWork";
import PresentationProject from "./PresentationProject";
import animateScrollTo from "animated-scroll-to";
import { listNavigation } from "./data";
import { useEffect, useContext, useRef, useState } from "react";
import { RadialTextGradient } from "react-text-gradients-and-animations";
import { QueryContext } from "./GlobalBody";
import { ButtonNavigation } from "./ButtonNavigation";
import { useSpring, animated, easings } from "react-spring";

export default function MainPresentation(props) {
  const { isSmallPhone, isPhone, isTablet, isDesktop, lang } =
    useContext(QueryContext);
  const myRef = useRef(0);
  const [scrollPosElem, setScrollPosElem] = useState([]);
  const prevPixelRatio = useRef(null);
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

  const leftSpring = useSpring({
    position: myRef.current === 2 ? "relative" : "relative",
    left: myRef.current === 2 ? "0" : "-200px",
    delay: 800,
    config: { duration: 800, easing: (x) => 1 - Math.pow(1 - x, 4) },
  });

  const toStyleMain = {
    padding: isPhone ? "0.2rem" : "",
  };

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
    height:
      isPhone && !isSmallPhone
        ? "1100px"
        : isPhone && isSmallPhone
        ? "1200px"
        : "",
  };

  const toStyleSchoolBigBox = {
    flexDirection: isTablet ? "column" : isPhone ? "column" : "",
    padding: isTablet ? "0" : isPhone ? "0" : "",
    opacity: myRef.current === 1 ? "1" : !isDesktop ? "1" : "0",
    position: "relative",
    //left: myRef.current === 1 ? mousePos.x + "px" : "",
    //top: myRef.current === 1 ? mousePos.y + "px" : "",
    transition:
      myRef.current === 1
        ? "all 0.4s ease-out 0.7s, left 0ms, top 0ms"
        : "all 0.5s, left 0.5s",
    height: isPhone ? "fit-content" : "",
    alignItems: isPhone ? "center" : "",
  };

  const toStyleWorklBigBox = {
    flexDirection: isTablet ? "column" : isPhone ? "column" : "",
    padding: isTablet ? "0" : isPhone ? "0" : "",
    opacity: myRef.current === 2 ? "1" : !isDesktop ? "1" : "0",
    position: "relative",
    //left: myRef.current === 2 ? mousePos.x + "px" : "",
    //top: myRef.current === 2 ? mousePos.y + "px" : "",
    transition:
      myRef.current === 2
        ? "all 0.4s ease-out 0.7s, left 0ms, top 0ms"
        : "all 0.5s, left 0.5s",
    height: isPhone ? "fit-content" : "",
    alignItems: isPhone ? "center" : "",
  };

  const toStyleProjectBigBox = {
    flexDirection: isTablet ? "column" : isPhone ? "column" : "",
    padding: isTablet ? "0" : isPhone ? "0" : "",
    opacity: myRef.current === 3 ? "1" : !isDesktop ? "1" : "0",
    position: "relative",
    //left: myRef.current === 3 ? mousePos.x + "px" : "",
    //top: myRef.current === 3 ? mousePos.y + "px" : "",
    transition:
      myRef.current === 3
        ? "all 0.4s ease-out 0.7s, left 0ms, top 0ms"
        : "all 0.5s",
    height: isPhone ? "fit-content" : "",
    alignItems: isPhone ? "center" : "",
  };

  const toStyleSchoolSmallBox = {
    flexFlow: isTablet ? "row wrap" : isPhone ? "column nowrap" : "",
    paddingRight: isTablet ? "0.2rem" : isPhone ? "0" : "",
    flex: isTablet ? "none" : "",
    width: isPhone ? "100%" : "",
  };

  const toStyleDivSchool = {
    flexFlow: isPhone ? "column nowrap" : "",
    width: isTablet ? "100%" : isPhone ? "100%" : "",
    height: isTablet ? "50%" : isPhone ? "" : "",
    flex: isTablet ? "none" : isPhone ? "none" : "",
    alignItems: isPhone ? "center" : "",
    margin: isPhone ? "0" : "",
  };

  const toStyleWorkSmallBox = {
    flexFlow: isTablet ? "row wrap" : isPhone ? "column nowrap" : "",
    paddingRight: isTablet ? "0.2rem" : isPhone ? "0" : "",
    flex: isTablet ? "none" : isPhone ? "none" : "",
    alignItems: isPhone ? "center" : "",
    width: isPhone ? "100%" : "",
  };

  const toStyleTitles = {
    ...leftSpring,
    whiteSpace: isTablet || isPhone ? "nowrap" : "",
    marginTop: isTablet || isPhone ? "0rem" : "",
    width: isPhone ? "fit-content" : "",
    margin: isPhone ? "5px 0" : "",
    alignSelf: isTablet || isPhone ? "center" : "",
    flex: isTablet || isPhone ? "unset" : "",
    maxWidth: isTablet || isPhone ? "unset" : "",
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
    if (isDesktop) {
      switchToDesktop();
    }
  }, [isDesktop]);

  useEffect(() => {
    const centerX = document.body.clientWidth / 2;
    const centerY = document.body.clientHeight / 2;
    setCenterPos({ x: centerX, y: centerY });
  }, [window.innerHeight, window.innerWidth]);

  useEffect(() => {
    if (isTablet) {
      const handleResize = () => {
        const currentPixelRatio = window.devicePixelRatio;
        if (currentPixelRatio !== prevPixelRatio.current) {
          setScrollPosElem([]);
          for (let i = 0; i < listNavigation[lang].length; i++) {
            let y = document.getElementById(`Section${i}`).offsetTop;
            setScrollPosElem((prev) => [...prev, y]);
          }
          prevPixelRatio.current = currentPixelRatio;
        }
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        setScrollPosElem([]);
        for (let i = 0; i < listNavigation[lang].length; i++) {
          let y = document.getElementById(`Section${i}`).offsetTop;
          setScrollPosElem((prev) => [...prev, y]);
        }
      };
    }
  }, [window.innerHeight, window.innerWidth]);

  return (
    <div
      onWheel={scrollAvailable && isDesktop ? handleScrollSection : null}
      onMouseMove={handleMousePos}
      style={toStyleMain}
      className={styles.main}
      id="startId"
    >
      <ButtonNavigation
        scrollavailable={scrollAvailable}
        updateref={handleScrollSection}
        myref={myRef}
        elempos={scrollPosElem}
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
        <animated.div
          style={toStyleTitles}
          className={styles.titlesBox}
          id="title1"
        >
          <RadialTextGradient
            shape={"circle"}
            position={"center"}
            colors={["#8b45e0", "#2b81ff"]}
            animate={true}
            animateDirection={"diagonal"}
            animateDuration={6}
            className={styles.titles}
            id={listNavigation.entrySchool[lang]}
          >
            {listNavigation.entrySchool[lang]}
          </RadialTextGradient>
        </animated.div>
        <div style={toStyleSchoolSmallBox} className={styles.schoolSmallBox}>
          <div style={toStyleDivSchool} className={styles.schoolPack2}>
            <PresentationSchool name="jbnu" lang={lang} myref={myRef} />
            <PresentationSchool name="jbnuExchange" lang={lang} myref={myRef} />
          </div>
          <div style={toStyleDivSchool} className={styles.schoolPack2}>
            <PresentationSchool name="utbm" lang={lang} myref={myRef} />
            <PresentationSchool name="lyon" lang={lang} myref={myRef} />
          </div>
        </div>
      </div>
      <div
        id="Section2"
        style={toStyleWorklBigBox}
        className={styles.workBigBox}
      >
        <animated.div
          style={toStyleTitles}
          className={styles.titlesBox}
          id="title2"
        >
          <RadialTextGradient
            shape={"circle"}
            position={"center"}
            colors={["#8b45e0", "#2b81ff"]}
            animate={true}
            animateDirection={"diagonal"}
            animateDuration={6}
            className={styles.titles}
            id={listNavigation.entrySchool[lang]}
          >
            {listNavigation.entryWork[lang]}
          </RadialTextGradient>
        </animated.div>

        <div style={toStyleWorkSmallBox} className={styles.workSmallBox}>
          <PresentationWork
            name="edf"
            lang={lang}
            myref={myRef}
            direction="down"
          />
          <PresentationWork
            name="enedis"
            lang={lang}
            myref={myRef}
            direction="up"
          />
          <PresentationWork
            name="suez"
            lang={lang}
            myref={myRef}
            direction="down"
          />
        </div>
      </div>
      <div
        id="Section3"
        style={toStyleProjectBigBox}
        className={styles.projectBigBox}
      >
        <div
          style={toStyleProjectTitle}
          className={styles.titlesBox}
          id="title3"
        >
          <RadialTextGradient
            shape={"circle"}
            position={"center"}
            colors={["#8b45e0", "#2b81ff"]}
            animate={true}
            animateDirection={"diagonal"}
            animateDuration={6}
            className={styles.titles}
            id={listNavigation.entryProject[lang]}
          >
            {listNavigation.entryProject[lang]}
          </RadialTextGradient>
        </div>

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
