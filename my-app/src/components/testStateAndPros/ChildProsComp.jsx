// import React from 'react'

// const ChildProsComp = (props) => {
//     return (
//         props.emplist.map(employee => {
//             return <h1 key={employee.empId}>ID  : {employee.empId}  Name : 
//             {employee.name} Designation {employee.designation}</h1>
//         }
//         )
//     )
// }

// export default ChildProsComp

// import React, { Component } from 'react'

// export default class ChildProsComp extends Component {

//     constructor({emplist}) {
//         super(props.emplist);
//         console.log(emplist);
//     }
    //     render() {
    // return(
    //             this.props.emplist.map(employee => {
    //                 return <h1 key={employee.empId}>ID  : {employee.empId}  Name :
    //                     {employee.name} Designation {employee.designation}</h1>
    //             }
    //             )
    //         )
    //   }
// }

import React from 'react'

const ChildProsComp = ({emplist}) => {
  return (
    (<>
        <table style={{ width: '60%' }} className='table'>
                <thead className="thead-light">
                        <tr>
                                <th>EmpID</th>
                                <th>Name</th>
                                <th>Designation</th>
                        </tr>
                </thead>
                <tbody>
                        {emplist.map(employee => {
                                return (<tr key={employee.empId}>
                                        <td>{employee.empId}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.designation}</td>
                                </tr>)
                        })
                        }
                </tbody>
        </table><br/><br/>
</>)

  )
}

export default ChildProsComp
