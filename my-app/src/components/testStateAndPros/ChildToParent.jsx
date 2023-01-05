const Employee = ({empData,addEmployee}) => {
        return (<>
                <table style={{ width: '60%' }} className='table'>
                        <thead>
                                <tr>
                                        <th>EmpID</th>
                                        <th>Name</th>
                                        <th>Designation</th>
                                </tr>
                        </thead>
                        <tbody>
                                {empData.map((employee,i=0) => {
                                        return (<tr key={employee.empId+(++i)}>
                                                    <td>{employee.empId}</td>
                                                    <td>{employee.name}</td>
                                                    <td>{employee.designation}</td>
                                                </tr>)
                                            })
                                }
                        </tbody>
                </table><br/><br/>
                <button onClick={addEmployee} className="btn btn-primary">Add an Employee</button>
        </>)
    }
    export default Employee;
    