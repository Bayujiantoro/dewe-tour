import NavLog from "../Navbar/navbarLogin";
import Footer from "../Footer/footer";
import { Button } from "react-bootstrap";
import TourCardAdmin from "./TourCardAdmin";
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
            <TourCardAdmin />
            <Footer />
        </div>
    )
}