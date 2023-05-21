import NavLog from "../Navbar/navbarLogin"
import Footer from "../Footer/footer"
// import Image from 'react-bootstrap/Image'
import SearchIcon from "../images/search.png"
import { TourData } from "../fake-data/dummy"

import { Button, Image } from "react-bootstrap"
import UploadImg from "../images/Upload.png"
import Logo from "../images/logo.png"

// import ModalApprove from "./modalApprove"



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
                    <tbody>

                        {TourData.map((item, index) => (

                            <tr data-bs-toggle="modal" data-bs-target="#exampleModal">

                                <td>{item.id}</td>
                                <td>C Ronaldo</td>
                                <td>{item.title}</td>
                                <td>BCA</td>
                                <td>Pending</td>
                                <td>
                                    <Image src={SearchIcon} />

                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>






                <div class="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog " >
                <div class="modal-content bg-transparant" >
                    <div class="modal-body">

                        <div className=" rounded mt-5" style={{ backgroundColor: "white", width: "85%", margin: "auto", border: "2px solid grey" }}>

                            <div >
                                <div className="d-flex justify-content-between" style={{ width: "90%", margin: "auto" }}>
                                    <div className=''>
                                        <Image className='mt-3' src={Logo} />
                                    </div>
                                    <div className=''>
                                        <p className='fs-2 fw-bold  mb-0 text-end'>Booking</p>
                                        <p className='fs-5 fw-bold text-end' style={{ color: "grey" }}>Saturday, <span className='fw-normal'>25 august 2024</span></p>
                                    </div>

                                </div>
                                <div className='row row-cols-1 row-cols-sm-3 m-auto' style={{ width: "90%" }}>
                                    <div className=''>
                                        <p className='' style={{ marginBottom: "0", fontSize: "20px", fontWeight: "700" }}></p>
                                        <p style={{ color: "grey", marginTop: "0!important" }}></p>
                                        <p className='mt-5' style={{ backgroundColor: "antiquewhite", fontWeight: "500", color: "red", borderRadius: "5px", paddingLeft: "5px", width: "140px" }}>Waiting Payment</p>

                                    </div>
                                    <div className=' row row-cols-2'>
                                        <div className=' mb-0'>
                                            <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Date Trip</p>
                                            <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>23 August 2024</p>
                                        </div>
                                        <div>
                                            <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Date Trip</p>
                                            <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>23 August 2024</p>
                                        </div>
                                        <div>
                                            <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Date Trip</p>
                                            <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>23 August 2024</p>
                                        </div>
                                        <div>
                                            <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Date Trip</p>
                                            <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>23 August 2024</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-end'>
                                        <div className=''>
                                            <Image src={UploadImg} style={{ width: "170px" }} />
                                            <p style={{ color: "grey", fontSize: "13px" }} className='text-end fw-medium pt-3'>Upload Payment Proof</p>

                                        </div>

                                    </div>

                                </div>


                                <div style={{ width: "90%", margin: "auto", marginBottom: "0" }} className='mt-2'>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Full Name</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Phone</th>
                                            </tr>
                                        </thead>
                                        <tbody className=''>
                                            <tr>
                                                {/* <th scope="row">1</th> */}
                                                <td>1</td>
                                                <td>C Ronaldo</td>
                                                <td>Male</td>
                                                <td>8745565878</td>
                                                <th scope='row'> Qty</th>
                                                <th scope='row'> :  </th>
                                            </tr>
                                            <tr>
                                                {/* <th scope="row">1</th> */}
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <th scope='row'> Total</th>
                                                <th scope='row'> :  <span style={{ color: "red" }}>IDR. </span></th>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div style={{ width: "90%", margin: "auto" }} className='d-flex justify-content-end mt-4 mb-5'>
                                <a href={`/profile/`}>

                                    <Button className='btn btn-outline-dark me-3' style={{ color: "white", width: "130px", backgroundColor: "darkorange" }} >Cancel</Button>{' '}
                                </a>
                                <a href={`/profile/`}>

                                    <Button className='btn btn-outline-dark ' style={{ color: "white", width: "130px", backgroundColor: "darkorange" }} >Approve</Button>{' '}
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}