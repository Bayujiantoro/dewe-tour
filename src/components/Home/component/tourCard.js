import Card from 'react-bootstrap/Card';
import { useQuery } from 'react-query';
import { API } from '../../../config/api';

export default function TourCard() {
        
    const {data: Trip} = useQuery('tripChace', async () => {
        const response = await API.get('/trip');
        return response.data.Data
    })  
    // data.data => langsung di eksekusi
    // data?.data => ngecek data nullist / tidak. 
    

    return (
        <div className=" row row-cols-1 row-cols-sm-3 m-auto mb-5" style={{ width: "90%" }}>

            {
                Trip?.map((item, index) => (
                    <div className="col mt-5 mb-3" key={index}>
                        <Card style={{ width: '22rem', height: "350px" }} className='position-relative m-auto' >
                            <Card.Img variant="top" src={item.image} style={{ width: "95%", margin: "auto", marginTop: "9px" }} />
                            <p style={{ top: "33px", right: "8px", borderRadius: "  5px 0 0 5px" }} className='position-absolute bg-white'>12/15</p>

                            <div style={{ marginBottom: "30px", marginLeft: "10px", marginTop:"10px"}}>

                                <p style={{ fontSize: "20px", fontWeight: "700" }}>
                                    <a href={`detail/${item.id}`}  className='text'>
                                        {item.title}
                                    </a>
                                </p>

                                {/* <button style={{border:"none", backgroundColor:"white", fontSize: "20px", fontWeight: "700" }} onClick={toHref(item.id)}>{item.title}</button> */}


                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ color: "darkorange", fontWeight: "700", fontSize: "18px" }}>IDR. {item.price}</p>
                                    {/* <p style={{ color: "grey", fontWeight: "500", marginRight: "30px" }}>{item.country.Name}</p> */}
                                    <p style={{ color: "grey", fontWeight: "500", marginRight: "30px" }}>{item.country.Name}</p>
                                </div>

                            </div>

                        </Card>



                    </div>
                ))
            }
        </div>

    )

}