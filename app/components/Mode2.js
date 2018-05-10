import React, { Component } from 'react'
import { Columns, Column, Image, Title, Tile, Icon } from 'bloomer'
import _ from 'lodash/collection'
import QButton from './QButton'
import SkipButton from './SkipButton'
import DB from './../db'

export default class Mode2 extends Component {
  constructor(props){
    super(props)
    this.showRight = this.showRight.bind(this)
    this.handleBtn = this.handleBtn.bind(this)
    this.handleImg = this.handleImg.bind(this)
    this.generateNext = this.generateNext.bind(this)
    this.state = { answers: [], correct: {}, freeze: false, hideImg: false }
  }
  componentDidMount(){
      this.generateNext();
  }

  showRight(){
    document.querySelector(`.btn-${this.state.correct.id}`).click()
  }

  generateNext(){
    let answers = _.sampleSize(DB, 4)
    let correct = _.sample(answers)
    let freeze = false;
    this.setState({ answers, correct, freeze })
  }

  handleBtn(id, e){
    this.setState({freeze: true})
    console.log(id)
  }

  handleImg(){
      this.setState({ hideImg: !this.state.hideImg })
  }

  render(){
    let { correct, freeze, answers } = this.state
    let iconClass = !this.state.hideImg ? "fa fa-2x fa-eye" : "fa fa-2x fa-eye-slash"
    return (
      <Tile>
        <Column isSize='1/2' className="thumb-wrap">
          <Title hasTextAlign="centered">{correct.translation}</Title>
          <div className="has-text-centered">
            <Icon isSize="large" className={iconClass} onClick={this.handleImg} title="Show tip"/>
          </div>
          <Image isSize='256x256' src={correct.img_url && !this.state.hideImg ? correct.img_url: 'https://via.placeholder.com/256x256'} />
        </Column>
        <Column isSize='1/2' className="buttons-wrap">
          {
            answers.map((item,i) =>
                <QButton key={i} rid={correct.id} elem={item} mode={ freeze }
                      handler={this.handleBtn} /> )
          }
          <SkipButton showRight={this.showRight} getNext={this.generateNext} mode={ freeze } />
        </Column>
      </Tile>
    )
  }

}
