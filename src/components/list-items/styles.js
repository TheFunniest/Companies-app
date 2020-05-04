import {  makeStyles } from '@material-ui/core/styles'



export const useListItemsStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '60%',
      marginLeft: '20%',
      marginTop: '50px',
      height: '400px'
    },
    paper: {
      width: '100%',
      padding: '30px'
    }
  }));