import React, { Component } from 'react';
import { Column, Image, Icon } from 'bloomer';

export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    let { translation } = this.props.correct;
    responsiveVoice.speak(translation);
  }

  render() {
    let { correct, showImg, toggleImg } = this.props;

    if (correct === undefined) return false;

    let iconClass = showImg ? 'fa fa-2x fa-eye' : 'fa fa-2x fa-eye-slash';
    return (
      <Column className="thumb-wrap">
        <div className="has-text-centered">
          <Icon
            isSize="large"
            className={iconClass}
            onClick={toggleImg}
            title="Tipp anzeigen"
          />
          <Icon
            isSize="large"
            className="fa fa-play fa-2x"
            onClick={this.handlePlay}
            title="Tipp abspielen"
          />
        </div>
        <Image
          isSize="256x256"
          src={
            correct.img_url && showImg
              ? correct.img_url
              : 'https://via.placeholder.com/250x200'
          }
        />
      </Column>
    );
  }
}
