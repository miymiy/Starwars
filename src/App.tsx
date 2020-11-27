import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import People from 'containers/People';
import React from 'react';

const App = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Starwars character list
      </Typography>
      <People />
    </Box>
  </Container>
);

export default App;
