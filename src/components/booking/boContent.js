import Image from 'react-bootstrap/Image'
import Logo from "../images/logo-black.png"
import UploadImg from "../images/Upload.png"

import Button from 'react-bootstrap/Button'


// import { Tour } from '../fake-data/dummy'


export default function BoContent() {
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
                    <p className='' style={{ marginBottom: "0", fontSize: "20px", fontWeight: "700" }}>6D/4N Fun tassie Vacation Sydney</p>
                    <p style={{ color: "grey", marginTop: "0!important" }}>Australia</p>
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
                            <th scope='row'> :  1</th>
                        </tr>
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th scope='row'> Total</th>
                            <th scope='row'> :  <span style={{ color: "red" }}>IDR. 12,679.000</span></th>
                        </tr>

                    </tbody>
                </table>
            </div>
            
        </div>
        <div style={{ width: "70%", margin: "auto"}} className='d-flex justify-content-end mt-4 mb-5'>

        <Button className='btn btn-outline-dark ' style={{ color: "white", width:"150px", backgroundColor:"darkorange"}} >Pay</Button>{' '}
        </div>
        
        </div>
    )
}


     {/* <div style={{ width: "90%", margin: "auto", marginBottom: "0" }} className=''>

                <div className='d-flex justify-content-between' style={{ width: "60%" }}>
                    <p className='fw-3 fs-6 fw-bold'>No</p>
                    <p className='fw-3 fs-6 fw-bold'>FullName</p>
                    <p className='fw-3 fs-6 fw-bold'>Gender</p>
                    <p className='fw-3 fs-6 fw-bold'>Phone</p>
                </div>
            </div>
            <hr className='my-0'></hr>

            <div style={{ width: "90%", margin: "auto", marginBottom: "0" }} className='mt-2'>

                <div className='d-flex justify-content-between' style={{ width: "66%" }}>
                    <p className='fw-3 fs-6 fw-semibold' style={{color:"grey"}} >1</p>
                    <p className='fw-3 fs-6 fw-semibold' style={{color:"grey"}}>C Ronaldo</p>
                    <p className='fw-3 fs-6 fw-semibold' style={{color:"grey"}}>Male</p>
                    <p className='fw-3 fs-6 fw-semibold' style={{color:"grey"}}>0763411435252</p>
                </div>
                <div>
                    <p className='fw-3 fs-6 fw-bold'>Qty</p>
                    <p className='fw-3 fs-6 fw-bold'>:</p>
                </div>
            </div> */}