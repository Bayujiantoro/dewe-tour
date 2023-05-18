import Card from 'react-bootstrap/Card';


export default function Cards({ img, title, desc }) {
    return (

        <div>
            <Card style={{ width: '13rem', height:"300px"}}>
                <Card.Img variant="top" src={img} style={{ width: "80px" , margin:"auto"}} />
                <div style={{ textAlign:"center", marginBottom:"30px"}}>
                    
                    <p style={{fontSize:"20px", fontWeight:"700",width:"180px" , margin:"auto"}}>{title}</p>
                    <p style={{width:"200px", margin:"auto"}}>{desc}</p>
                </div>
            </Card>
        </div>

    )

}