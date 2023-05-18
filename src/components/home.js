import NavigationBar from "./navbar"
import Tagline from "./tagline"
import Cards from "./card"
import TourCard from "./tourCard"
import Footer from "./footer"
// import NavLog from "./components/navbarLogin"

import Guarantine from "../images/guarantee 1.png"
import Heart from "../images/heart 1.png"
import Agent from "../images/agent1.png"
import ReactAngel from "../images/Rectangle8.png"

export default function Home() {
    return (
        <div>
            <div className=" bgImg">
                {/* <NavLog /> */}
                <NavigationBar />
                <Tagline />
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Cards img={Guarantine} title="Best Price Guarantee" desc="A small river named. Duren flows by their places and suplies" />
                    <Cards img={Heart} title="Best Price Guarantee" desc="A small river named. Duren flows by their places and suplies" />
                    <Cards img={Agent} title="Best Price Guarantee" desc="A small river named. Duren flows by their places and suplies" />
                    <Cards img={Guarantine} title="Best Price Guarantee" desc="A small river named. Duren flows by their places and suplies" />
                </div>
                <h1 style={{ textAlign: "center", marginTop: " 50px", marginBottom: "50px" }}>Group Text</h1>
                <div >
                    <div className="row row-cols-1 row-cols-sm-3 m-0">
                        <TourCard img={ReactAngel} title="6D/4N Fun tassie Vacation " location="japan" price="2,300,000" />
                        <TourCard img={ReactAngel} title="6D/4N Fun tassie Vacation " location="japan" price="2,300,000" />
                        <TourCard img={ReactAngel} title="6D/4N Fun tassie Vacation " location="japan" price="2,300,000" />
                        <TourCard img={ReactAngel} title="6D/4N Fun tassie Vacation " location="japan" price="2,300,000" />
                        <TourCard img={ReactAngel} title="6D/4N Fun tassie Vacation " location="japan" price="2,300,000" />

                    </div>
                </div>


                <Footer />


            </div>
        </div>
    )
}