import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes ={
    btnText:PropTypes.string.isRequired,
    onBtnClick:PropTypes.func
  }

  static defaultProps ={
    onBtnClick:()=>{}
  }
  
  constructor(){
    super()
    this.state={
      inputValue:''
    }
  }
  handleInputChange=(e)=>{
    
    this.setState({
      inputValue:e.currentTarget.value
    })
  }

  handleAddClick=()=>{
    if(this.state.inputValue===""){
      return
    }
    this.props.onBtnClick(this.state.inputValue)
    this.setState({
      inputValue:''
    })
  }  

  handleKeyUp=(e)=>{
    if(e.keyCode===13){
      this.handleAddClick()
    }
  }

  render() {
    return (
      <div>
        <input 
        value={this.state.inputValue} 
        onChange={this.handleInputChange}
        onKeyUp = {this.handleKeyUp}
         type="text" />
        <button onClick={this.handleAddClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
