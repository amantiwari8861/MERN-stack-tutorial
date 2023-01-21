// import React from 'react'
// import Header from './Header'

// const Home = () => {
//   return (
//     <div style={{backgroundColor:"greenyellow"}}>
//       <Header/>
//             <h1>Hello i am Home Component !</h1>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {

  return (
    <React.Fragment>
      <h4>Welcome to UI courses</h4>
      <br />
      <h4> Just Launched...</h4>
      <Link to="/display/Angular">
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

    </React.Fragment>
  )
}
export default Home;
