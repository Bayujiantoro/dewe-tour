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
import { TourData } from "../fake-data/dummy";
import { useEffect } from "react";



export default function DetailContaint() {
    const {id} = useParams()
    console.log(id)

    const data = TourData.find((item)=> item.id === id )
    
    // const defaultPrice = 8500000
    
    const [qty, setQty] = useState(1)
    const [price, setPrice] = useState(data.Price)
    const HandleMinus = () => {
        if(qty > 1 ) {

            setQty((prev) => prev - 1)
        }
        // setPrice((item)=> item - 1)
    }

    const HandlePlus = () => {
        setQty((data) => data + 1)
        // setPrice((data) => data - 1)
    }

    return (

        <div>

            <div className="container my-5 ps-5 " style={{ width: "80%" }}>
                <h1 className="fw-bold">{data.title}</h1>
                <p style={{ color: "grey", fontSize: "20px" }} className="fw-semibold">{data.location}</p>
                <Carosl />
                <p className="fw-bold fs-4 mt-5">Information Trip</p>
                <div className="row row-cols-1 row-cols-sm-5">
                    <TripInfo imag={Hotel} tag={"Accommodation"} info={"Hotel 4 Nights"} />
                    <TripInfo imag={vector3} tag={"Transportation"} info={"Qatar Airways"} />
                    <TripInfo imag={Eat} tag={"Eat"} info={"Include As Itenarary"} />
                    <TripInfo imag={Clock} tag={"Duration"} info={"6 Day 4 Nights"} />
                    <TripInfo imag={Time} tag={"Date"} info={"26 Agustus 2024"} />
                </div>
                <p className="fw-bold fs-4 mt-5">Description</p>
                <p style={{ color: "grey", fontSize: "13px", fontWeight: "600", marginBottom: "5px" }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis hic eum esse iure saepe corporis molestiae minima ad! Eveniet recusandae voluptas temporibus. Ipsum ratione, error inventore atque dignissimos deleniti ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sapiente libero quas corrupti, distinctio ad labore harum fugit possimus architecto, rerum laudantium iusto enim porro.</p>
                <div className="mt-5 d-flex justify-content-between">
                    <p style={{ color: "darkorange", fontWeight: "700", fontSize: "20px" }}> IDR. {data.Price}  <span style={{ color: "black" }}>/ Person</span></p>

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
                        <p style={{ fontWeight: "700", fontSize: "20px", color: "darkorange" }}> IDR. {data.Price * qty} </p>
                    </div>
                </div>
                <hr></hr>
                <div className=" d-flex justify-content-end">
                    <a href="/payment">

                        <button type="button" className="btn btn-orange" style={{ borderRadius: "3px" }}> BOOK NOW </button>
                    </a>
                </div>

            </div>

        </div>
    )
}