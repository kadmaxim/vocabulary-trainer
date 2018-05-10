import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import 'font-awesome/css/font-awesome.css'
import './main.scss'
import { Container, Box, Title } from 'bloomer'
import App from './components/App'

ReactDOM.render(
    <Container>
        <Title hasTextAlign="centered"> Vocabulary Trainer </Title>
        <Box className="main-wrap">
          <App />
        </Box>
    </Container>,
  document.getElementById('root')
);
