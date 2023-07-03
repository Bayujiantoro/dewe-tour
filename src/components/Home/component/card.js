import Card from 'react-bootstrap/Card';


export default function Cards({ img, title, desc }) {
    return (

        <div className='mb-md-3'>
            <Card className='card-home mb-3 mb-md-0 py-3' >
                <Card.Img variant="top" src={img} style={{ width: "80px" , margin:"auto"}} />
                <div style={{ textAlign:"center", marginBottom:"30px"}}>
                    
                    <p style={{fontSize:"20px", fontWeight:"700",width:"180px" , margin:"auto"}}>{title}</p>
                    <p style={{width:"200px", margin:"auto"}}>{desc}</p>
                </div>
            </Card>
        </div>

    )

}