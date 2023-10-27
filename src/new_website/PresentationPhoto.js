import { useState, useEffect, useContext, useRef } from "react";
import styles from "./styles_css/content1.module.css";
import { listNavigation, presentation, footerInfo } from "./data";
import { useSpring, useTransition, animated } from "react-spring";
import { QueryContext } from "./GlobalBody";
import { RadialTextGradient } from "react-text-gradients-and-animations";

export default function PresentationPhoto(props) {
  const [currentMe, setCurrentMe] = useState(0);
  const { isBigScreen, isPhone, isTablet, isDesktop, lang } =
    useContext(QueryContext);
  const [windowSize, setWindowSize] = useState([
    document.body.clientWidth,
    document.body.clientHeight,
  ]);

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

  const bgStyle = useSpring({
    loop: { reverse: true },
    from: { background: "red" },
    to: { background: "blue" },
    config: { duration: 1000 },
  });

  const transitions = useTransition(presentation[lang].src[currentMe], {
    from: { opacity: 0, transform: "scale(1.7)" },
    enter: { opacity: 0.1, transform: "scale(1.5)" },
    leave: { opacity: 0, transform: "scale(1.4)" },
  });

  const toStyleContent1 = {
    flexFlow: isTablet ? "row wrap" : isPhone ? "column nowrap" : "",
    margin: isTablet ? "2.5rem 0.2rem 0.2rem 0.2rem" : isPhone ? "0.2rem" : "",
  };

  const toStyleContent1Left = {
    alignItems: isPhone ? "center" : "",
    height: isPhone ? "fit-content" : "",
  };

  const toStyleName = {
    fontSize: isPhone ? "3rem" : "4.5rem",
    padding: "0.2rem",
    margin: isTablet
      ? "0.5rem 0 0 2rem"
      : isPhone
      ? "1rem 0"
      : "0.5rem 1rem 0 1rem",
  };

  const toStyleContentDescription = {
    width: isPhone ? "95%" : "",
    margin: isPhone ? "1rem 0" : "",
  };

  const toStyleContactBox = {
    position: isTablet ? "relative" : "relative",
    width: isTablet ? "100%" : isPhone ? "95%" : "",
    minWidth: isTablet ? "50px" : "",
    margin: isTablet ? "0" : isPhone ? "" : "",
    padding: isTablet ? "0" : isPhone ? "" : "",
  };

  const toStyleContactP = {
    flex: isTablet ? "none" : "",
    fontSize: isTablet ? "1rem" : "",
  };

  const toStyleRightPart = {
    marginTop: isTablet ? "3rem" : "",
    marginLeft: isTablet ? "1rem" : "",
    width: isTablet ? "45%" : "",
    height: isTablet ? document.body.clientWidth / 2 : "",
  };

  const toStylePhotoBox = {
    padding: isTablet ? "0.2rem" : "",
    minWidth: isTablet ? "200px" : "",
    width: isTablet ? "95%" : "",
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
    setWindowSize([document.body.clientWidth, document.body.clientHeight]);
  }, [document.body.clientWidth]);

  return (
    <div style={toStyleContent1} className={styles.content1}>
      <div style={toStyleContent1Left} className={styles.content1Left}>
        <div style={toStyleName}>
          <RadialTextGradient
            shape={"circle"}
            position={"center"}
            colors={["#8b45e0", "#2b81ff"]}
            animate={true}
            animateDirection={"diagonal"}
            animateDuration={6}
            className={styles.content1Nom}
          >
            {presentation[lang].name}
          </RadialTextGradient>
        </div>
        <div className={styles.content1DescriptionBox}>
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
        </div>

        <div style={toStyleContactBox} className={styles.footerGauche}>
          <h2 style={toStyleContactP} className={styles.footerPLeft}>
            {footerInfo[`${lang}footer`][0]}
          </h2>
          <div className={styles.footerSmallDiv}>
            <p style={toStyleContactP} className={styles.footerPLeft}>
              {footerInfo[`${lang}footer`][1]}
            </p>
            <a href="mailto:florian.sacchetti@gmail.com">
              <span style={toStyleContactP} className={styles.footerPRight}>
                {footerInfo[`${lang}footer`][2]}
              </span>
            </a>
          </div>
          <div className={styles.footerSmallDiv}>
            <p style={toStyleContactP} className={styles.footerPLeft}>
              {footerInfo[`${lang}footer`][3]}
            </p>
            <a href="tel:+821083917997">
              <span style={toStyleContactP} className={styles.footerPRight}>
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
        </div>
      </div>

      <div style={toStyleRightPart} className={styles.content1Right}>
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
      </div>
    </div>
  );
}
