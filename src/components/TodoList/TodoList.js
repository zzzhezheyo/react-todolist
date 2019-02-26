import React, { Component } from 'react'

import TodoItem from "./TodoItem"
export default class TodoList extends Component {
  render() {
    console.log(this.props)
    return (
      <ol>
        {
          this.props.todos.map(item =><TodoItem key={item.id}>{item.text}</TodoItem>)
        }
      </ol>
    )
  }
}
