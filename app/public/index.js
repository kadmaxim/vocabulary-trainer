import React from "react";
import ReactDOM from "react-dom";
import "bulma";
import "font-awesome/css/font-awesome.css";
import "./main.scss";
import { Container, Box, Title } from "bloomer";
import App from "./containers/App";
import ModalAuth from "./containers/ModalAuth";
import ModalWord from "./containers/ModalWord";
import Notification from "./containers/Notification";

import { Provider } from "react-redux";
import store from "./store";

window.addEventListener("keydown", event => {
  let { key } = event;
  let btn = key && (key === "Enter" || key.search(/[1-4]/) === 0) ? key : "";

  if (document.querySelector(`.btn-key-${btn}`)) {
    document.querySelector(`.btn-key-${btn}`).click();
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <section className="hero is-light">
        <div className="hero-body">
          <Title hasTextAlign="centered">Vokabeltrainer</Title>
        </div>
      </section>
      <Box className="main-wrap">
        <App />
      </Box>
      <ModalAuth />
      <ModalWord />
      <Notification />
    </Container>
  </Provider>,
  document.getElementById("root")
);
