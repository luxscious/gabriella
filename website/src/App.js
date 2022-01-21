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
    padding: 20,
  },

  sectionFour: {
    width: "100%",
    minHeight: window.innerHeight,
    backgroundColor: "#E2D6D6",
    display: "flex",
    paddingBottom: 20,
  },
  sectionFive: {
    width: "100%",
    minHeight: 400,
    backgroundColor: "#2C2C2C",
    display: "flex",
    paddingBottom: 20,
  },
  sectionSix: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#E2D6D6",
    color: "black",
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
      <div className={classes.container}>
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
                return (
                  <div className={classes.skillIcon}>
                    <img class="icon" src={x} alt="icon" />
                  </div>
                );
              })}
            </div>

            <h1 style={{ paddingLeft: "10%" }}>Soft Skills</h1>
            <div className={classes.skills}>
              {softSkills.map((x) => {
                return (
                  <div className={classes.skillIcon}>
                    <img class="icon" src={x} alt="icon" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="projects" className={classes.sectionFour}></div>
        <div id="contact" className={classes.sectionFive}></div>
        <div className={classes.sectionSix}>
          <p>Gabriella Gerges, 2022</p>
        </div>
      </div>
    </>
  );
}

export default App;
