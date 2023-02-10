import './App.css';
// import ComponentDidMount from './Components/ComponentDidMount';
// import Counter from './Components/Counter';
import Timer from './Components/Timer';
import ErrorHandler from './ErrorHandler';
// import Student from './Components/Student';

function App() {
  return (
    <>
    {/* <Student/> */}
    {/* <Counter/> */}
    {/* <ComponentDidMount/> */}
    {/* <Timer/> */}
    <ErrorHandler>
      <Timer/>
    </ErrorHandler>
    </>
  );
}

export default App;
