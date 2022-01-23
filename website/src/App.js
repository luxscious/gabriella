import NavBar from "./components/NavBar.js";
import { makeStyles } from "@material-ui/core";
import sec1 from "./assets/section_1.svg";
import sec3 from "./assets/section_2.svg";
import { init } from "ityped";
import { useEffect } from "react";
import $ from "jquery";
import profPic from "./assets/picture.svg";
import "./App.css";
import { useState } from "react";
import ProjectCard from "./components/ProjectCard.js";
import linkedIn from "./assets/contact/linkedin.svg";
import github from "./assets/contact/github.svg";
import email from "./assets/contact/email.svg";
import devpost from "./assets/contact/devpost.svg";
import Tooltip from "@mui/material/Tooltip";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginTop: 60,
  },
  sectionOne: {
    width: "100%",
    minHeight: window.innerHeight,
    backgroundImage: `url(${sec1})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    paddingBottom: 20,
  },
  textLogo: {
    fontFamily: "Bad Script",
    fontSize: 166,
    backgroundColor: "#4B4B4B",
    width: 400,
    height: 400,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    color: "#FFD7E5",
    marginLeft: "auto",
    marginRight: "auto",
  },
  hello: {
    fontSize: 30,
    paddingLeft: "15%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },

  sectionTwo: {
    width: "100%",
    minHeight: window.innerHeight,
    backgroundColor: "#E2D6D6",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
  resumeButton: {
    paddingLeft: 200,
    paddingRight: 200,
    backgroundColor: "#2C2C2C",
    color: "#FDEFEF",
    fontSize: 44,
    fontWeight: "Bold",
    paddingTop: 20,
    paddingBottom: 20,
    margin: "auto",
    textDecoration: "none",
    "&:hover": {
      color: "#FFD7E5",
    },
  },
  profilePic: {
    marginLeft: "auto",
    marginRight: "auto",
    height: 460,
    width: 460,
    padding: 20,
    backgroundImage: `url(${profPic})`,
    backgroundSize: "contain",
    display: "flex",
    alignSelf: "center",
  },
  aboutMe: {
    display: "flex",
    flexDirection: "column",
    width: 800,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    alignSelf: "center",
  },
  sectionThree: {
    width: "100%",
    minHeight: window.innerHeight,
    backgroundImage: `url(${sec3})`,
    backgroundSize: "cover",
    color: "#FFD7E5",
    disaply: "flex",
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  skillIcon: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },

  sectionFour: {
    width: "100%",
    minHeight: window.innerHeight,
    backgroundColor: "#E2D6D6",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 20,
    paddingTop: 50,
  },
  sectionFive: {
    width: "100%",
    minHeight: 400,
    backgroundColor: "#2C2C2C",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 20,
  },
  sectionSix: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#E2D6D6",
    color: "black",
  },
  projects: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "auto",
  },
  contacts: {
    paddingLeft: 10,
    paddingRight: 10,
    "&:hover": {
      width: 100,
      height: 100,
    },
  },
}));

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function importAll(r) {
  return r.keys().map(r);
}

function App() {
  const classes = useStyles();
  const [oneIsAnimating, setOneIsAnimating] = useState(false);
  const [scroll, setScroll] = useState();

  const animateSection1 = async () => {
    setOneIsAnimating(true);
    const logo = document.querySelector("#textLogo");
    logo.innerHTML = "";
    init(logo, {
      showCursor: false,
      strings: ["<G/>"],
      disableBackTyping: true,
      typeSpeed: 400,
    });
    $("#hello1").css("opacity", 0).animate({ opacity: 1 }, 1000);
    $("#hello2").delay(1000).css("opacity", 0).animate({ opacity: 1 }, 1000);
    await sleep(3000).then(() => {
      setOneIsAnimating(false);
    });
  };

  const topSkills = importAll(
    require.context("./assets/skills/top", false, /\.(png|jpe?g|svg)$/)
  );
  const softSkills = importAll(
    require.context("./assets/skills/soft", false, /\.(png|jpe?g|svg)$/)
  );
  const projects = importAll(
    require.context("./assets/projects", false, /\.(png|jpe?g|svg)$/)
  );
  $(window).on("scroll", function () {
    setScroll(this.scrollY);
  });
  useEffect(() => {
    if (!scroll && !oneIsAnimating) {
      animateSection1();
    }
  }, [scroll]);
  return (
    <>
      <NavBar />
      <div id={"page"} className={classes.container}>
        <div className={classes.sectionOne}>
          <div className={classes.hello}>
            <div
              id="hello1"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <h1 style={{ paddingRight: 30 }}>I'm</h1>
              <h1 style={{ color: "#FFD7E5", fontFamily: "Bad Script" }}>
                Gabriella Gerges
              </h1>
            </div>

            <h1 id="hello2" style={{}}>
              Nice to meet you.
            </h1>
          </div>
          <div id="textLogo" className={classes.textLogo}></div>
        </div>
        <div id="about" className={classes.sectionTwo}>
          <div className={classes.profilePic} id="scrollFade"></div>
          <div id="fade" className={classes.aboutMe}>
            <p
              style={{
                fontSize: 26,
                textAlign: "center",
                color: "black",
                paddingBottom: 50,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              I am a results-oriented Software Engineer comfortable switching
              between architecture, design and implementation. Experienced at
              working in teams or self-directed environment. Eager to learn and
              contribute programming expertise to development projects.
            </p>
            <a
              href="https://luxscious.github.io/git-cloud-storage/Gabriella_Gerges_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.resumeButton}
            >
              Resumé
            </a>
          </div>
        </div>
        <div id="skills" className={classes.sectionThree}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: window.innerHeight,
            }}
          >
            <h1 style={{ paddingLeft: "10%" }}>Top Skills</h1>
            <div className={classes.skills}>
              {topSkills.map((x) => {
                const skill = x.split("/")[3].split(".")[0];
                return (
                  <Tooltip title={skill}>
                    <div className={classes.skillIcon}>
                      <img class="icon" src={x} alt="icon" />
                    </div>
                  </Tooltip>
                );
              })}
            </div>

            <h1 style={{ paddingLeft: "10%", paddingTop: 20 }}>Soft Skills</h1>
            <div className={classes.skills}>
              {softSkills.map((x) => {
                const skill = x.split("/")[3].split(".")[0];
                return (
                  <Tooltip title={skill}>
                    <div className={classes.skillIcon}>
                      <img class="icon" src={x} alt="icon" />
                    </div>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
        <div id="projects" className={classes.sectionFour}>
          <h1
            style={{
              textAlign: "center",
              paddingBottom: 5,
              color: "black",
              textDecoration: "underline",
            }}
          >
            Projects
          </h1>
          <div className={classes.projects}>
            <ProjectCard
              name={"spacetagram"}
              image={projects[4]}
              demo={"https://luxscious.github.io/spacetagram/"}
              github={"https://github.com/luxscious/spacetagram"}
            />
            <ProjectCard
              name={"Hive"}
              image={projects[3]}
              github={"https://github.com/luxscious/hive"}
              devpost={"https://devpost.com/software/hive-thl07v"}
            />
            <ProjectCard
              name={"Val-T"}
              image={projects[5]}
              github={"https://github.com/luxscious/val-t"}
            />
            <ProjectCard
              name={"RiSync"}
              image={projects[0]}
              github={"https://github.com/luxscious/risync"}
              demo={""}
              devpost={"https://devpost.com/software/jet-lag-fixer"}
            />
            <ProjectCard
              name={"Travel Buddy"}
              image={projects[1]}
              github={"https://github.com/luxscious/TAMUHACK2021"}
              demo={""}
              devpost={"https://devpost.com/software/travel-buddy-wh873z"}
            />
            <ProjectCard
              name={"We Growth"}
              image={projects[2]}
              github={"https://github.com/luxscious/HackersNest"}
              devpost={"https://devpost.com/software/branched-out"}
            />
          </div>
        </div>
        <div id="contact" className={classes.sectionFive}>
          <h1
            style={{
              color: "#FFD7E5",
              marginLeft: "auto",
              marginRight: "auto",
              paddingBottom: 50,
            }}
          >
            Contact/Links
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <a
              href="https://www.linkedin.com/in/gabriella-gerges/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.contacts} src={linkedIn} alt="linkedIn" />
            </a>
            <a
              href="https://github.com/luxscious"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.contacts} src={github} alt="linkedIn" />
            </a>
            <a
              href="mailto:ggerges019@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.contacts} src={email} alt="linkedIn" />
            </a>
            <a
              href="https://devpost.com/luxscious?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.contacts} src={devpost} alt="linkedIn" />
            </a>
          </div>
        </div>
        <div className={classes.sectionSix}>
          <p>Gabriella Gerges, 2022</p>
        </div>
      </div>
    </>
  );
}

export default App;
