import Card from 'react-bootstrap/Card';
import { useQuery, useMutation } from 'react-query';
import { API } from '../../config/api';
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


export default function TourCardAdmin() {

    const { data: Trip , refetch } = useQuery('tripChace', async () => {
        const response = await API.get('/trip');

        return response.data.Data
    })
    console.log(Trip)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteButton = useMutation(async (id) => {
        try {
            await API.delete(`/trip/${id}`) ;
            refetch()
            handleClose()
        } catch (error) {
            console.log(error)
        }
    })



    return (
        <div className=" row row-cols-1 row-cols-lg-3 row-cols-md-2 m-auto mb-5" style={{ width: "90%" }}>

            {
                Trip?.map((item, index) => (
                    <div className="col mt-5 mb-3" key={index}>
                        <Card style={{ width: '22rem' }} className='position-relative m-auto' >
                            <Card.Img variant="top" src={item.image} style={{ width: "95%", margin: "auto", marginTop: "9px", height: "200px", objectFit: "cover" }} />
                            <p style={{ top: "33px", right: "8px", borderRadius: "  5px 0 0 5px" }} className='position-absolute bg-white'>12/15</p>

                            <div style={{ marginBottom: "5px", marginLeft: "10px", marginTop: "10px" }}>

                                <p style={{ fontSize: "20px", fontWeight: "700" }}>
                                    {item.title}
                                </p>

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ color: "darkorange", fontWeight: "700", fontSize: "18px" }}>IDR. {item.price.toLocaleString()}</p>
                                    <p style={{ color: "grey", fontWeight: "500", marginRight: "30px" }}>{item.country.Name}</p>
                                </div>

                            </div>
                            <div className='d-flex justify-content-around ms-0 mb-3'>
                                <Button variant="" style={{ width: "140px", backgroundColor: "darkorange", color: "white", }} type="button" onClick={() => {

                                    window.location.href = `/update-trip/${item.id}`
                                }}>
                                    Update
                                </Button>

                                <Button variant="" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id}`} className='align-item-center p' style={{ width: "140px", backgroundColor: "darkorange", color: "white", }} type="button">Delete</Button>


                                <div class="modal fade "  id={`exampleModal${item.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" >
                                        <div class="modal-content" >
                                           
                                            <div class="modal-body">
                                                <p className='my-5 text-center fw-bold fs-4'>

                                                Apakah anda yakin mengahapus item ini ??
                                                </p>
                                                <p className='my-5 text-center fw-bold fs-4'>{item.title}</p>
                                                <p className='my-5 text-center fw-bold fs-4'>{item.id}</p>

                                                <div className='d-flex justify-content-evenly'>
                                                <button type="button" className='btn' style={{backgroundColor:"pink", color:"white"}} data-bs-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={()=>{deleteButton.mutate(item.id)}}>Delete</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                              
                            </div>

                        </Card>



                    </div>
                ))
            }
        </div>

    )

}

