import React from "react";
import { Provider } from "../../context";
import { Paper } from "@material-ui/core";
import { useListItemsStyles } from "./styles";
import { ListItem } from "../list-item/listItem";
import { Pagination } from "../Pagination/pagination";

export function ListItems() {
  const classes = useListItemsStyles();

  return (
    <Provider>
      <div className={classes.root}>
        <Paper elevation={5} className={classes.paper}>
          <ListItem />
          <Pagination />
        </Paper>
      </div>
    </Provider>
  );
}
