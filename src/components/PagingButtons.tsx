import Box from '@material-ui/core/Box';
import MuiButton from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import * as React from 'react';

const Button = styled(MuiButton)(spacing);

interface Props {
  fetchNext?: () => void;
  fetchPrev?: () => void;
  loading: boolean;
}

const PagingButtons = ({ fetchNext, fetchPrev, loading }: Props) => (
  <Box display="flex" my={2} justifyContent="flex-end">
    <Button mr={1} variant="outlined" disabled={!fetchPrev || loading} color="primary" onClick={fetchPrev}>
      Prev
    </Button>
    <Button variant="outlined" disabled={!fetchNext || loading} color="primary" onClick={fetchNext}>
      Next
    </Button>
  </Box>
);

export default PagingButtons;
