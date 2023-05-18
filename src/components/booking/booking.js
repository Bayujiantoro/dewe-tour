import NavLog from "../Navbar/navbarLogin";
import Footer from "../Footer/footer";
import  BoContent from "./boContent";

function Boking(){
    return (
        <div className="bgColor">
            <NavLog/>
            <BoContent/>

            <Footer/>
        </div>
    )
}

export default Boking;