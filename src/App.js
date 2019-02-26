import React, { Component } from 'react'
import{
    TodoHeader,
    TodoInput,
    TodoList
}from './components'

export default class App extends Component {
  //因为todolist是随时变化的，所以我们建构造器
  constructor(){
      super()
      this.state={
          todos:[{
              id:1,
              text:"karry"
          },{
              id:2,
              text:'bhxs'
          }]
      }

  }  

  onTodoBtnClick=(text)=>{
    console.log(text)
    const todos = [...this.state.todos]
    todos.push({
        id:Math.random(),
        text
    })
    this.setState({
        todos
    })
  }  

  render() {
    return (
      <div>
        <TodoHeader subtitle='123'>真心</TodoHeader>
        <TodoInput
            btnText="add"
            onBtnClick={this.onTodoBtnClick}
        />
        <TodoList
            todos={this.state.todos}
        ></TodoList>
      </div>
    )
  }
}
