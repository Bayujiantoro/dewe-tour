import { TourData } from "../fake-data/dummy";
import NavLog from "../Navbar/navbarLogin";
import Footer from "../Footer/footer";
import TourCard from "../Home/component/tourCard";
import { Button } from "react-bootstrap";

export default function IncomeTrip() {
    return (
        <div className="bgColor">
            <NavLog />
            <div className="d-flex justify-content-between container mt-5">
                <h2>Income Trip</h2>
                <Button variant="" style={{ width: "180px", height:"40px" , backgroundColor: "darkorange", color: "white", }} type="button" onClick={()=>{
                    
                    window.location.href = "/add-trip"
                }}>
                    Add Trip
                </Button>
            </div>
            <TourCard />
            <Footer />
        </div>
    )
}