import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoHeader extends Component {
    static propTypes = {
        subtitle:PropTypes.string
    }

   static defaultProps={
    children:'wjkjy',
    subtitle:'whpzn'
   } 

  render() {
    return (
        <div>
        <h1>{this.props.children}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
}

//函数式组件创建defaultProps写法
// class TodoHeader extends Component {
//     render() {
//       return (
//           <div>
//           <h1>{this.props.children}</h1>
//           <p>{this.props.subtitle}</p>
//         </div>
//       )
//     }
// }
//   //箭头函数的写法
// TodoHeader.defaultProps={
//       children:'wjkjy',
//       subtitle:'whpzn'
// } 
// export default TodoHeader    
