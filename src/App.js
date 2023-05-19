import "./components/style/bg.css"
import Home from "./components/Home/home"
import Detail from "./components/Detail-pages/detail";
import Boking from "./components/booking/booking"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"


import { useParams } from "react-router-dom";






function App() {
  const id = useParams()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/boking" element={<Boking/>}/>

      </Routes>
    </Router>
    // <Home/>
    // <Detail/>
    // <Boking/>

  );
}

export default App;
