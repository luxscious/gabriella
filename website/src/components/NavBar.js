import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  bar: {
    background: "#E2D6D6",
    fontWeight: "Bold",
    height: 60,
    paddingRight: 40,
    boxShadow: "none",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "#2C2C2C",
    "&:hover": {
      color: "#968E8E",
    },
  },
  currentLink: {},
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "none",
  },
  navLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.bar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.navLinks}>
          <a href="#about" className={classes.link}>
            about
          </a>
          <a href="#skills" className={classes.link}>
            skills
          </a>

          <a href="#projects" className={classes.link}>
            projects
          </a>
          <a href="#contact" className={classes.link}>
            contact
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
