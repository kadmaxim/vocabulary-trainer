import React, { Component } from 'react';
import { Column, Icon } from 'bloomer';

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    let { translation } = this.props.correct;
    responsiveVoice.speak(translation);
  }

  render() {
    let { correct, hideImg, toggleImg } = this.props;

    if (correct === undefined) return false;

    let iconClass = !hideImg ? 'fa fa-2x fa-eye' : 'fa fa-2x fa-eye-slash';
    return (
      <Column className="thumb-wrap">
        <div className="has-text-centered">
          <Icon
            isSize="large"
            className="fa fa-play fa-2x"
            onClick={this.handlePlay}
            title="Tipp abspielen"
          />
        </div>
      </Column>
    );
  }
}
