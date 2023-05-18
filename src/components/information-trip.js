import Image from 'react-bootstrap/Image';


export default function TripInfo({ imag, tag, info }) {
    return (
        <div className='col'>
            <p style={{ color: "grey", fontSize: "13px", fontWeight: "600", marginBottom:"5px" }}>{tag}</p>
            <div className='d-flex '>
                <Image src={imag} style={{ height: "35px", marginRight:"20px" }} />
                <p style={{fontSize:"18px", fontWeight:"700"}}>{info}</p>
            </div>


        </div>
    )
}