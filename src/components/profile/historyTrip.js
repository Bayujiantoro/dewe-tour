import { Image } from "react-bootstrap"
import Logo from "../images/logo-black.png"
import Barcode from "../images/Barcode.png"


export default function HistoryTrip({data, i , nama}) {
  
    console.log("dari : ", data)
    console.log("dari : ", i)
    console.log("dari : ", nama)
    
    return (
        <div className="m-auto" style={{ width: '75%' }}>
            <p className="fs-3 fw-bold"> History Trip</p>


            <div>

                <div className=" rounded mt-5" style={{ backgroundColor: "white", width: "100%", margin: "auto", border: "2px solid grey", marginBottom:"100px" }}>
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
                            <p className='' style={{ marginBottom: "0", fontSize: "20px", fontWeight: "700" }}>{data?.Trip.title}</p>
                            <p style={{ color: "grey", marginTop: "0!important" }}></p>
                            <p className='mt-5' style={{ backgroundColor: "aliceBlue", fontWeight: "500", color: "Green", borderRadius: "5px", paddingLeft: "5px", width: "140px" }}>{data?.Status}</p>

                        </div>
                        <div className=' row row-cols-2'>
                            <div className=' mb-0'>
                                <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Date Trip</p>
                                <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>23 August 2024</p>
                            </div>
                            <div>
                                <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Duration</p>
                                <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>{`${data?.Trip.day} day ${data?.Trip.night} Night`}</p>
                            </div>
                            <div>
                                <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Accomodation</p>
                                <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>{data?.Trip.accomodation}</p>
                            </div>
                            <div>
                                <p className='fw-3 fs-6 fw-bold' style={{ marginBottom: "0" }}>Transportation</p>
                                <p style={{ color: "grey", marginTop: "0!important", fontSize: "13px" }} className='fw-medium '>{data?.Trip.transportation}</p>
                            </div>
                        </div>
                        <div className=' d-flex justify-content-end'>
                            <div className=''>
                                <Image src={Barcode} style={{ width: "170px" }} />
                                <p style={{ color: "black", fontSize: "15px" }} className='text-center fw-medium pt-3'>TCK07TR</p>

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
                                    <td>{nama}</td>
                                    <td>Male</td>
                                    <td>8745565878</td>
                                    <th scope='row'> Qty</th>
                                    <th scope='row'> : {data?.Counter_qty}</th>
                                </tr>
                                <tr>
                                    {/* <th scope="row">1</th> */}
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <th scope='row'> Total</th>
                                    <th scope='row'> :  <span style={{ color: "red" }}>IDR. {data?.Total.toLocaleString()}</span></th>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
                {/* <div style={{ width: "70%", margin: "auto" }} className='d-flex justify-content-end mt-4 mb-5'>

                    <Button className='btn btn-outline-dark ' style={{ color: "white", width: "150px", backgroundColor: "darkorange" }} >Pay</Button>{' '}
                </div> */}

            </div>

        </div>
    )
}