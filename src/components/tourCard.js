import Card from 'react-bootstrap/Card';


export default function TourCard({ img, title, location, price }) {


    return (

        <div className="col mt-3 mb-3" >
            <Card style={{ width: '22rem', height: "350px" }} className='position-relative m-auto' >
                <Card.Img variant="top" src={img} style={{ width: "95%", margin: "auto", marginTop: "9px" }} />
                <p style={{top:"33px", right:"8px", borderRadius:"  5px 0 0 5px"}} className='position-absolute bg-white'>12/15</p>

                <div style={{ marginBottom: "30px", marginLeft: "20px" }}>
                
                    <p style={{ fontSize: "20px", fontWeight: "700" }}>{title}</p>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ color: "darkorange", fontWeight: "700", fontSize: "18px" }}>IDR. {price}</p>
                        <p style={{ color: "grey", fontWeight: "500", marginRight: "30px" }}>{location}</p>
                    </div>

                </div>

            </Card>
            

        </div>

    )

}