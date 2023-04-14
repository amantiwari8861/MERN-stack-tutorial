import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Index from './components/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/component1' element={<Component1/>}></Route>
        <Route path='/component2' element={<Component2/>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
