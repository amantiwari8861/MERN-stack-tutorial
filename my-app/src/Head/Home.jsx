// import React from 'react'

// const Home = () => {
//   return (
//     <div style={{backgroundColor:"greenyellow"}}>
//             <h1>Hello i am Home Component !</h1>
//     </div>
//   )
// }

// export default Home
import React from 'react';
import { Link, useParams } from 'react-router-dom';
const Home=()=>{

  const params=useParams();
    return (
      <React.Fragment>
        <h4>Welcome &nbsp;{params.name} to UI courses</h4>
        <br /><br />
        <h4> Just Launched...</h4>
        <Link to="./display/Angular">
          <li>Angular</li>
        </Link>
        <Link to="./display/React">
          <li>React</li>
        </Link>
        <Link to="./display/Express">
          <li>Express</li>
        </Link>
        <Link to="./display/Vue">
          <li>Vue</li>
        </Link>
      </React.Fragment>
    )
  }
export default Home;
