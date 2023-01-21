// import React from 'react';
// class Display extends React.Component 
// {
//     constructor(props)
//     {
//         super(props);
//     }
//     render() {
//         return <React.Fragment>
//             console.log(this.props);
//             <h2>Inside {this.props.match.params.topic} component</h2>
//         </React.Fragment>
//     }
// };
// export default Display;

import React from 'react'
import { useParams } from 'react-router-dom'

const Display = () => {

    const params=useParams()
    console.log(params);

  return (
    <div>
      <h2>Inside {params.topic} component</h2>
    </div>
  )
}

export default Display
