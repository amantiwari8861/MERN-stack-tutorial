// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// const Login = () => {

//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     return (
//         <>
//             <div className="container">
//                 <form onSubmit={()=>alert("username:"+username+"\n password:"+password)}>
//                     <div className="form-group">
//                         <label htmlFor="name">Username:</label>
//                         <input
//                             style={{ width: "40%" }}
//                             type="text"
//                             className="form-control"
//                             id="name"
//                             placeholder="Enter Name"
//                             name="name"
//                             onChange={(event) => setUsername(event.target.value)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="pwd">Password:</label>
//                         <input
//                             style={{ width: "40%" }}
//                             type="password"
//                             className="form-control"
//                             id="pwd"
//                             placeholder="Enter password"
//                             name="password"
//                             onChange={(event) => setPassword(event.target.value)}

//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// };
// export default Login;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// class Login extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { name: '', password: ''}
//     }
//     setEmpState = (e) => {
//            const value = e.target.value;
//            console.log(e.target);
//            const field =  e.target.name;
//            this.setState({[field]:value})
//            console.log(field+" : "+value);
//         //    alert(" name:"+this.state.name+"\npassword:"+this.state.password)
//     }
//     handleLogin = (e) => {
//         e.preventDefault();
//         alert('Logged in successfully');
//     }
//     render() {
//         return(<React.Fragment>
//             <form>
//                 <div className="form-group">
//                     <label>Username:</label>
//                     <input style={{width:'40%'}} type="text" className="form-control" value={this.state.name} id="name" placeholder="Enter Name" name="name" onChange={this.setEmpState} />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input style={{width:'40%'}} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
//                 </div>
//                <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
//            </form>
//         </React.Fragment>)
//     }
// }
// export default Login;
import React from 'react';
import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(username===""||password==="") {
            setError("Enter username and password")
            setSuccess("")
        }
        else {
            setSuccess("Login successful")
            setError("")
        }
    }
  return (
    <>
      <div className="container d-flex align-center">

        <form onSubmit={handleSubmit} className="col col-lg-6">
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="name"
              value={username}
              onChange={(event)=>setUsername(event.target.value)}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              style={{ width: "40%" }}
              type="password"
              id="pwd"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {success?<div className="text-success">{success}</div>:null}
          {error?<div className="text-danger">{error}</div>:null}
        </form>
      </div>
    </>
  );
};
export default Login;
