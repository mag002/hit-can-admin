import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ROUTER_ADMIN, ROUTER_TEACHER } from "../../constants/router";
import { NavLink } from "react-router-dom";
import { Button, AppBar, Toolbar } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.color.primary,
    flexGrow: 1
  },
  button: {
    color: "white",
    "&.active": {
      borderBottom: "3px solid white"
    }
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {ROUTER_TEACHER.map(router => {
            return (
              <NavLink to={router.path} key={Math.random()}>
                {" "}
                <Button size="large" className={classes.button}>
                  {router.label}
                </Button>
              </NavLink>
            );
          })}
          {ROUTER_ADMIN.map(router => {
            return (
              <NavLink to={router.path} key={Math.random()}>
                {" "}
                <Button size="large" className={classes.button}>
                  {router.label}
                </Button>
              </NavLink>
            );
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
}
