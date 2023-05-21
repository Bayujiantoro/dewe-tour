import { Image } from "react-bootstrap"
import ProfileImg from "../images/Rectangle12.png"
import iconProfile from "../images/icon-profile.png"
import iconEmail from "../images/icon-email.png"
import iconPhone from "../images/icon-phone.png"
import iconMap from "../images/icon-map.png"


export default function Personal() {

    
    return (
        <div className=" m-auto pb-3 rounded bg-white my-5" style={{ width: "50%" }}>

            <div className=" d-flex" style={{ width: "100%" }}>


                <div className=" m-auto" style={{ width: "90%" }}>
                    <div className="ms-5">

                        <p className="fw-bold fs-4 mt-3">Personal Info</p>
                        <div className="d-flex my-3">
                            <Image style={{ width: "30px", height: "30px", marginTop: "7px" }} src={iconProfile} />
                            <div>
                                <p className=" ms-3 my-0 fw-bold">C Ronaldo</p>
                                <p className=" ms-3 my-0" style={{ fontSize: "13px", color: "grey" }}>Full Name</p>
                            </div>
                        </div>
                        <div className="d-flex my-3">
                            <Image style={{ width: "30px", height: "23px", marginTop: "7px" }} src={iconEmail} />
                            <div>
                                <p className=" ms-3 my-0 fw-bold">Ronaldocr7@gmail.com</p>
                                <p className=" ms-3 my-0" style={{ fontSize: "13px", color: "grey" }}>Email</p>
                            </div>
                        </div>
                        <div className="d-flex my-3">
                            <Image style={{ width: "30px", height: "23px", marginTop: "7px" }} src={iconPhone} />
                            <div>
                                <p className=" ms-3 my-0 fw-bold">0826237687</p>
                                <p className=" ms-3 my-0" style={{ fontSize: "13px", color: "grey" }}>Phone Number</p>
                            </div>
                        </div>
                        <div className="d-flex my-3">
                            <Image style={{ width: "30px", height: "30px", marginTop: "7px" }} src={iconMap} />
                            <div>
                                <p className=" ms-3 my-0 fw-bold">08214235445</p>
                                <p className=" ms-3 my-0" style={{ fontSize: "13px", color: "grey" }}>Adress</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=" m-auto">

                    <Image className="rounded" style={{ width: "95%" }} src={ProfileImg} />
                </div>

            </div>
            <div className="d-flex justify-content-end">

            <button type="button" className="btn btn-orange" style={{ borderRadius: "3px",width:"210px", marginRight:"15px" }}> Change Photo Profile </button>
            </div>
        </div>
    )
}