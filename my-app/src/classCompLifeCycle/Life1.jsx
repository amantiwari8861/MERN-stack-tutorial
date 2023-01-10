// import React, { Component } from 'react'

// export default class Life1 extends Component {
//     constructor() {//to initialize a value
//         super();//
//         this.state = {
//             secondsElapsed: 0
//         };
//         console.log("constructor runs");
//     }
//     start = () => {
//         this.setState({
//             secondsElapsed: this.state.secondsElapsed + 1
//         });
//         // console.log("start fxn run");
//     }
//     stop=()=>{
//         clearInterval(this.interval)
//     }
//     componentDidMount()//runs when compenent mounted 
//     {
//         this.interval = setInterval(this.start, 1000);
//         console.log("componentDidMount started");
//     }
//     render() {
//         return (<React.Fragment>
//             <h2> Seconds Elapsed: {this.state.secondsElapsed} </h2>
//             {console.log("render started")}
//             <button onClick={this.stop}>Stop</button>
//         </React.Fragment>);
//     }
// }

//updating phase

// import React from 'react';
// class Life1 extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//         count: 0
//         };
//     }
//     start = () => {
//         this.setState({
//         count: this.state.count + 1
//         });
//     }
//     componentDidMount() {
//         this.interval = setInterval(this.start, 2000);
//     }
//     render() {
//         return ( <React.Fragment>
//                 {console.log("rendering Life1")}
//                     <Updates newVal= {this.state.count} /> 
//                 </React.Fragment>);
//             }
//         }
// class Updates extends React.Component {
//     shouldComponentUpdate(newProps, newState) {
//         {console.log("rendering shouldcompupdate")}
//         if (this.props.newVal <= 3) 
//         {
//             console.log('shouldComponentUpdate:', newProps);
//                 return false;
//             } else {
//                  return true;
//             }
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//             console.log('Previous value destroyed:', prevProps);
//             console.log('Updated');
//     }
//     render() {
//         return ( <React.Fragment>
//                             {console.log("rendering Updates")}
//                     <h2> Seconds Elapsed: {this.props.newVal} </h2> 
//                 </React.Fragment>);
//             }
// }
// export default Life1;

//unmounting phase

import React from 'react';
// class Life1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//     start = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }
//     componentDidMount() {
//         this.interval = setInterval(this.start, 1000);
//     }
//     componentWillUnmount() {
//         console.log('Component WILL UNMOUNT!')
//         clearInterval(this.interval);
//     }
//     render() {
//         return (<React.Fragment>
//             <Updates new={this.state.count} />
//         </React.Fragment>);
//     }
// }
// class Updates extends React.Component {
//     shouldComponentUpdate(newProps, newState) {
//         if (this.props.new <= 3) {
//             console.log('shouldComponentUpdate:', newProps);
//             return false;
//         } else {
//             return true;
//         }
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('Previous value destroyed:', prevProps);
//         console.log('Updated');
//     }
//     render() {
//         return (<React.Fragment>
//             <h2> Seconds Elapsed: {this.props.new} </h2>
//         </React.Fragment>);
//     }
// }
// export default Life1;


class Life1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    start = () => {
        this.setState({
        count: this.state.count + 1
        });
    }
    render() {
        if (this.state.count > 5) {
            throw new Error('Count cannot be greater than 5 ')
        }
        return ( <React.Fragment>
                <h1>{this.state.count}</h1><br/>
               <button onClick={this.start}>Update</button> 
            </React.Fragment>);
        }
}

class ErrorHandler extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: false,
        errorInfo: null,
      };
    }
  
    componentDidCatch(error, info) { 
      this.setState({
        error: error,
        info: info,
      });
    }
  
    render() {
      if(this.state.error) {
        return (
          <React.Fragment>
            <h5>Sorry. Counter value is greater than 5</h5>
            <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo}
          </details>
          </React.Fragment>
        );
      }
      return this.props.children;
    }
  }

export {Life1,ErrorHandler};
