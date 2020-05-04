import { Context } from "../../context";
import List from "@material-ui/core/List";
import { useListItemStyles } from "./styles";
import Avatar from "@material-ui/core/Avatar";
import React, { useContext, useEffect } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItem as MUListItem } from "@material-ui/core/";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

export function ListItem() {
  const classes = useListItemStyles();
  const { loadCompanies, allCompanies, pageNow } = useContext(Context);
  useEffect(() => {
    loadCompanies();
    // eslint-disable-next-line
  }, []);
  console.log(pageNow);
  return (
    <>
      <List className={classes.root}>
        {allCompanies ? (
          allCompanies
            .slice((pageNow - 1) * 5, (pageNow - 1) * 5 + 5)
            .map(company => {
              return (
                <Link
                  className={classes.link}
                  key={company.id}
                  to={{
                    pathname: "/info",
                    state: { ticker: company.ticker, pageNow }
                  }}
                >
                  <MUListItem button>
                    <ListItemAvatar>
                      <Avatar src="//logo.clearbit.com/spotify.com">
                        {/* <Typography>{company.ticker.slice(0, 2)}</Typography> */}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={company.name}
                      secondary={company.ticker}
                    />
                    <ChevronRightIcon />
                  </MUListItem>
                </Link>
              );
            })
        ) : (
          <LinearProgress />
        )}
      </List>
    </>
  );
}
