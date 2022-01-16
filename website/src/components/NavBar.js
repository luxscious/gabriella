import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  bar: {
    background: "#2C2C2C",
    height: 60,
    paddingRight: 40,
    boxShadow: "none",
    justifyContent: "center",
    borderBottom: "solid black 3px",
  },
  link: {},
  currentLink: {},
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "none",
  },
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.bar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.navlinks}>
          <Link
            to="/about"
            className={
              props.page === "about " ? classes.currentLink : classes.link
            }
          >
            about
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
            conact
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
