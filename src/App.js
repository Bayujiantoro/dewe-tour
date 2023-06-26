import "./components/style/bg.css"
import Home from "./components/Home/home"
import Detail from "./components/Detail-pages/detail";
import Payment from "./components/payment/payment"
import ListTransaction from "./components/admin-page/list-transaction";
import Profile from "./components/profile/profile";
import { BrowserRouter as Router, Routes, Route, redirect as Redirect } from "react-router-dom"
import React, { useState } from "react";

import PrivateAdmin from "./components/privateRoute";
import AddTrip from "./components/admin-page/add-trip";
import IncomeTrip from "./components/admin-page/income-trip";
import PrivateLogin from "./components/privateLogin";
import UpdateTrip from "./components/admin-page/update-trip";

import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";
import { useContext } from "react";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />

        <Route exact path="/" element={<PrivateLogin />}>
          <Route exact path="/payment/:id" element={<Payment />} />
          <Route exact path="/profile" element={<Profile />} />

        </Route>

        <Route exact path="/" element={<PrivateAdmin />} >
          <Route exact path="/list-transaction" element={<ListTransaction />} />
          <Route exact path="/add-trip" element={<AddTrip />} />
          <Route exact path="/income-trip" element={<IncomeTrip />} />
          <Route exact path="/update-trip/:id" element={<UpdateTrip />} />
        </Route>
      </Routes>
    </Router>
    // <Home/>
    // <Detail/>
    // <Boking/>

  );
}

export default App;
