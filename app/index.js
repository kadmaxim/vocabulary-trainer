import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bulma';
import './main.scss'
import { Container, Box, Title } from 'bloomer';
import App from './components/App'


const Home1 = () => (
    <h1>Welkome!</h1>
)

ReactDOM.render(
  <Router>
    <Container>
        <Title hasTextAlign="centered"> Vocabulary Trainer </Title>
        <Box>
          <App />
        </Box>
    </Container>
  </Router>,
  document.getElementById('root')
);
