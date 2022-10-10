import logo from './logo.svg';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
