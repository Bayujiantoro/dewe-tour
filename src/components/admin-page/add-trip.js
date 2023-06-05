import NavLog from "../Navbar/navbarLogin"
import Footer from "../Footer/footer"
import { useMutation, useQuery } from "react-query";
import { API } from "../../config/api";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router";



export default function AddTrip() {
    const [preview, setPreview] = useState(null)  //for images
    const navigate = useNavigate()

    const [data, setData] = useState({
        title: "",
        accomodation: "",
        transportation: "",
        eat: "",
        day: '',
        night: '',
        price: '',
        quota: '',
        description: "",
        image: "",
        id_country: '',
    })

    //fetching Country
    const { data: country } = useQuery('countryChace', async () => {
        const response = await API.get('/country');
        console.log(response?.data.Data)
        return response?.data.Data
    })

    // console.log("ini country ", country[1].Name)


    function handleOnChange(e) {
        setData({
            ...data,
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value
        })



        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    }

    // useEffect(() =>{

    // },[])
    const HandleInput = useMutation(async (e) => {
        try {
            e.preventDefault()

            const config = {
                Headers: {
                    'Content-Type': 'multipart/form-data',
                    // "Authorization" : `Bearer ${localStorage.token}`
                },
            }

            const formData = new FormData();

            formData.set('Image', data.image[0], data.image[0].name);
            formData.set('Title', data.title);
            formData.set('Accomodation', data.accomodation);
            formData.set('Transportation', data.transportation);
            formData.set('Eat', data.eat);
            formData.set('Day', data.day);
            formData.set('Night', data.night);
            formData.set('Price', data.price);
            formData.set('Quota', data.quota);
            formData.set('Description', data.description);
            formData.set('ID_country', data.id_country)

            const response = await API.post("/trip", formData, config);

            console.log("add trip succes : ", response)
            navigate("/income-trip")
            console.log(formData)

        } catch (error) {
            alert("Add trip failed ")
            console.log("add trip failed : ", error)
        }

    })

    return (
        <div className="bgColor">
            <NavLog />
            <div className="container my-5">

                <h2>Add Trip</h2>

                <Form style={{ width: "90%" }} className="m-auto my-4" onSubmit={(e) => HandleInput.mutate(e)}>
                    <Form.Group className="mb-3" >
                        <Form.Label className="fw-bold">Title trip</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" id="title" name="title" onChange={handleOnChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Country</Form.Label>
                        <Form.Select aria-label="Default select example" className="bg-dark-subtle" id="country" name="id_country" onChange={handleOnChange} required>
                            <option ></option>
                            {country?.map((item, index)=>(
                                <option type="number" key={index} value={item.ID}>{item.Name}</option>   
                            ))}

                            {/* <option type="number" value="2">Japan</option>
                            <option type="number" value="3">Swiss</option>
                            <option type="number" value="4">Japan</option> */}
                        </Form.Select>
                    </Form.Group>

                    {/* <Form.Group className="mb-3" >
                        <Form.Label className="fw-bold">Country</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" />
                    </Form.Group> */}

                    <Form.Group className="mb-3" >
                        <Form.Label className="fw-bold">Accomodation</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" name="accomodation" onChange={handleOnChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label className="fw-bold">Transportation</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" name="transportation" onChange={handleOnChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label className="fw-bold">Eat</Form.Label>
                        <Form.Control type="text" className="bg-dark-subtle" name="eat" onChange={handleOnChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label className="fw-bold">Duration</Form.Label>
                        <div className="d-flex" >
                            <Form.Control type="number" style={{ width: "20%" }} className="me-3 bg-dark-subtle" name="day" onChange={handleOnChange} required />
                            <Form.Label className="fw-bold me-3">Day</Form.Label>

                            <Form.Control type="number" style={{ width: "20%" }} className="me-3 bg-dark-subtle" name="night" onChange={handleOnChange} required />
                            <Form.Label className="fw-bold me-3">Night</Form.Label>


                        </div>
                    </Form.Group>



                    <Form.Group className="mb-3" >
                        <Form.Label className="fw-bold">Date Trip</Form.Label>
                        <Form.Control type="date" className="bg-dark-subtle" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label className="fw-bold">Price</Form.Label>
                        <Form.Control type="number" className="bg-dark-subtle" id="price" name="price" onChange={handleOnChange} required />
                    </Form.Group>


                    <Form.Group className="mb-3" >
                        <Form.Label className="fw-bold">Quota</Form.Label>
                        <Form.Control type="number" className="bg-dark-subtle" name="quota" onChange={handleOnChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label className="fw-bold">Description</Form.Label>
                        <Form.Control className="bg-dark-subtle" as="textarea" rows={3} style={{ resize: "unset" }} name="description" onChange={handleOnChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3 row" >
                        <Form.Label className="fw-bold">Image</Form.Label>
                        <Form.Control type="file" className="bg-dark-subtle" style={{ width: "25%" }} name="image" onChange={handleOnChange} required />

                    </Form.Group>


                    <div className="d-flex justify-content-center my-5">

                        <Button variant="" style={{ width: "180px", backgroundColor: "darkorange", color: "white" }} type="submit">
                            Upload
                        </Button>
                    </div>

                </Form>
            </div>
            <Footer />
        </div>
    )
}