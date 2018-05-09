import React, { Component } from 'react'
import { Columns, Column, Image, Title, Tile } from 'bloomer'
import _ from 'lodash/collection'
import QButton from './Button'
import DB from './../db'


class Mode2 extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleBtn = this.handleBtn.bind(this)
    this.state = { answers: [], correct: {}, freeze: false}
  }

  handleClick(){
    let answers = _.sampleSize(DB, 4)
    let correct = _.sample(answers)
    let freeze = false;
    this.setState({ answers, correct, freeze })
    console.log( `hit! ${JSON.stringify(answers)} `)
  }

  handleBtn(id, e){
    this.setState({freeze: true})
    console.log(id)
  }

  render(){
    return (
      <Tile>
        <Column isSize='2/3'>
          <Title>{this.state.correct.translation}</Title>
          <Image isSize='256x256' src={this.state.correct.img_url ? this.state.correct.img_url: 'https://via.placeholder.com/256x256'} />
        </Column>
        <Column isSize='1/3' className="buttons-wrap">
          {
            this.state.answers.map(
              (item,i) => <QButton key={i} elem={item} mode={this.state.freeze}
                              handler={this.handleBtn} rid={this.state.correct.id} />
            )
          }
          <QButton handler={this.handleClick} />
        </Column>
      </Tile>
    )
  }


}

export default Mode2;
