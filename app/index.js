import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Box } from 'bloomer';
import App from './components/App'

ReactDOM.render(
  <Container>
    <Box>
      <App msg="Vocabulary Trainer" />
    </Box>
  </Container>,
  document.getElementById('root')
);
