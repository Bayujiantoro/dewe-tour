import NavLog from "../Navbar/navbarLogin"
import Footer from "../Footer/footer"
import Personal from "./personal"
import HistoryTrip from "./historyTrip"
import { useParams } from "react-router"
import { API } from "../../config/api"
import { useQuery } from "react-query"

export default function Profile() {
    const { data: checkAuth } = useQuery('checkAuthChace', async () => {
        const response = await API.get('/check-auth');
        // console.log("check auth : ", response?.data.Data)
        return response?.data.Data
    })
    // console.log("dari profile : ",checkAuth)
    return (
        <div className="bgColor">
            <NavLog />
            <Personal data={checkAuth} />
            {
                checkAuth?.Transaction.map((item, index) => (

                    <HistoryTrip data={item} i={index} />
                ))
            }
            <Footer />

        </div>
    )
}