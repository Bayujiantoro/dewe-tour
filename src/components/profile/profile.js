import NavLog from "../Navbar/navbarLogin"
import Footer from "../Footer/footer"
import Personal from "./personal"
import HistoryTrip from "./historyTrip"

export default function Profile(){
    return(
        <div className="bgColor">
            <NavLog/>
            <Personal/>
            <HistoryTrip/>
            <Footer/>

        </div>
    )
}