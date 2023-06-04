import "./components/style/bg.css"
import Home from "./components/Home/home"
import Detail from "./components/Detail-pages/detail";
import Payment from "./components/payment/payment"
import ListTransaction from "./components/admin-page/list-transaction";
import Profile from "./components/profile/profile";
import { BrowserRouter as Router, Routes, Route, redirect as Redirect } from "react-router-dom"
import React, { useState } from "react";
import PrivateRoute from "./components/privateRoute";
import AddTrip from "./components/admin-page/add-trip";
import IncomeTrip from "./components/admin-page/income-trip";
import PrivateLogin from "./components/privateLogin";

import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";
import { useContext } from "react";




function App() {
  // const [state, dispatch] = useContext(UserContext)
  // const [isLoading, setIsLoading] = useState(true)

  // const checkUser = async () => {
  //   try{
  //     const response = await API.get
  //   }
  // }



  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />

        <Route exact path="/" element={<PrivateLogin />}>
          <Route exact path="/payment/:id/:qty" element={<Payment />} />
          <Route exact path="/profile/:id/:qty" element={<Profile />} />

        </Route>

        <Route exact path="/" element={<PrivateRoute />} >
          <Route exact path="/list-transaction" element={<ListTransaction />} />
          <Route exact path="/add-trip" element={<AddTrip />} />
          <Route exact path="/income-trip" element={<IncomeTrip />} />
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
