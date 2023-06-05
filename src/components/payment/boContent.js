import Image from 'react-bootstrap/Image'
import Logo from "../images/logo-black.png"
import UploadImg from "../images/Upload.png"
import { useParams } from 'react-router'

import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';


import { useQuery } from "react-query";
import { API } from "../../config/api";
import { useMutation } from 'react-query'


export default function BoContent() {
    const { id } = useParams()

    const { data: transc } = useQuery('tripChace', async () => {
        const response = await API.get(`/transaction/${id}`);
        console.log(response?.data.Data.ID)
        return response?.data.Data
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(transc)

    const handlePay = useMutation( async() => {
        try {
            const config = {
                Headers: {
                    'Content-Type' : 'application/json'
                }
            }
            let transaction = {
                Status: "Waiting Approved"
            }
            const response = await API.patch(`/transaction/${id}`, transaction, config);
            console.log(response)
            handleShow()
            window.location.reload()
        } catch (error) {
            alert("Transaction failed ")
            console.log("transaction failed : ", error)
        }
    })

    return (
        <div>

            <div className=" rounded mt-5" style={{ backgroundColor: "white", width: "70%", margin: "auto", border: "2px solid grey" }}>
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
                        <p className='' style={{ marginBottom: "0", fontSize: "20px", fontWeight: "700" }}>{transc?.Trip.title}</p>
                        <p style={{ color: "grey", marginTop: "0!important" }}>{transc?.Trip.country.Name}</p>
                        <p className='mt-5' style={{ backgroundColor: "antiquewhite", fontWeight: "500", color: "red", borderRadius: "5px", paddingLeft: "5px", width: "140px" }}>{transc?.Status}</p>

                    </div>
                    <div className=' row row-cols-2'>
                        <div className=' mb-0'>
                            <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Date Trip</p>
                            <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>23 August 2024</p>
                        </div>
                        <div>
                            <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Duration</p>
                            <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>{`${transc?.Trip.day} Day ${transc?.Trip.night} Night`}</p>
                        </div>
                        <div>
                            <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Accomodation</p>
                            <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>{transc?.Trip.accomodation}</p>
                        </div>
                        <div>
                            <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Transportation</p>
                            <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>{transc?.Trip.transportation}</p>
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
                                <td>{transc?.User.Name}</td>
                                <td>Male</td>
                                <td>8745565878</td>
                                <th scope='row'> Qty</th>
                                <th scope='row'> :  {transc?.Counter_qty}</th>
                            </tr>
                            <tr>
                                {/* <th scope="row">1</th> */}
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th scope='row'> Total</th>
                                <th scope='row'> :  <span style={{ color: "red" }}>IDR. {transc?.Trip.price * transc?.Counter_qty}</span></th>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
            <div style={{ width: "70%", margin: "auto" }} className='d-flex justify-content-end mt-4 mb-5'>

                <Button className='btn btn-outline-dark ' style={{ color: "white", width: "150px", backgroundColor: "darkorange" }} onClick={handlePay.mutate} >Pay</Button>{' '}

            </div>

            <Modal show={show} onHide={handleClose} centered>
                
                <Modal.Body>Your payment will be Confirmed within 1 x 24 hours to see orders click <span className='fw-bold'>Here</span> thank you</Modal.Body>
                
            </Modal>

        </div>
    )
}

