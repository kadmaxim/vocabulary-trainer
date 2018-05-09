import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bulma'
import 'font-awesome/css/font-awesome.css'
import './main.scss'
import { Container, Box, Title } from 'bloomer'
import App from './components/App'


const Home1 = () => (
    <h1>Welсome!</h1>
)

ReactDOM.render(
    <Container>
        <Title hasTextAlign="centered"> Vocabulary Trainer </Title>
        <Box className="main-wrap">
          <App />
        </Box>
    </Container>,
  document.getElementById('root')
);
