import React, { Component } from 'react';
import { Columns, Column, Image, Title, Tile, Icon } from 'bloomer';
import WordsList from './../containers/WordsList';
import SkipButton from './SkipButton';

class Mode2 extends Component {
  constructor(props) {
    super(props);
    this.showRight = this.showRight.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handlePlay = this.handlePlay.bind(this);

    this.props.generateNext(4);
  }

  showRight() {
    document.querySelector(`.btn-${this.props.correct.id}`).click();
    this.props.freezeAll(true);
  }

  handleImg() {
    this.setState({
      hideImg: !this.state.hideImg
    });
  }

  handlePlay() {
    responsiveVoice.speak(this.props.correct.translation);
  }

  render() {
    let { correct, freeze, answers, hideImg } = this.props;

    if (answers === undefined) return false;

    let iconClass = !hideImg ? 'fa fa-2x fa-eye' : 'fa fa-2x fa-eye-slash';
    return (
      <Tile>
        <Column isSize="1/2" className="thumb-wrap">
          <Title hasTextAlign="centered"> {correct.translation} </Title>{' '}
          <div className="has-text-centered">
            <Icon
              isSize="large"
              className={iconClass}
              onClick={this.handleImg}
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
        <Column isSize="1/2" className="buttons-wrap">
          <WordsList />
          <SkipButton
            showRight={this.showRight}
            getNext={this.props.generateNext}
            mode={freeze}
          />
        </Column>
      </Tile>
    );
  }
}

export default Mode2;
