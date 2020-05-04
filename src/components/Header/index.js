import React from "react";
import { Search } from "../Search";
import { useHeaderStyles } from "./styles";
import AppBar from "@material-ui/core/AppBar";
import HomeIcon from "@material-ui/icons/Home";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export function Header() {
  const classes = useHeaderStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <a href="/" className={classes.href}>
            <HomeIcon className={classes.homeIcon}></HomeIcon>
          </a>
          <Typography className={classes.title} variant="h6" noWrap>
            Companies
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
}
