import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard";
import ScreenOne from "./Pages/ScreenOne";
import "./Pages/Login.css"
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Dashboard />} />
        <Route path='/transportprcreation' element={<ScreenOne />} />
      </Routes>
    </>
  );
}

export default App;
