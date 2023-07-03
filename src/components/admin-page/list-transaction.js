import NavLog from "../Navbar/navbarLogin"
import Footer from "../Footer/footer"
import SearchIcon from "../images/search.png"
import { API } from "../../config/api"
import { useQuery } from "react-query"

import { Image } from "react-bootstrap"

import ModalApprove from "./modalApprove"


export default function ListTransaction() {
    const { data: transc } = useQuery('transcChace', async () => {
        const response = await API.get('/transaction');
        console.log(response?.data.Data)
        return response?.data.Data
    })

    return (
        <div className="bgColor">
            <NavLog />
            <div className="container ">
                <p className="fs-3 fw-bold mt-5">Incoming Transaction</p>
                <table className="table bg-white mb-5 table-hover">
                    <thead className="" >

                        <tr >
                            <th scope="col">No</th>
                            <th scope="col">Users</th>
                            <th scope="col">Trip</th>
                            <th scope="col">Bukti Transfer</th>
                            <th scope="col">Status Payment</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody style={{ cursor: "pointer" }}>

                        {transc?.map((item, index) => (

                            <tr data-bs-toggle="modal" data-bs-target={`#exampleModal${item.ID}`}>

                                <td className="no">{index + 1}</td>
                                <td>C Ronaldo</td>
                                <td>{item.trip.title}</td>
                                <td>{item.Attachment}</td>

                                <td > <span style={{ backgroundColor: "lightgreen", fontWeight: "500", color: "green", borderRadius: "5px", padding: "0 15px 5px 15px" }} className="status">{item.Status}</span></td>
                                <td>
                                
                                    <Image src={SearchIcon} />

                                </td>
                                <div class="modal fade modal-xl" id={`exampleModal${item.ID}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog " >
                                        <div class="modal-content bg-transparant" >
                                            <ModalApprove data={transc[index]} />
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