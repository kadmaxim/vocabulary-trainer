import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';
import 'font-awesome/css/font-awesome.css';
import './main.scss';
import {Container, Box, Title} from 'bloomer';
import App from './components/App';

import {Provider} from 'react-redux';
import store from './store';

store.subscribe(() => {
  console.log('Subscribe: ', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Container className="">
      <section className="hero is-light">
        <div className="hero-body">
          <Title hasTextAlign="centered"> Vokabeltrainer</Title>
        </div>
      </section>
      <Box className="main-wrap">
        <App />
      </Box>
    </Container>
  </Provider>,
  document.getElementById('root')
);
