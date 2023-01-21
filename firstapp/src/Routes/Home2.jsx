import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
import withRouter from './WithRouter';

class Home2 extends Component {
    constructor(props)
    {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
        <React.Fragment>
            <h4>Welcome&nbsp;{this.props.params.name} to UI courses</h4>
            <h4> Just Launched...</h4>
            <Link to="./display/Angular">             
                <li>Angular</li> 
            </Link> 
            <Link to="/display/React">                      
                <li>React</li>
            </Link> 
            <Link to="/display/Express">                    
                <li>Express</li> 
            </Link> 
            <Link to="/display/Vue">  
                <li>Vue</li> 
            </Link> 
            <br />
            <br />
            <Outlet/>
            {/* This is because we need to tell the parent component, <Home2 /> where to render its children. React Router provides a component called Outlet that renders a route's child component. */}
        </React.Fragment>
    )
  }
}

export default withRouter(Home2)