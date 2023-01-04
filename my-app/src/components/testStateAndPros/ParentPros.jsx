// import React, { useState } from 'react'
// import ChildProsComp from './ChildProsComp'

// const ParentPros = () => {
//     const [employees, setEmployees] = useState([
//         { empId: 1234, name: 'John', designation: 'SE' },
//         { empId: 4567, name: 'Tom', designation: 'SSE' },
//         { empId: 8910, name: 'Kevin', designation: 'TA' }
// ])
//   return (
//     <ChildProsComp  emplist={employees}/>
//   )
// }

// export default ParentPros


import React, { Component } from 'react'
import ChildProsComp from './ChildProsComp'

export default class ParentPros extends Component {

     employees =[
                    { empId: 1234, name: 'John', designation: 'SE' },
                    { empId: 4567, name: 'Tom', designation: 'SSE' },
                    { empId: 8910, name: 'Kevin', designation: 'TA' }
                ]

  render() {
    return (
      <ChildProsComp emplist={this.employees} id={100} name={"xyz"}/>
    )
  }
}
