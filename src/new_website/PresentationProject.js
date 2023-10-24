import { useEffect } from "react";
import styles from "./styles_css/projectStyle.module.css";
import "./styles_css/fontStyle.css";

import { projectDetails } from "./data";
import { useContext } from "react";
import { QueryContext } from "./GlobalBody";

export default function PresentationProject(props) {
  const { updateref, togglescroll } = props;
  const { isBigScreen, isPhone, isTablet, lang } = useContext(QueryContext);

  const handleMouseDownAppear = (e) => {
    let box = document.getElementById("descriptionBox");
    let button = document.getElementById("aDisButton");
    e.preventDefault();
    e.target.style.color = "#cacaca";
    e.target.style.display = "none";
    for (
      let i = 2;
      i < projectDetails[`abstract${lang}${props.name}`].length;
      i++
    ) {
      document.getElementById(`abstractText${i}`).style.display = "block";
    }
    document.getElementById("aDisButton").style.display = "block";
    box.style.position = "fixed";
    box.style.width = isTablet ? "75%" : "70%";
    box.style.height = isTablet ? "70%" : "60%";
    box.style.top = "10%";
    box.style.left = "10%";
    box.style.boxShadow = "0px 0px 1px 100vw rgba(0,0,0,0.9)";
    box.style.background = "";
    box.style.overflowY = "scroll";
    box.style.padding = isTablet ? "2rem" : "5rem";
    togglescroll(false);
    button.style.position = "fixed";
    button.style.top = isTablet ? "2%" : "2%";
    button.style.left = isTablet ? "-5%" : "0%";
    box.style.borderWidth = "10px";
    for (let i = 0; i < 3; i++) {
      document.getElementById(`summary${i}`).style.display = "none";
    }
  };

  const handleMouseDownDisappear = (e) => {
    let box = document.getElementById("descriptionBox");
    let button = document.getElementById("aDisButton");
    e.preventDefault();
    e.target.style.color = "#cacaca";
    e.target.style.display = "none";
    for (
      let i = 1;
      i < projectDetails[`abstract${lang}${props.name}`].length;
      i++
    ) {
      document.getElementById(`abstractText${i}`).style.display = "none";
    }
    document.getElementById("aAppButton").style.display = "block";
    box.style.position = "";
    box.style.width = "";
    box.style.height = "";
    box.style.top = "";
    box.style.left = "";
    box.style.boxShadow = "";
    box.style.background = "";
    box.style.overflowY = "";
    box.style.padding = "";
    togglescroll(true);
    button.style.position = "";
    button.style.top = "";
    button.style.left = "";
    box.style.borderWidth = "";
    for (let i = 0; i < 3; i++) {
      document.getElementById(`summary${i}`).style.display = "";
    }
  };

  const handleMouseUp = (e) => {
    e.target.style.color = "";
  };

  const handleMouseEnter = (e) => {
    e.target.style.cursor = "pointer";
    e.target.style.color = "#808080";
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = "";
  };

  const toStyleProject = {
    margin: isTablet ? "0.2rem" : "",
    padding: isTablet ? "0.2rem 0.5rem" : "",
    height: isTablet ? "95%" : "",
    width: isTablet ? "95%" : "",
  };

  const toStyleExpl = {
    fontSize: isTablet ? "1.1rem" : "",
  };

  const toStyleVideo = {
    width: isTablet ? "95%" : "",
  };

  useEffect(() => {
    let box = document.getElementById("descriptionBox");
    if (box.style.position === "fixed") {
      for (
        let i = 2;
        i < projectDetails[`abstract${lang}${props.name}`].length;
        i++
      ) {
        document.getElementById(`abstractText${i}`).style.display = "block";
      }
    } else {
      for (
        let i = 1;
        i < projectDetails[`abstract${lang}${props.name}`].length;
        i++
      ) {
        document.getElementById(`abstractText${i}`).style.display = "none";
      }
    }
    return () => {};
  }, [lang]);

  useEffect(() => {
    let box = document.getElementById("descriptionBox");
    let button = document.getElementById("aDisButton");
    document.getElementById("aAppButton").style.display = "block";
    document.getElementById("aDisButton").style.display = "none";
    box.style.position = "";
    box.style.width = "";
    box.style.height = "";
    box.style.top = "";
    box.style.left = "";
    box.style.boxShadow = "";
    box.style.background = "";
    box.style.overflowY = "";
    box.style.padding = "";
    togglescroll(true);
    button.style.position = "";
    button.style.top = "";
    button.style.left = "";
    for (let i = 0; i < 3; i++) {
      document.getElementById(`summary${i}`).style.display = "";
    }
  }, []);

  return (
    <div style={toStyleProject} className={styles.project}>
      <h3 className={styles.projectTitle}>
        {projectDetails[`${lang}${props.name}`][0]}
      </h3>
      <ul className={styles.projectBox}>
        <div className={styles.projectAllImgVidDiv}>
          <div className={styles.projectImgBox}>
            <li className={styles.projectPhotoBox} key="proj1">
              <img
                alt={projectDetails[`descriptionPhoto`][`${lang}`][0]}
                className={styles.projectPhoto}
                src={projectDetails[`photo${props.name}`][0]}
              />
              <p className={styles.projectPhotoLegend}>
                {projectDetails[`descriptionPhoto`][`${lang}`][0]}
              </p>
            </li>
            <li className={styles.projectPhotoBox} key="proj2">
              <img
                alt={projectDetails[`descriptionPhoto`][`${lang}`][1]}
                className={styles.projectPhoto}
                src={projectDetails[`photo${props.name}`][1]}
              />
              <p className={styles.projectPhotoLegend}>
                {projectDetails[`descriptionPhoto`][`${lang}`][1]}
              </p>
            </li>
          </div>

          <video
            style={toStyleVideo}
            className={styles.projectVideo}
            src={projectDetails[`video${props.name}`][0]}
            controls
            muted
          />
        </div>
        <div className={styles.projectDescriptionBox} id="descriptionBox">
          <li
            id="aDisButton"
            className={styles.projectAbstractDisButton}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseDown={handleMouseDownDisappear}
            onMouseUp={handleMouseUp}
            key="proj5"
          >
            {projectDetails[`fold${lang}${props.name}`][1]}
          </li>
          {projectDetails[`${lang}${props.name}`].map((x, i) =>
            i === 0 ? (
              ""
            ) : (
              <li
                style={toStyleExpl}
                className={styles.projectExpl}
                id={`summary${i - 1}`}
                key={`${props.name}${i}`}
              >
                {x}
              </li>
            )
          )}
          <li className={styles.projectAbstractTitle} key="proj3">
            {projectDetails[`abstract${lang}${props.name}`][0]}
          </li>
          <li
            name="abstract-first-sentence"
            style={toStyleExpl}
            className={styles.projectExpl}
          >
            {projectDetails[`abstract${lang}${props.name}`][1]}
          </li>
          <li
            id="aAppButton"
            className={styles.projectAbstractAppButton}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseDown={handleMouseDownAppear}
            onMouseUp={handleMouseUp}
            key="proj4"
          >
            {projectDetails[`fold${lang}${props.name}`][0]}
          </li>

          {projectDetails[`abstract${lang}${props.name}`].map((x, i) => (
            <li
              style={toStyleExpl}
              id={`abstractText${i}`}
              className={styles.projectAbstract}
              key={`abstract${lang}${i}`}
            >
              {x}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
