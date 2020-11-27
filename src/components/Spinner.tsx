import MuiCircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import * as React from 'react';

const CircularProgress = styled(MuiCircularProgress)(spacing);
const Spinner = () => (
  <Grid container item justify="center">
    <CircularProgress my={1} />
  </Grid>
);

export default Spinner;
