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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: '', password: ''}
    }
    setEmpState = (e) => {
           const value = e.target.value;
           const field =  e.target.name;
           this.setState({[field]:value})
           alert(" name:"+this.state.name+"\npassword:"+this.state.password)
    }
    handleLogin = (e) => {
        e.preventDefault();
        alert('Logged in successfully');
    }
    render() {
        return(<React.Fragment>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.name} id="name" placeholder="Enter Name" name="name" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input style={{width:'40%'}} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
                </div>
               <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
           </form>
        </React.Fragment>)
    }
}
export default Login;

