import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ROUTER_ADMIN, ROUTER_TEACHER } from "../../constants/router";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.color.primary,
    flexGrow: 1
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {ROUTER_TEACHER.map(router => {
            return <NavLink to={router.path}>{router.label}</NavLink>;
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
}
