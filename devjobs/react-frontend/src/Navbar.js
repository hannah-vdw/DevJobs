import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
  },
  navColor: {
    background: "#FFFFFF",
    color: "#003343",
  },
  button: {
    fontWeight: 600,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.navColor}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          DevJobs
        </Typography>
        <Button color="inherit" className={classes.button}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
