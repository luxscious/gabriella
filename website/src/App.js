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
    minHeight: 600,
    backgroundImage: `url(${sec1})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    paddingBottom: 20,
  },
  sectionTwo: {
    width: "100%",
    minHeight: 800,
    backgroundColor: "#E2D6D6",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
  sectionThree: {
    width: "100%",
    minHeight: 800,
    backgroundImage: `url(${sec3})`,
    backgroundSize: "cover",
  },
  textLogo: {
    fontFamily: "Bad Script",
    fontSize: 166,
    backgroundColor: "#FDEFEF",
    width: 400,
    height: 400,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    color: "black",
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
  resumeButton: {
    paddingLeft: 200,
    paddingRight: 200,
    backgroundColor: "#2C2C2C",
    color: "#FDEFEF",
    fontSize: 44,
    fontWeight: "Bold",
    paddingTop: 20,
    paddingBottom: 20,
    // display: "flex",
    margin: "auto",
    textDecoration: "none",
    "&:hover": {
      color: "#968E8E",
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
}));

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function App() {
  const classes = useStyles();
  const [oneIsAnimating, setOneIsAnimating] = useState(false);
  const [scroll, setScroll] = useState();
  console.log(oneIsAnimating);
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
              }}
            >
              <h1 style={{ paddingRight: 20 }}>I'm</h1>
              <h1 style={{ color: "#FDEFEF" }}>Gabriella Gerges,</h1>
            </div>

            <h1 id="hello2" style={{}}>
              Nice to meet you.
            </h1>
          </div>
          <div id="textLogo" className={classes.textLogo}></div>
        </div>
        <div className={classes.sectionTwo}>
          <div className={classes.profilePic} id="scrollFade">
            {/* <img src={profPic} alt=" Me :)" style={{}} /> */}
          </div>
          <div
            id="fade"
            style={{
              display: "flex",
              flexDirection: "column",
              width: 800,
              //padding: "5%",
              margin: "auto",
            }}
          >
            <p
              style={{
                fontSize: 26,
                textAlign: "center",
                color: "black",
                paddingTop: 100,
                paddingBottom: 100,
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
              Resume
            </a>
          </div>
        </div>
        <div className={classes.sectionThree}></div>
      </div>
    </>
  );
}

export default App;
