import {  makeStyles } from '@material-ui/core/styles'

export const useHeaderStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    homeIcon: {
      marginRight: '10px'
    },
    href: {
      textDecoration: 'none',
      color: 'unset'
    }
  
  }));