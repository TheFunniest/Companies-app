import { makeStyles } from '@material-ui/core/styles';

export const usePaginationStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    '& > ul': {
      justifyContent: 'center'
    }
  }
}));
