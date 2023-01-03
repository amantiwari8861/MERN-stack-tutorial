import React from 'react'

class TestClassComp extends React.Component 
{
    num=0;
    constructor()//initialize the values
    {
        super();//super is ompulsory if you define a constructor
        this.num=200;
        this.n1=100;//better way
    }

  render() {
    return (
      <h1>{this.num}Hello i am class component !{this.n1}  </h1>
    )
  }
}
export default TestClassComp

// import React, { Component } from 'react'

// export default class TestClassComp extends Component {
//   render() {
//     return (

//     )
//   }
// }
