// import st from './App.module.css';
// import {Buttn}  from "./test";
// // import  BasicExample from "./test";


// function App() {
  //   return <div className={st.box}><Buttn/><Buttn/></div>;
  //   // return <BasicExample/>
  // }
  
  // export default App;
  
import React from "react";
// class App extends React.Component {
//   render() {
//     return React.createElement("h1", {}, "Hello World");
//   }
// }
// export default App;
// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

// function App(){
//   const notify = () => toast("Wow so easy !");

//   return (
//     <div>
//       <button onClick={notify}>Notify !</button>
//       <ToastContainer />
//     </div>
//   );
// }
// export default App;

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./NavBar";
import ChatBox from "./ChatBox";
import Welcome from "./Welcome";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}
export default App;