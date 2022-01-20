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
          <Link
            to="/about"
            className={
              props.page === "about " ? classes.currentLink : classes.link
            }
          >
            about
          </Link>
          <Link
            to="/skills"
            className={
              props.page === "skills " ? classes.currentLink : classes.link
            }
          >
            skills
          </Link>
          <Link
            to="/projects"
            className={
              props.page === "projects " ? classes.currentLink : classes.link
            }
          >
            projects
          </Link>
          <Link
            to="/contact"
            className={
              props.page === "contact " ? classes.currentLink : classes.link
            }
          >
            contact
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
