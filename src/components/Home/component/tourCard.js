import Card from 'react-bootstrap/Card';

import { TourData } from '../../fake-data/dummy';


export default function TourCard() {


    return (
        <div className=" row row-cols-1 row-cols-sm-3 m-0">

            {
                TourData.map((item, index) => (
                    <div className="col mt-5 mb-3" >
                        <Card style={{ width: '22rem', height: "350px" }} className='position-relative m-auto' >
                            <Card.Img variant="top" src={item.img} style={{ width: "95%", margin: "auto", marginTop: "9px" }} />
                            <p style={{ top: "33px", right: "8px", borderRadius: "  5px 0 0 5px" }} className='position-absolute bg-white'>12/15</p>

                            <div style={{ marginBottom: "30px", marginLeft: "20px" }}>

                                <p style={{ fontSize: "20px", fontWeight: "700" }}>{item.title}</p>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ color: "darkorange", fontWeight: "700", fontSize: "18px" }}>IDR. {item.price}</p>
                                    <p style={{ color: "grey", fontWeight: "500", marginRight: "30px" }}>{item.location}</p>
                                </div>

                            </div>

                        </Card>



                    </div>
                ))
            }
        </div>

    )

}