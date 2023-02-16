import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class FormComponent extends React.Component 
{
    handleLogin = (e) => {
        e.preventDefault();
        alert("Welcome " + this.nameRef.value);
    }
    render() {
        return (<React.Fragment>
            <form onSubmit={this.handleLogin}>
                <TextInput nameRef={input => this.nameRef = input} /><br /><br />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </React.Fragment>)
    }
}
function TextInput(props) {
    console.log("Props")
    console.log(props.nameRef)
    return (
        <React.Fragment>
            <br /><br /><label>UserName:</label>
            <input type="text" ref={props.nameRef} />
        </React.Fragment>
    );
}
export default FormComponent;
