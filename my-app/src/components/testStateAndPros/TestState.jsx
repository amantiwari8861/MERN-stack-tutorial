// import React, { Component } from 'react'

// export default class TestState extends Component {
// constructor()
// {
//     super();
//     // this.state=100;
//     this.state={
//         counter:0,
//         name:"Aman"
//     };
// }
//   render() {
//     return (
//         <React.Fragment>
//         {console.log(this.state)}
//         <h1>Counter = {this.state.counter} and name= {this.state.name}</h1>
//         </React.Fragment>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class TestState extends Component {
//     constructor() {
//         super();
//         this.state = {
//             secondsElapsed: 0,
//             name:"Aman"
//         };
//     }
//     start = () => {
//         this.setState({
//             secondsElapsed: this.state.secondsElapsed + 1,
//             name:"Aman "+2
//         });
//     }
//     handleClick = () => {
//         this.interval = setInterval(this.start, 1000);
//     }
//     stop = () => {
//         clearInterval(this.interval);
//     }
//     render() {
//         return (<><br /><br />
//             <button onClick={this.handleClick}>Start timer</button>  &nbsp;
//             <button onClick={this.stop}>Stop timer</button><br /><br />
//             <h2> Seconds Elapsed: {this.state.secondsElapsed} {this.state.name} </h2>
//             {console.log(this.state.secondsElapsed)}
//         </>);
//     }
// }

// import React, { useState } from 'react'

// export default function TestState() {
//     let [counter, valueBadhao] = useState(1);// Array Destructuring
//     return (
//       <div>
//         Counter: {counter}<br/>
//         <button className="btn btn-primary" onClick={() => valueBadhao(()=>counter+1)}>Increment</button>
//       </div>
//     );
// }

import React, { useState } from 'react'

const TestState = () => {
    const [employees, setEmployees] = useState([
      { empId: 1234, name: "John", designation: "SE" },
      { empId: 4567, name: "Tom", designation: "SSE" },
      { empId: 8910, name: "Kevin", designation: "TA" },
    ]);
    const addEmployee = () => {
      setEmployees([
        ...employees,
        { empId: 6789, name: "Sam", designation: "TL" },
      ]);
    };
    return (
      <div className='container'>
        <table style={{ width: "60%" }} className="table">
          <thead className="thead-light">
            <tr>
              <th>EmpID</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee,i) => {
              return (
                <tr key={i}>
                  <td>{employee.empId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className={employees.length>5 ? "btn btn-danger" : "btn btn-primary"}  disabled={employees.length>5 ? true : false} onClick={addEmployee}>Add an Employee</button>
      </div>
    );
  
}

export default TestState
