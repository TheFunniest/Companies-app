import React, { useContext } from 'react';
import { Context } from '../../context'
import { usePaginationStyles } from './styles'
import {Pagination as MUPagination} from '@material-ui/lab/';

export  function Pagination() {
  const classes = usePaginationStyles();
  let { showCompanies } = useContext(Context)
  return (
    <div className={classes.root}>
      <MUPagination count={6} variant="outlined" shape="rounded"  onChange={showCompanies} className={classes.pagination} />
    </div>
  );
}