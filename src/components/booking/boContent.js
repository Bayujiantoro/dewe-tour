import Image from 'react-bootstrap/Image'
import Logo from "../images/logo-black.png"
import { Tour } from '../fake-data/dummy'


export default function BoContent() {
    return (
        <div className=" rounded my-5" style={{ backgroundColor: "white", width: "70%", margin: "auto" ,border:"2px solid grey" }}>
            <div className=" d-flex justify-content-between" style={{width:"90%", margin:"auto"}}>
                <div>
                    <Image className='mt-3' src={Logo}/>
                </div>
                <div className=''>
                    <p className='fs-2 fw-bold  mb-0'>Booking</p>
                    <p className='fs-5 fw-bold 'style={{color:"grey"}}>Saturday, <span className='fw-normal'>25 august 2024</span></p>
                </div>
                <div>
                    <div>
                        <p></p>
                    </div>
                </div>

            </div>
        </div>
    )
}