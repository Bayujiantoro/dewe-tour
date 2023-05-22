import NavLog from "../Navbar/navbarLogin"
import Footer from "../Footer/footer"
import SearchIcon from "../images/search.png"
import { TourData } from "../fake-data/dummy"

import { Image } from "react-bootstrap"

import ModalApprove from "./modalApprove"


export default function ListTransaction() {
    return (
        <div className="bgColor">
            <NavLog />
            <div className="container ">
                <p className="fs-3 fw-bold mt-5">Incoming Transaction</p>
                <table class="table bg-white mb-5 table-hover">
                    <thead className="table-list-transaction" >

                        <tr >
                            <th scope="col">No</th>
                            <th scope="col">Users</th>
                            <th scope="col">Trip</th>
                            <th scope="col">Bukti Transfer</th>
                            <th scope="col">Status Payment</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody style={{cursor:"pointer"}}>

                        {TourData.map((item, index) => (

                            <tr data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id}`}>

                                <td>{item.id}</td>
                                <td>C Ronaldo</td>
                                <td>{item.title}</td>
                                <td>BCA</td>
                                <td > <span style={{ backgroundColor: "antiquewhite", fontWeight: "500", color: "red", borderRadius: "5px", padding: "0 15px 5px 15px" }}>Pending</span></td>
                                <td>
                                    <Image src={SearchIcon} />

                                </td>
                                <div class="modal fade modal-xl" id={`exampleModal${item.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog " >
                                        <div class="modal-content bg-transparant" >
                                            <ModalApprove data = {item.id} />
                                        </div>
                                    </div>
                                </div>
                            </tr>
                        ))}


                    </tbody>
                </table>







            </div>
            <Footer />
        </div>
    )
}