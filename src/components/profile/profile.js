import NavLog from "../Navbar/navbarLogin"
import Footer from "../Footer/footer"
import Personal from "./personal"
import HistoryTrip from "./historyTrip"
import { useParams } from "react-router"

export default function Profile(){
    const {id, qty} = useParams()

    return(
        <div className="bgColor">
            <NavLog/>
            <Personal />
            <HistoryTrip id={id} qty={qty}/>
            <Footer/>

        </div>
    )
}