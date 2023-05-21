import "./components/style/bg.css"
import Home from "./components/Home/home"
import Detail from "./components/Detail-pages/detail";
import Payment from "./components/payment/payment"
import ListTransaction from "./components/admin-page/list-transaction";
import Profile from "./components/profile/profile";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, redirect as Redirect } from "react-router-dom"
import React from "react";
import PrivateRoute from "./components/privateRoute";
import PrivateLogin from "./components/privateLogin";



function App() {
  // const { id, qty } = useParams()
 console.log(localStorage.getItem("admin"))


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/payment/:id/:qty" element={<Payment />} />
        <Route exact path="/profile/:id/:qty" element={<Profile />} />

        <Route exact path="/" element={<PrivateRoute />} >
          <Route exact path="/list-transaction" element={<ListTransaction />} />
        </Route>

          {/* <Route exact path="/profile" element={<Profile />} /> */}


        {/* <Route path="/list-transaction" element={<ListTransaction />} /> */}



      </Routes>
    </Router>
    // <Home/>
    // <Detail/>
    // <Boking/>

  );
}

export default App;
