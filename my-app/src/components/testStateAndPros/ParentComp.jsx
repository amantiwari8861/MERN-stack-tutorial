import { useState } from "react";
import Employee from "./ChildToParent";

// Demo: Child to Parent communication
const Employees = () => {
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
  return <Employee empData={employees}  addEmployee={addEmployee}  xyz="6777"/>;//passing a fxn addEmployee
};
export default Employees;
