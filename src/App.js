import { Route, Routes } from "react-router-dom";
import "./App.css";
//import AddStudent from "./pages/AddStudent";
// import Country from "./pages/Country";
// import FCompoent from "./pages/FComponent";
// import Login from "./pages/Login";
// import Student from "./pages/Student";
// import { Link, Route, Routes } from 'react-router-dom'
// import DetailStudent from "./pages/DetailStudent";
import Selector from "./components/Selector";
import CarSelection from "./components/CarSelection";
import Timer from "./components/Timer";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* <h1>Hello</h1>
      <Link to='students'>Student</Link> | 
      <Link to='add-students'>AddStudent</Link> | 
      <Link to='countries'>Country</Link> | 
      <Link to='f'>FCompoent</Link> | 
      <hr/>
      <Routes>
        <Route path="students" element={<Student />}>
          <Route path="add" element={<AddStudent />}></Route>
          <Route path="f" element={<FCompoent />}></Route>
        </Route> */}
        
        {/* <Route path="add-students" element={<AddStudent />}></Route>
        <Route path="countries" element={<Country />}></Route>
        <Route path="detail-student" element={<DetailStudent />}></Route>
        <Route path="f/:id" element={<FCompoent />}></Route>
        <Route path="" element={<Login />}></Route>
      </Routes> */}
      <Routes>
         <Route path="selector" element={<Selector />}></Route>
         <Route path="carselection" element={<CarSelection />}></Route>
         <Route path="timer" element={<Timer />}></Route>
         <Route path="counter" element={<Counter />}></Route>
      </Routes>
    </>
  );
}

export default App;

// '/': Login Component
// 2 input usn, pass, button
// Ấn nút, kiểm tra: nếu usn & pass = 'admin' => Student.

