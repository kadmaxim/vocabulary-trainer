import React, { Component } from 'react'
import { Button, Column } from 'bloomer'


export default class ButtonWrap extends Component {
  constructor(props){
    super(props)
    this.state = { isPressed : false }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    console.log( `hit! `)
    this.setState({ isPressed: true })

    let { elem, rid } = this.props
    let id = elem ? elem.id : 0

    this.props.handler()
  }

  static getDerivedStateFromProps(nextProps, prevState) {

      return prevState.isPressed && nextProps.mode ? {} : { isPressed: false }
  }

  render(){
    let { elem, rid, mode } = this.props
    let id = elem ? elem.id : 0
    return (
      <Column>
        <Button
          isColor={ this.state.isPressed && (id === rid ? 'success': 'danger') }
          isStatic={ !this.state.isPressed && mode }
          onClick={this.handleClick}>
          { elem ? elem.original: "Skip" }
        </Button>
      </Column>
    )
  }

}
