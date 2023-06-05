import Carosl from "./carosel"
import TripInfo from "./information-trip"
import Image from 'react-bootstrap/Image';
import { useState } from "react";
import { useParams } from "react-router";


import vector3 from "../images/Vector3.png"
import Hotel from "../images/XMLID631.png"
import Eat from "../images/meal1.png"
import Clock from "../images/time1.png"
import Time from "../images/calendar1.png"
import Minus from "../images/Minus.png"
import Plus from "../images/Plus.png"

import { useMutation, useQuery } from "react-query";
import { API } from "../../config/api";



export default function DetailContaint() {
    const {id} = useParams()
    const [data, setData] = useState()
    const [qty, setQty] = useState(1)

    const {data: fetchTransc} = useQuery('transcChace', async () => {
        const response = await API.get('/transaction');
        console.log("data : ", response?.data.Data)
        return response?.data.Data
    }) 

    let lastTransc = fetchTransc?.length-1
    let getIDlast = fetchTransc?.[lastTransc].ID 
    console.log("length : ", lastTransc)
    console.log("id : ",getIDlast)

    const {data: getTrip} = useQuery('tripChace', async () => {
        const response = await API.get(`/trip/${id}`);
        setData(response.data.Data)
   
        return response.data.Data
    })   
    

    const HandleMinus = () => {
        if(qty > 1 ) {
            setQty((prev) => prev - 1)
        }
    }

    const HandlePlus = () => {
        setQty((data) => data + 1)
    }
            
    const createTransc = useMutation(async () => {
        try {
            const config = {
                Headers: {
                    'Content-Type' : 'application/json'
                    
                },
            }
            
            let Transaction = {
                Counter_qty: qty,
                Status: "Waiting Payment",
                Attachment: "Bca.jpg",
                TripId: parseInt(id)
            }

            
            const response = await API.post("/transaction", Transaction, config);
            console.log("type json data : ", typeof(jsonData))
            console.log("xxxxx : ", response)
            window.location.href = `/payment/${getIDlast+1}`
        } catch (error) {
            alert("Transaction failed ")
            console.log("transaction failed : ", error)
        }
    })

    return (

        <div>

            <div className="container my-5 ps-5 " style={{ width: "80%" }}>
                <h1 className="fw-bold">{getTrip?.Title}</h1>
                <p style={{ color: "grey", fontSize: "20px" }} className="fw-semibold">{getTrip?.Country?.Name}</p>
                <Carosl Image= {getTrip?.Image}/>
                <p className="fw-bold fs-4 mt-5">Information Trip</p>
                <div className="row row-cols-1 row-cols-sm-5">
                    <TripInfo imag={Hotel} tag={"Accommodation"} info={getTrip?.Accomodation} />
                    <TripInfo imag={vector3} tag={"Transportation"} info={getTrip?.Transportation} />
                    <TripInfo imag={Eat} tag={"Eat"} info={getTrip?.Eat} />
                    {/* <TripInfo imag={Clock} tag={"Duration"} info={"6 Day 4 Nights"} /> */}
                    <TripInfo imag={Clock} tag={"Duration"} info={`${getTrip?.Day} Day ${getTrip?.Night} Night`} />
                    <TripInfo imag={Time} tag={"Date"} info={"26 Agustus 2024"} />
                </div>
                <p className="fw-bold fs-4 mt-5">Description</p>
                <p style={{ color: "grey", fontSize: "13px", fontWeight: "600", marginBottom: "5px" }}>{getTrip?.Description}</p>
                <div className="mt-5 d-flex justify-content-between">
                    <p style={{ color: "darkorange", fontWeight: "700", fontSize: "20px" }}> IDR. {getTrip?.Price}  <span style={{ color: "black" }}>/ Person</span></p>

                    <div className="d-flex">
                        <Image style={{ height: "18px", width: "18px", marginRight: "18px", marginTop: "3px", cursor: "pointer" }} src={Minus} onClick={HandleMinus} />
                        <p style={{ marginRight: "18px", display: "inline-block" }}>{qty}</p>
                        <Image style={{ height: "18px", width: "18px", marginTop: "3px", cursor: "pointer" }} src={Plus} onClick={HandlePlus} />

                    </div>

                </div>
                <hr></hr>

                <div className=" d-flex justify-content-between">
                    <p style={{ fontWeight: "700", fontSize: "20px" }} > Total : </p>
                    <div className="d-flex">
                        <p style={{ fontWeight: "700", fontSize: "20px", color: "darkorange" }}> IDR. {getTrip?.Price * qty} </p>
                    </div>
                </div>
                <hr></hr>
                <div className=" d-flex justify-content-end">
                        <button type="button" className="btn btn-orange" style={{ borderRadius: "3px" }} onClick={createTransc.mutate}> BOOK NOW </button>
                </div>

            </div>

        </div>
    )
}