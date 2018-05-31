import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';
import 'font-awesome/css/font-awesome.css';
import './main.scss';
import { Container, Box, Title } from 'bloomer';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { words_list } from './store/reducers';

const store = createStore(words_list);

store.subscribe(() => {
  console.log('Subscribe: ', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <Title hasTextAlign="centered"> Vokabel Trainer </Title>
      <Box className="main-wrap">
        <App />
      </Box>
    </Container>
  </Provider>,
  document.getElementById('root')
);
