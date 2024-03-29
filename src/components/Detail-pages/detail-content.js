import Carosl from "./carosel"
import TripInfo from "./information-trip"
import Image from 'react-bootstrap/Image';
import { useState , useEffect } from "react";
import { useNavigate, useParams } from "react-router";


import vector3 from "../images/Vector3.png"
import Hotel from "../images/XMLID631.png"
import Eat from "../images/meal1.png"
import Clock from "../images/time1.png"
import Time from "../images/calendar1.png"
import Minus from "../images/Minus.png"
import Plus from "../images/Plus.png"

import { useMutation, useQuery } from "react-query";
import { API } from "../../config/api";

const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

export default function DetailContaint() {

    let navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState()
    const [qty, setQty] = useState(1)


    const { data: getTrip } = useQuery('tripChace', async () => {
        const response = await API.get(`/trip/${id}`);
        setData(response?.data.Data)

        return response?.data.Data
    })
    const { data: user } = useQuery('userChace', async () => {
        const response = await API.get(`/check-auth`);
        console.log(response?.data.Data)
        return response?.data.Data
    })


    const HandleMinus = () => {
        if (qty > 1) {
            setQty((prev) => prev - 1)
        }
    }

    const HandlePlus = () => {
        setQty((data) => data + 1)
    }

    const createTransc = useMutation(async () => {
        if (localStorage.getItem("user") === null) {
            alert("silahkan login terlebih dahulu")
            return window.scrollTo(500, 0);
        } else if (user.Role === "admin") {
            alert("Admin tidak bisa melakukan transaksi !!!")
            return window.location.href = '/'
        } else {
            try {
                const config = {
                    Headers: {
                        'Content-Type': 'application/json'

                    },
                }

                let Transaction = {
                    Counter_qty: qty,
                    Status: "Waiting Payment",
                    Attachment: "Bca.jpg",
                    TripId: parseInt(id)
                }


                const response = await API.post("/transaction", Transaction, config);
                console.log("xxxxx : ", response)
                
                // payment midtrans
                const token = response.data.Data.token;
                window.snap.pay(token, {
                  onSuccess: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/profile");
                  },
                  onPending: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/profile");
                  },
                  onError: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/profile");
                  },
                  onClose: function () {
                    /* You may add your own implementation here */
                    alert("you closed the popup without finishing the payment");
                  },
                });
                // payment midtrans

            } catch (error) {

                // alert("Transaction failed ")
                console.log(error.response.data)
                console.log("transaction failed : ", localStorage.getItem("user"))
            }
        }
    })
    useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
        const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        //change this according to your client-key
        const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    return (

        <div >

            <div className="container my-5 ">
                <p className="fw-bold font-title">{getTrip?.Title}</p>
                <p style={{ color: "grey", fontSize: "20px" }} className="fw-semibold">{getTrip?.Country?.Name}</p>
                <Carosl Image={getTrip?.Image} />
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
                    <p style={{ color: "darkorange", fontWeight: "700", fontSize: "20px" }}> IDR. {getTrip?.Price.toLocaleString()}  <span style={{ color: "black" }}>/ Person</span></p>

                    <div className="d-flex me-1">
                        <Image style={{ height: "18px", width: "18px", marginRight: "18px", marginTop: "3px", cursor: "pointer" }} src={Minus} onClick={HandleMinus} />
                        <p style={{ marginRight: "18px", display: "inline-block" }}>{qty}</p>
                        <Image style={{ height: "18px", width: "18px", marginTop: "3px", cursor: "pointer" }} src={Plus} onClick={HandlePlus} />

                    </div>

                </div>
                <hr></hr>

                <div className=" d-flex justify-content-between">
                    <p style={{ fontWeight: "700", fontSize: "20px" }} > Total : </p>
                    <div className="d-flex">
                        <p style={{ fontWeight: "700", fontSize: "20px", color: "darkorange" }}> IDR. {(getTrip?.Price * qty).toLocaleString()} </p>
                    </div>
                </div>
                <hr></hr>
                <div className=" d-flex justify-content-md-end justify-content-center">
                    <button type="button" className="btn btn-orange" style={{ borderRadius: "3px" }} onClick={createTransc.mutate}> BOOK NOW </button>
                </div>

            </div>

        </div>
    )
}