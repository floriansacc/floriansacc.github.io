import { useState, useEffect, useContext, useRef } from "react";
import styles from "./styles_css/content1.module.css";
import { listNavigation, presentation, footerInfo } from "./data";
import { useSpring, useSpringRef, useTransition, animated } from "react-spring";
import { QueryContext } from "./GlobalBody";
import { RadialTextGradient } from "react-text-gradients-and-animations";

export default function PresentationPhoto(props) {
  const [currentMe, setCurrentMe] = useState(0);
  const { isSmallPhone, isPhone, isTablet, isDesktop, lang } =
    useContext(QueryContext);
  const [windowSize, setWindowSize] = useState([
    document.body.clientWidth,
    document.body.clientHeight,
  ]);
  const apiName = useSpringRef();
  const apiH2 = useSpringRef();
  const apiContact = useSpringRef();
  const apiPhotoBox = useSpringRef();
  const { myref } = props;

  const springName = useSpring({
    ref: apiName,
  });

  const springDescription = useSpring({
    ref: apiH2,
  });

  const springContactBox = useSpring({
    ref: apiContact,
  });

  const springPhotoBox = useSpring({
    ref: apiPhotoBox,
  });

  const handleBullet = (e) => {
    setCurrentMe(e.target.innerHTML);
  };

  const handleKakaoClick = (e) => {
    if (e.target.name === "kakao") {
      let x = document.getElementById("toAppear");
      if (e.target.style.height === "250px") {
        x.style.display = "";
        x.style.position = "";
        x.style.top = ``;
        x.style.right = ``;

        e.target.style.height = "";
        e.target.style.boxShadow = "";
        document.body.style.overflow = "";
        e.target.style.position = "";
        e.target.style.top = "";
        e.target.style.left = "";
        e.target.style.border = "";
        e.target.style.borderRadius = "";
        x.style.width = "";
        x.style.whiteSpace = "";
      } else {
        x.style.display = "flex";
        x.style.position = "fixed";
        x.style.top = `${windowSize[1] / 2 - 80}px`;
        x.style.right = `${windowSize[0] / 2 - 100}px`;
        x.style.width = "500px";
        x.style.whiteSpace = isTablet ? "wrap" : "";

        e.target.style.height = "250px";
        e.target.style.boxShadow = "0px 0px 1px 100vw rgba(0,0,0,0.8)";
        document.body.style.overflow = "hidden";
        e.target.style.position = "fixed";
        e.target.style.top = `${windowSize[1] / 2}px`;
        e.target.style.right = `${windowSize[0] / 2}px`;
        e.target.style.border = "10px solid red";
        e.target.style.borderRadius = "25px";
      }
    }
    if (e.target.name === "else") {
    }
  };

  const handleOnME = (e) => {
    e.target.style.cursor = isDesktop ? "pointer" : "";
  };

  const transitions = useTransition(presentation[lang].src[currentMe], {
    from: { opacity: 0, transform: "scale(1.7)" },
    enter: { opacity: 1, transform: "scale(1.5)" },
    leave: { opacity: 0, transform: "scale(1.4)" },
  });

  const toStyleContent1 = {
    flexFlow: isTablet ? "row wrap" : isPhone ? "column nowrap" : "",
    margin: isTablet ? "0.2rem" : isPhone ? "0.2rem" : "",
    justifyContent: isPhone ? "center" : "",
    alignItems: isPhone ? "center" : "",
    width: "200px",
    maxWidth: "unset",
  };

  const toStyleContent1SmallBox = {
    flexFlow: isTablet ? "row wrap" : isPhone ? "column-reverse nowrap" : "",
    justifyContent: isPhone ? "flex-end" : "",
    alignItems: isPhone ? "center" : "",
  };

  const toStyleContent1Left = {
    alignItems: isPhone ? "center" : "",
    width: isPhone ? "95%" : "",
    height: isPhone ? "fit-content" : "",
  };

  const toStyleName = {
    ...springName,
    position: "relative",
    fontSize:
      isPhone && !isSmallPhone
        ? "3rem"
        : isPhone && isSmallPhone
        ? "2rem"
        : "4.5rem",
    padding: "0.2rem",
    margin: isTablet
      ? "1rem 0 0 2rem"
      : isPhone
      ? "1rem 0 0 0"
      : "0.5rem 1rem 0 1rem",
  };

  const toStyleContent1DescriptionBox = {
    ...springDescription,
  };

  const toStyleContentDescription = {
    margin: isTablet ? "1rem 0" : isPhone ? "1rem 0" : "",
    padding: isPhone ? "0" : "",
    width: isPhone ? "95%" : "",
    height: isTablet || isPhone ? "fit-content" : "",
  };

  const toStyleContactBox = {
    ...springContactBox,
    width: isTablet ? "100%" : isPhone ? "95%" : "",
    minWidth: isTablet ? "50px" : isPhone ? "unset" : "",
    margin: isTablet ? "0" : isPhone ? "0" : "",
    padding: isTablet ? "0" : isPhone ? "0" : "",
  };

  const toStyleFooterSmallDiv = {
    flexFlow: isPhone ? "row wrap" : "",
  };

  const toStyleContactP = {
    flex: isTablet ? "none" : "",
    fontSize: isTablet ? "1rem" : isPhone ? "1rem" : "",
    padding: isPhone ? "10px 5px" : "",
  };

  const toStyleContactSpan = {
    flex: isTablet ? "none" : "",
    fontSize: isTablet ? "1rem" : isPhone ? "1rem" : "",
    fontWeight: isPhone ? "500" : "",
    padding: isPhone ? "10px 10px" : "",
  };

  const toStyleContent1Right = {
    ...springPhotoBox,
    marginTop: isTablet ? "3rem" : "",
    marginLeft: isTablet ? "1rem" : "",
    width: isTablet
      ? "45%"
      : isPhone && isSmallPhone
      ? "95%"
      : isPhone && !isSmallPhone
      ? "75%"
      : "",
    height: isTablet
      ? document.body.clientWidth / 1.85
      : isPhone && !isSmallPhone
      ? "65%"
      : isPhone && isSmallPhone
      ? "50%"
      : "",
    maxHeight: isTablet ? "85%" : "",
    alignSelf: isDesktop ? "flex-end" : isPhone ? "" : "flex-start",
  };

  const toStylePhotoBox = {
    margin: isPhone ? "0.2rem" : "",
    padding: isTablet ? "0.2rem" : isPhone ? "0.2rem" : "",
    minWidth: isTablet ? "200px" : isPhone ? "unset" : "",
    width: isTablet ? "95%" : isPhone ? "100%" : "",
    height: isTablet ? "80%" : "",
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentMe((prev) => {
        const nextMe = prev + 1;
        return nextMe % presentation[lang].src.length;
      });
    }, 50000);
    return () => clearInterval(intervalID);
  }, [currentMe]);

  useEffect(() => {
    if (isDesktop && myref.current === 0) {
      apiName.start({
        from: { left: "-1000px", opacity: "0" },
        to: { left: "0", opacity: "1" },
        //delay: 500,
        config: { duration: 2400, easing: (x) => 1 - Math.pow(1 - x, 4) },
      });
      apiH2.start({
        from: { left: "-300px", opacity: "0" },
        to: { left: "0", opacity: "1" },
        //delay: 650,
        config: { duration: 2550, easing: (x) => 1 - Math.pow(1 - x, 4) },
      });
      apiContact.start({
        from: { left: "-1000px", opacity: "0" },
        to: { left: "0", opacity: "1" },
        //delay: 800,
        config: { duration: 2700, easing: (x) => 1 - Math.pow(1 - x, 4) },
      });
      apiPhotoBox.start({
        from: { scale: "0", opacity: "0" },
        to: { scale: "1", opacity: "1" },
        config: {
          duration: 1500,
          easing: (x) =>
            x < 0.5
              ? (Math.pow(2 * x, 2) * ((2.5949095 + 1) * 2 * x - 2.5949095)) / 2
              : (Math.pow(2 * x - 2, 2) *
                  ((2.5949095 + 1) * (x * 2 - 2) + 2.5949095) +
                  2) /
                2,
        },
      });
    }
  }, [myref.current]);

  useEffect(() => {
    setWindowSize([document.body.clientWidth, document.body.clientHeight]);
  }, [document.body.clientWidth]);

  return (
    <div style={toStyleContent1} className={styles.content1}>
      <animated.div style={toStyleName}>
        <RadialTextGradient
          shape={"circle"}
          position={"center"}
          colors={["#8fc7ff", "#994af1"]}
          animate={true}
          animateDirection={"diagonal"}
          animateDuration={6}
          className={styles.content1Nom}
        >
          {presentation[lang].name}
        </RadialTextGradient>
      </animated.div>
      <div style={toStyleContent1SmallBox} className={styles.content1SmallBox}>
        <div style={toStyleContent1Left} className={styles.content1Left}>
          <animated.div
            style={toStyleContent1DescriptionBox}
            className={styles.content1DescriptionBox}
          >
            <h2
              style={toStyleContentDescription}
              className={styles.content1Description}
            >
              {presentation[lang].intro1}
            </h2>
            <h2
              style={toStyleContentDescription}
              className={styles.content1Description}
            >
              {presentation[lang].intro2}
            </h2>
          </animated.div>

          <animated.div
            style={toStyleContactBox}
            className={styles.footerGauche}
          >
            <h2 style={toStyleContactP} className={styles.footerPLeft}>
              {footerInfo[`${lang}footer`][0]}
            </h2>
            <div
              style={toStyleFooterSmallDiv}
              className={styles.footerSmallDiv}
            >
              <p style={toStyleContactP} className={styles.footerPLeft}>
                {footerInfo[`${lang}footer`][1]}
              </p>
              <a href="mailto:florian.sacchetti@gmail.com">
                <span
                  style={toStyleContactSpan}
                  className={styles.footerPRight}
                >
                  {footerInfo[`${lang}footer`][2]}
                </span>
              </a>
            </div>
            <div className={styles.footerSmallDiv}>
              <p style={toStyleContactP} className={styles.footerPLeft}>
                {footerInfo[`${lang}footer`][3]}
              </p>
              <a href="tel:+821083917997">
                <span
                  style={toStyleContactSpan}
                  className={styles.footerPRight}
                >
                  {footerInfo[`${lang}footer`][4]}
                </span>
              </a>
            </div>
            <div className={styles.divImgs}>
              <div className={styles.footerSmallDiv}>
                <p style={toStyleContactP} className={styles.footerPLeft}>
                  {footerInfo[`${lang}footer`][5]}
                </p>
                <a
                  target="_blank"
                  href={
                    isPhone || isTablet
                      ? `http://qr.kakao.com/talk/9DzDCSUIxhosfgCLWffciyNPw6k-`
                      : null
                  }
                >
                  <img
                    alt="kakao QR code"
                    name="kakao"
                    className={styles.footerImg}
                    src={footerInfo.kakaoImg}
                    onClick={isDesktop ? handleKakaoClick : null}
                    onMouseEnter={handleOnME}
                  />
                </a>
              </div>
              <div className={styles.footerSmallDiv}>
                <p id="toAppear" className={styles.toAppear}>
                  {footerInfo[`${lang}Appear`]}
                </p>
                <p style={toStyleContactP} className={styles.footerPLeft}>
                  {footerInfo[`${lang}footer`][6]}
                </p>
                <a href="https://www.instagram.com/floosaketi/" target="_blank">
                  <img
                    alt="Instagram"
                    className={styles.footerImg}
                    src={footerInfo.instaImg}
                  />
                </a>
              </div>
            </div>
            <p
              style={{
                ...toStyleContactP,
                transition: "all 0.2s ease-out",
              }}
              className={styles.aOtherProject}
              onMouseEnter={
                isDesktop
                  ? (e) => {
                      e.target.style.filter = "brightness(1.2)";
                      e.target.style.transform = "scale(1.1)";
                    }
                  : null
              }
              onMouseLeave={
                isDesktop
                  ? (e) => {
                      e.target.style.filter = "";
                      e.target.style.transform = "";
                    }
                  : null
              }
            >
              <a
                href="https://floriansacc.github.io/News-weather/"
                target="_blank"
                className={styles.aOtherProjectText}
              >
                {footerInfo[`${lang}otherproject`]}
              </a>
            </p>{" "}
          </animated.div>
        </div>

        <animated.div
          style={toStyleContent1Right}
          className={styles.content1Right}
        >
          <ul className={styles.bulletUL}>
            {presentation[lang].src.map((x, i) => (
              <li
                onClick={handleBullet}
                key={`photo${i}`}
                className={`${styles.bulletLi} ${
                  currentMe % presentation[lang].src.length === i
                    ? styles.bulletLiOn
                    : ""
                }`}
              >
                {i}
              </li>
            ))}
          </ul>
          <div
            style={toStylePhotoBox}
            id={`img${currentMe}`}
            className={styles.content1PhotoBox}
          >
            {transitions((styles, item) => (
              <animated.img
                style={{
                  ...styles,
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "auto",
                  willChange: "opacity",
                }}
                src={item}
                key={presentation[lang].src[currentMe]}
                alt="photo de moi"
              />
            ))}
          </div>
        </animated.div>
      </div>
    </div>
  );
}
