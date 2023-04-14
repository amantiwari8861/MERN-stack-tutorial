import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const HttpMethods = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [addFlag, setAddFlag] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8088/students").then((res) => {
      setStudents(res.data);
    });
  }, []);
  
  const addStudent = (e) => {
    e.preventDefault();
    setSuccess("");
    if (name === "" || salary === ""||address==="") {
      setMessage("Please enter the values");
    } 
    else 
    {
      setMessage("");
      setAddFlag(false);
      let newStudent = { name: name, salary: salary,address:address };
      axios.post("http://localhost:8088/students",newStudent).then((res) => {
        setStudents([...students, res.data]);
        setSuccess(`New Student has been added with the id ${res.data.id} `);
      });
      setName("");
      setSalary("");
      setAddress("");
    }
  };


  const deleteStudent = (empId) => {
    setSuccess("");
    let studentId = parseInt(empId);
    axios.delete("http://localhost:8088/students/" + studentId).then((res) => {
      axios.get("http://localhost:8088/students").then((res) => {
        setStudents(res.data);
      });
    });
  };

  const updateStudent = (empId) => {
    let studentId=parseInt(empId);
    setAddFlag(true);
    setSuccess("");
    if (name === "" || salary === ""||address==="") {
      setMessage("Please enter the values");
    } 
    else 
    {
      setMessage("");
      setAddFlag(false);
      let newStudent = { name: name, salary: salary,address:address };
      console.log("http://localhost:8088/students/"+(studentId.toString()));
      console.log(typeof studentId.toString());
      console.log(typeof `http://localhost:8088/students/${studentId}`);
      console.log(newStudent);
      axios.put(`http://localhost:8088/students/`+studentId,{newStudent}
        ).then((res) => {
        axios.get("http://localhost:8088/students").then((res) => {
          setStudents(res.data);
        });
      setSuccess(` Student data has been Update with the id ${res.data.id} `);
      });
      setName("");
      setSalary("");
      setAddress("");
    }
  };
  return (
    <>
      <table style={{ width: "60%" }} className="table table-bordered">
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.salary}</td>
                  <td>{student.address}</td>
                  <td>
                    <button onClick={() => deleteStudent(student.id)}>
                      <i className="fa fa-trash"></i>
                    </button>
                    <button onClick={() => updateStudent(student.id)}>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </button>

                  </td>
                </tr>
              );
            })
          ) : (
            <div>No data found</div>
          )}
        </tbody>
      </table>

      <button onClick={() => setAddFlag(!addFlag)} className="btn btn-primary">
        Add Student
      </button>
      <br />
      <br />
      <div className="text-success">{success}</div>
      {addFlag ? (
        <form>
          EmpName:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setMessage("");
            }}
          />
          <br />
          <br />
          Salary:{" "}
          <input
            type="text"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
              setMessage("");
            }}
          />
          <br />
          <br />
          Address:{" "}
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setMessage("");
            }}
          />
          <br />
          <br />
          <button onClick={addStudent} className="btn btn-primary">
            Add
          </button>
          <button onClick={updateStudent} className="btn btn-primary">
            Update
          </button>
          <div className="text-danger">{message}</div>
        </form>
      ) : null}
    </>
  );
};

export default HttpMethods;