import { makeStyles } from "@material-ui/core/styles";


export const useListItemStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      maxWidth: "100%",
      backgroundColor: theme.palette.background.paper
    },
    link: {
      textDecoration: 'none',
      color: 'unset',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    
  }));