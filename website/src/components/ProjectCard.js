import { makeStyles } from "@material-ui/core";
import devpostIcon_white from "../assets/contact/devpostIcon_white.svg";
import devpostIcon_black from "../assets/contact/devpostIcon.svg";
import githubIcon_black from "../assets/contact/gitIcon_black.svg";
import githubIcon_white from "../assets/contact/gitIcon_white.svg";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#CBBFBF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    height: 500,
    color: "black",
    borderRadius: 50,
  },
  links: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingBottom: 40,
    justifyContent: "center",
    marginTop: "20%",
  },
  icon: { marginLeft: 25, marginRight: 25 },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 140,
    height: 40,
    backgroundColor: "black",
    textDecoration: "none",
    fontWeight: "Bold",
    borderRadius: 50,
    color: "#FDEFEF",
    "&:hover": {
      backgroundColor: "white",
      color: "#CBBFBF",
    },
    marginRight: 25,
  },
  devpost: {
    width: "60px",
    height: "50px",
    backgroundImage: `url(${devpostIcon_black})`,
    backgroundSize: "cover",
    "&:hover": {
      backgroundImage: `url(${devpostIcon_white})`,
      backgroundSize: "cover",
    },
  },
  github: {
    width: "50px",
    height: "50px",
    backgroundImage: `url(${githubIcon_black})`,
    backgroundSize: "cover",

    "&:hover": {
      backgroundImage: `url(${githubIcon_white})`,
      backgroundSize: "cover",
    },
  },
}));

function ProjectCard(props) {
  const classes = useStyles();
  const name = props.name;
  const github = props.github;
  const img = props.image;
  const devpost = props.devpost;
  const demo = props.demo;

  return (
    <div className={classes.card}>
      <h1 style={{ paddingTop: 40 }}>{name}</h1>
      <div
        style={{
          height: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: 325, border: "solid 5px white" }}
          src={img}
          alt="Project"
        />
      </div>

      <div className={classes.links}>
        {demo ? (
          <a
            className={classes.button}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        ) : null}
        {github ? (
          <a
            className={classes.icon}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.github} />
          </a>
        ) : null}
        {devpost ? (
          <a
            className={classes.icon}
            href={devpost}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.devpost} />
          </a>
        ) : null}
      </div>
    </div>
  );
}
export default ProjectCard;
