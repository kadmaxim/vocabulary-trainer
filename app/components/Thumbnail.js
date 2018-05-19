import React, { Component } from 'react';
import { Column, Image, Icon } from 'bloomer';
import WordsList from './../containers/WordsList';
import SkipButton from './SkipButton';

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
    let { correct, hideImg, toggleImg } = this.props;

    if (correct === undefined) return false;

    let iconClass = !hideImg ? 'fa fa-2x fa-eye' : 'fa fa-2x fa-eye-slash';
    return (
      <Column className="thumb-wrap">
        <div className="has-text-centered">
          <Icon
            isSize="large"
            className={iconClass}
            onClick={toggleImg}
            title="Show tip"
          />
          <Icon
            isSize="large"
            className="fa fa-play fa-2x"
            onClick={this.handlePlay}
            title="Play tip"
          />
        </div>
        <Image
          isSize="256x256"
          src={
            correct.img_url && !hideImg
              ? correct.img_url
              : 'https://via.placeholder.com/256x256'
          }
        />
      </Column>
    );
  }
}
