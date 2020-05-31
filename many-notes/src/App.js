import React from "react";
import TryUseReducer from "./components/TryUseReducer/index.js";
import Home from "./components/Home/Home";
import About from "./components/About/About";
// import App from '../../App'
// import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  white: {
    color:"white",
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.white}>
                Home
              </Link>
            </Typography>

            <Typography variant="h6" className={classes.title}>
              <Link to="/tryUseReducer" className={classes.white}>
                TryUseReducer
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/about" className={classes.white}>
                About
              </Link>
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/TryUseReducer">
            <TryUseReducer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

