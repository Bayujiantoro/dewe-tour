import Image from 'react-bootstrap/Image';


export default function TripInfo({ imag, tag, info }) {
    return (
        <div className='col container-trip-info'>
            <p className='text-trip-info '>{tag}</p>
            <div className='d-flex '>
                <Image src={imag} style={{ height: "35px", marginRight:"20px" }} />
                <p style={{fontSize:"18px", fontWeight:"700"}}>{info}</p>
            </div>


        </div>
    )
}