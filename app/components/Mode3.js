import React, { Component } from 'react'
import { Columns, Column, Tile } from 'bloomer'
import _ from 'lodash/collection'
import QButton from './QButton3'
import DB from './../db'

export default class Mode3 extends Component {
  constructor(props){
    super(props)
    this.state = { answers: [], correct: {},}
    this.handleBtn = this.handleBtn.bind(this)
  }
  componentDidMount(){
      this.generateAll();
  }

  showRight(){
    //document.querySelector(`.btn-${this.state.correct.id}`).click()
  }

  handleBtn(...all){
    console.log(all)
  }

  generateAll(){
    let answers = _.sampleSize(DB, 4)
    this.setState({ answers })
  }

  render(){
    let { correct, freeze, answers } = this.state
    
	return (
      <Tile>
        <Column isSize='1/2' className="buttons-wrap">
        {
          _.shuffle(answers).map((item,i) =>
              <QButton key={i} rid={correct.id} elem={item}
                    handler={this.handleBtn} /> )
        }
        </Column>
        <Column isSize='1/2' className="buttons-wrap">
          {
            answers.map((item,i) =>
                <QButton key={i} rid={correct.id} elem={item} mode={ freeze }
                      handler={this.handleBtn} /> )
          }
        </Column>
      </Tile>
    )
  }

}
