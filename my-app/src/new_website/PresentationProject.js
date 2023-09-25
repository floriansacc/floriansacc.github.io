import { useEffect } from "react";
import styles from "./styles_css/projectStyle.module.css";
import "./styles_css/fontStyle.css";

import { projectDetails } from "./data";
import { useContext } from "react";
import { QueryContext } from "./GlobalBody";

export default function PresentationProject(props) {
  const { isBigScreen, isPhone, isTablet } = useContext(QueryContext);

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (
      e.target.innerHTML === projectDetails[`fold${props.lang}${props.name}`][0]
    ) {
      e.target.style.color = "#cacaca";
      e.target.style.display = "none";
      for (
        let i = 2;
        i < projectDetails[`abstract${props.lang}${props.name}`].length;
        i++
      ) {
        document.getElementById(`abstractText${i}`).style.display = "block";
      }
      document.getElementById("aDisButton").style.display = "block";
    } else {
      e.target.style.color = "#cacaca";
      e.target.style.display = "none";
      for (
        let i = 1;
        i < projectDetails[`abstract${props.lang}${props.name}`].length;
        i++
      ) {
        document.getElementById(`abstractText${i}`).style.display = "none";
      }
      document.getElementById("aAppButton").style.display = "block";
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

  const toStyleTitle = {
    width: isPhone ? "95%" : "",
  };

  const toStyleProject = {
    width: isPhone ? "100%" : "",
  };

  const toStyleProjectBox = {
    width: isTablet ? "98%" : isPhone ? "98%" : "",
  };

  const toStyleAllImgDiv = {
    flexDirection: isPhone ? "column" : "",
  };

  const toStylePhotoBox = {
    margin: isPhone ? "0.5rem auto" : "",
    width: isPhone ? "90%" : "",
  };

  const toStyleLegend = {
    fontSize: isPhone ? "1rem" : "",
  };

  const toStyleExpl = {
    width: isPhone ? "95%" : "",
    marginLeft: isPhone ? "0.3rem" : "",
    textAlign: "justify",
  };

  const toStyleDisButton = {
    marginLeft: isPhone ? "0.8rem" : "",
    textAlign: "justify",
  };

  const toStyleVideo = {
    width: isPhone ? "99%" : isTablet ? "95%" : "",
  };

  useEffect(() => {
    document.getElementById("aAppButton").style.display = "block";
    document.getElementById("aDisButton").style.display = "none";
    for (
      let i = 1;
      i < projectDetails[`abstract${props.lang}${props.name}`].length;
      i++
    ) {
      document.getElementById(`abstractText${i}`).style.display = "none";
    }
  }, [props.lang]);

  return (
    <div style={toStyleProject} className={styles.project}>
      <h3 style={toStyleTitle} className={styles.projectTitle}>
        {projectDetails[`${props.lang}${props.name}`][0]}
      </h3>
      <ul style={toStyleProjectBox} className={styles.projectBox}>
        <div style={toStyleAllImgDiv} className={styles.projectAllImgDiv}>
          <li
            style={toStylePhotoBox}
            className={styles.projectPhotoBox}
            key="proj1"
          >
            <img
              alt={projectDetails[`descriptionPhoto`][`${props.lang}`][0]}
              className={styles.projectPhoto}
              src={projectDetails[`photo${props.name}`][0]}
            />
            <p style={toStyleLegend} className={styles.projectPhotoLegend}>
              {projectDetails[`descriptionPhoto`][`${props.lang}`][0]}
            </p>
          </li>
          <li
            style={toStylePhotoBox}
            className={styles.projectPhotoBox}
            key="proj2"
          >
            <img
              alt={projectDetails[`descriptionPhoto`][`${props.lang}`][1]}
              className={styles.projectPhoto}
              src={projectDetails[`photo${props.name}`][1]}
            />
            <p style={toStyleLegend} className={styles.projectPhotoLegend}>
              {projectDetails[`descriptionPhoto`][`${props.lang}`][1]}
            </p>
          </li>
        </div>
        {projectDetails[`${props.lang}${props.name}`].map((x, i) =>
          i === 0 ? (
            ""
          ) : (
            <li
              style={toStyleExpl}
              className={styles.projectExpl}
              key={`${props.name}${i}`}
            >
              {x}
            </li>
          )
        )}
        <li className={styles.projectAbstractTitle} key="proj3">
          {projectDetails[`abstract${props.lang}${props.name}`][0]}
        </li>
        <li
          name="abstract-first-sentence"
          style={toStyleExpl}
          className={styles.projectExpl}
        >
          {projectDetails[`abstract${props.lang}${props.name}`][1]}
        </li>
        <li
          id="aAppButton"
          style={toStyleDisButton}
          className={styles.projectAbstractAppButton}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          key="proj4"
        >
          {projectDetails[`fold${props.lang}${props.name}`][0]}
        </li>

        {projectDetails[`abstract${props.lang}${props.name}`].map((x, i) => (
          <li
            style={toStyleExpl}
            id={`abstractText${i}`}
            className={styles.projectAbstract}
            key={`abstract${props.lang}${i}`}
          >
            {x}
          </li>
        ))}
        <li
          id="aDisButton"
          style={toStyleDisButton}
          className={styles.projectAbstractDisButton}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          key="proj5"
        >
          {projectDetails[`fold${props.lang}${props.name}`][1]}
        </li>
        <video
          style={toStyleVideo}
          className={styles.projectVideo}
          src={projectDetails[`video${props.name}`][0]}
          controls
          muted
        />
      </ul>
    </div>
  );
}
