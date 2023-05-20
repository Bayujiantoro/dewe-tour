import NavigationBar from "../Navbar/navbar"
import Tagline from "./component/tagline"
import Cards from "./component/card"
import TourCard from "./component/tourCard"
import Footer from "../Footer/footer"
import ModalLogin from "../form/modalLogin"
import ModalRegister from "../form/modalRegister"
import { useState } from 'react';



import Guarantine from "../images/guarantee 1.png"
import Heart from "../images/heart 1.png"
import Agent from "../images/agent1.png"
import ReactAngel from "../images/Rectangle8.png"

export default function Home() {
    
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);


    const loginClose = () => setLogin(false);
    const loginShow = () => setLogin(true);

    const registerClose = () => setRegister(false);
    const registerShow = () => setRegister(true)

    return (
        <div>
            <div className=" bgImg">

                <NavigationBar inLog={loginShow} inReg={registerShow} />
                <Tagline />
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Cards img={Guarantine} title="Best Price Guarantee" desc="A small river named. Duren flows by their places and suplies" />
                    <Cards img={Heart} title="Best Price Guarantee" desc="A small river named. Duren flows by their places and suplies" />
                    <Cards img={Agent} title="Best Price Guarantee" desc="A small river named. Duren flows by their places and suplies" />
                    <Cards img={Guarantine} title="Best Price Guarantee" desc="A small river named. Duren flows by their places and suplies" />
                </div>
                <h1 style={{ textAlign: "center", marginTop: " 50px", marginBottom: "50px" }}>Group Text</h1>
                <div >
                    <TourCard  />

                </div>


                <Footer />


            </div>
        </div>
    )
}