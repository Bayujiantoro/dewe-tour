import "./components/style/bg.css"
import Home from "./components/Home/home"
import Detail from "./components/Detail-pages/detail";
import Boking from "./components/booking/booking"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ListTransaction from "./components/admin-page/list-transaction";
import Profile from "./components/profile/profile";


import { useParams } from "react-router-dom";






function App() {
  const id = useParams()

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/payment" element={<Boking/>}/>
        <Route path="/list-transaction" element={<ListTransaction/>}/>
        <Route path="/profile" element={<Profile/>} />

      </Routes>
    </Router>
    // <Home/>
    // <Detail/>
    // <Boking/>

  );
}

export default App;
