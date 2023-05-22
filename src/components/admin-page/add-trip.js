import NavLog from "../Navbar/navbarLogin"
import Footer from "../Footer/footer"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function AddTrip() {
    return (
        <div className="bgColor">
            <NavLog />
            <div className="container my-5">

                <h2>Add Trip</h2>

                <Form style={{ width: "90%" }} className="m-auto my-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className="fw-bold">Title trip</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Country</Form.Label>
                        <Form.Select aria-label="Default select example" className="bg-dark-subtle">
                            <option ></option>
                            <option value="1">Dubai</option>
                            <option value="2">Japan</option>
                            <option value="3">South Korea</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className="fw-bold">Country</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className="fw-bold">Accommodation</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className="fw-bold">Transportation</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className="fw-bold">Eat</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className="fw-bold">Duration</Form.Label>
                        <div className="d-flex" >
                        <Form.Control type="text" style={{width:"20%"}} className="me-3 bg-dark-subtle" />
                        <Form.Label className="fw-bold me-3">Day</Form.Label>
                        
                        <Form.Control type="text" style={{width:"20%"}} className="me-3 bg-dark-subtle"/>
                        <Form.Label className="fw-bold me-3">Night</Form.Label>


                        </div>
                    </Form.Group>

                    

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className="fw-bold">Data Trip</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className="fw-bold">Price</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className="fw-bold">Quota</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label className="fw-bold">Description</Form.Label>
                        <Form.Control className="bg-dark-subtle" as="textarea" rows={3} style={{resize:"unset"}} />
                    </Form.Group>

                    <Form.Group className="mb-3 row" >
                        <Form.Label className="fw-bold">Image</Form.Label>
                        <Form.Control type="file" className="bg-dark-subtle" multiple style={{width:"25%"}} />
                        
                    </Form.Group>


                    <div className="d-flex justify-content-center my-5">

                    <Button variant="" style={{width:"180px" , backgroundColor:"darkorange", color:"white"}} type="submit">
                        Upload
                    </Button>
                    </div>

                </Form>
            </div>
            <Footer />
        </div>
    )
}