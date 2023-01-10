// import React, {useState} from 'react';

// function UseStateDemo() 
// {
//   const [name,setName] = useState("Jack")
//   const [num,changeNum] =useState(10);
//   return (
//     <div>
//       Your Name is: {name} <br />
//       <button onClick={()=>setName("Jill")}>Change</button>
//     <br />

//     <h1>The value of num={num}</h1>
//     <button onClick={()=>changeNum(50)}>Update num</button>

//     </div>
//   );
// }
// export default UseStateDemo;

import React, { useState } from 'react';
const AddEmployee = ({ addEmployee }) => {
    const [empId, setEmpId] = useState('');
    const [name,setName] = useState('');
    const [designation,setDesignation] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee={empId:empId,name:name,designation:designation}
        addEmployee(newEmployee);
        setEmpId('');
        setName('');
        setDesignation('')
    }
    return (
        <form onSubmit={handleSubmit}>
            EmpId:<input type='text' value={empId} onChange={(e) => setEmpId(e.target.value)} /><br/><br/>
            EmpName: <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
            Designation: <input type='text' value={designation} onChange={(e) => setDesignation(e.target.value)} /><br/><br/>
            <input type='submit' value='Add Employee' />
        </form>
    );
}
export default AddEmployee;


