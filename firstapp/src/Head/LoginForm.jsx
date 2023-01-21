import React from 'react'; 
class LoginForm extends React.Component {
    constructor(){
        super();
        this.state = { name: '', password: ''}
        this.nameRef = React.createRef()
        this.pwdRef = React.createRef()
    }           
    handleLogin = (e) => {
        e.preventDefault();
        if((this.nameRef.current.value==="") || (this.pwdRef.current.value===""))
		{ 
            alert("Please enter details"); 
        }
        else
        { 
            window.location.replace('/home2/'+this.nameRef.current.value); 
        }
    }
    render(){
        return (<React.Fragment>
                <div className='container'>
                    <form onSubmit={this.handleLogin} className="col col-lg-6 m-auto">
                        <br/><h2>Login</h2><br/>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type = "text" 
                            style={{width:'40%'}}className="form-control" ref={this.nameRef} name="name" 
				            placeholder = "UserName" 
				        /><br/><br/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type = "password" 
                            name="password" 
                            style={{width:'40%'}}
                            ref={this.pwdRef}className="form-control"
                            placeholder = "Password"
                        /><br/><br/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>	
                    </form>
                    </div>
                </React.Fragment>);
               }
}
export default LoginForm;
